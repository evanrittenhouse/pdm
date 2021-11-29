import flask
import time
from string import ascii_lowercase, ascii_uppercase, digits
from credentials import clientId, clientSecret
import requests
import base64
import random
import json

app = flask.Flask(__name__)
state = ''.join(random.choice((ascii_uppercase + digits + ascii_lowercase)) for _ in range(16))
uri = 'http://localhost:5000/shuffle'


@app.route('/email', methods=['POST'])
