import urllib                                                                   
import os                                                                       
import time
#from astropy.table import Table
import numpy as np

import requests

api_token = "873afd21-9a5a-44b7-a99a-5d17709ce2ba"
host = "http://localhost:5000/"

endpoint = "gcn_event/summary"
url = urllib.parse.urljoin(host, f'/api/{endpoint}/2022-08-22T20:26:30/history')
headers = {'Authorization': f'token {api_token}'}
data={"group_ids": "all"}

r = requests.post(url, headers=headers, json=data)
print(r.json())
#print(stop)
print("deuxièmesdfjljdfkkjfl")
endpoint = "sources"
url = urllib.parse.urljoin(host, f'/api/{endpoint}')
headers = {'Authorization': f'token {api_token}'}
params={"ra": 215.8878169, "dec": 40.1886581, "radius": 2}

r = requests.get(url, headers=headers, params=params)
print(r.json())