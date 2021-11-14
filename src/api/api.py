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

@app.route('/time')
def getCurrentTime():
    return {'time': time.time()}


@app.route('/login')
def showSpotifyPopup():
    scope = 'playlist-modify-private playlist-read-private playlist-modify-public'

    return flask.redirect(f"https://accounts.spotify.com/authorize?client_id={clientId}&response_type=code&redirect_uri={uri}&state={state}&scope={scope}")


@app.route('/shuffle')
def shuffle():
    # get response code
    responseCode = flask.request.args.get('code')
    data = {
        'grant_type': 'authorization_code',
        'code': responseCode,
        'redirect_uri': uri
    }

    byteAuthString = f"{clientId}:{clientSecret}".encode('ascii')
    b64Encoded = base64.urlsafe_b64encode(byteAuthString).decode()
    headers = {
        "Authorization": f"Basic {b64Encoded}",
        "Content-Type": "application/x-www-form-urlencoded"
    }

    # exchange response code for an access token
    res = requests.post('https://accounts.spotify.com/api/token', data=data, headers=headers)
    jsonResponse = res.json()
    accessToken = jsonResponse.get('access_token')

    playlistUrl = 'https://api.spotify.com/v1/me/playlists/'
    offset = 0
    requestUrl = playlistUrl + f"?offset={offset}"

    headers = {
        'Authorization': f"Bearer {accessToken}",
    }
    playlists = requests.get(requestUrl, headers=headers)
    playlistJson = playlists.json()

    playlists = {'playlists': None}
    playlists['playlists'] = playlistJson.get('items')

    try: 
        nextUrl = playlistJson.get('next')
        while nextUrl != 'null': 
            newResponse = requests.get(nextUrl, headers)
            newResponseJson = newResponse.json()
            playlists['playlists'].append(newResponseJson.get('items'))
            nextUrl = newResponseJson.get('next')
    except:
        print('max playlists returned')

    return playlists