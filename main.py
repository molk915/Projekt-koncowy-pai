import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app)


def find_unique_name(name, tier, language, enchant):
    item_tier = {
        "1": "Begginer's", "2": "Novie's", "3": "Journeymsn's", "4": "Adept's",
        "5": "Expert's", "6": "Master's", "7": "Grandmaster's", "8": "Elder's"
    }

    full_name = f"{item_tier[tier]} {name}"

    with open("all_items.json", 'r', encoding='utf-8') as file:
        all_items = json.load(file)

    for item in all_items:
        if item.get('LocalizedNames') and item['LocalizedNames'].get(language) == full_name:
            if enchant == "0":
                return f"{item['UniqueName']}"
            else:
                return f"{item['UniqueName']}@{enchant}"

    return None


def searchitem(location, itemID, quality):
    url = f"https://west.albion-online-data.com/api/v2/stats/prices/{itemID}?locations={location}&qualities={quality}"

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print("Failed to retrieve data")
        return None


def get_gold_price():
    gold_api_url = "https://west.albion-online-data.com/api/v2/stats/gold?count=2"
    gold_response = requests.get(gold_api_url)
    
    if gold_response.status_code == 200:
        gold_data = gold_response.json()
        if gold_data and isinstance(gold_data, list) and len(gold_data) > 0:
            # Wybierz pierwszy element z listy (najnowsza cena złota)
            latest_gold_entry = gold_data[0]
            if 'price' in latest_gold_entry:
                gold_price = latest_gold_entry['price']
                return gold_price
            else:
                print("Key 'price' not found in gold data:", latest_gold_entry)
        else:
            print("Invalid or empty gold data received:", gold_data)
    else:
        print("Failed to retrieve gold data. Status code:", gold_response.status_code)

    return None


def get_item_icons(itemID):
    url = f"https://render.albiononline.com/v1/item/{itemID}.png"

    response = requests.get(url)

    if response.status_code == 200:
        data = url
        return data
    return None


def get_item_abilities(itemName):
    session = requests.Session()
    url = f"https://wiki.albiononline.com/wiki/{itemName}"
    response = session.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        tables = soup.find_all('table', class_="wikitable")
        tables = tables[1:]

        abilities_list = []

        for i, table in enumerate(tables, 1):
            abilities_dict = {"slot": str(i), "abilities": {}}
            trs = table.find_all("tr")

            if i == 4:
                trs = trs[2:]
            else:
                trs = trs[3:]

            ability_index = 1

            for j, tr in enumerate(trs, 1):
                tds = tr.find_all("td", attrs={"rowspan": ["1", "2"]})
                for td in tds:
                    ability_text = td.text.strip()
                    if ability_text:
                        abilities_dict["abilities"][str(
                            ability_index)] = ability_text
                        ability_index += 1

            abilities_list.append(abilities_dict)

        return abilities_list

    else:
        print("Failed to fetch data from the URL:", url)


@app.route('/<itemName>/<tier>/<enchants>/<quality>/<location>', methods=['GET'])
def get_items(itemName, tier, enchants, quality, location):
    itemID = find_unique_name(itemName, tier, "EN-US", enchants)
    result = searchitem(location, itemID, quality)
    item_abilities = get_item_abilities(itemName)

    if result:
        gold_price = get_gold_price()
        item_icons = get_item_icons(itemID)
        return jsonify(result, item_icons, item_abilities, gold_price)
    else:
        return "Failed to retrieve data", 500


@app.route('/gold', methods=['GET'])
def get_gold():
    gold_price = get_gold_price()
    if gold_price is not None:
        return jsonify({"gold_price": gold_price})
    else:
        return "Failed to retrieve gold price", 500

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)