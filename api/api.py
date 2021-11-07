import flask
import time
from string import ascii_lowercase, ascii_uppercase, digits
from credentials import clientId
import requests
import random

app = flask.Flask(__name__)


@app.route('/time')
def getCurrentTime():
    return {'time': time.time()}


@app.route('/login')
def showSpotifyPopup():
    state = ''.join(random.choice((ascii_uppercase + digits + ascii_lowercase))
                    for _ in range(16))
    uri = 'http://localhost:5000/shuffle/'

    return flask.redirect(f"https://api.spotify.com/authorize?client_id={clientId}&response_type=code&redirect_uri={uri}&state={state}")


@app.route('/shuffle')
def shuffle():
    return 'hello world'
