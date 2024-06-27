from pyexpat import model
from django.shortcuts import redirect, render
from django.shortcuts import HttpResponse
import requests
from django.http import HttpResponse
import joblib
import pandas as pd
import subprocess
import streamlit
from flask import Flask, render_template, request
import pickle
import numpy as np

# Create your views here.
def index(request):
    api_key = 'YOUR_API_KEY'
    url = 'https://api.cricket.com/v1/matches/live'
    headers = {
        'Api-Key': api_key
    }
    response = requests.get(url, headers=headers)
    matches = response.json().get('matches', [])
    context = {'matches': matches}
    return render(request, 'index.html', context)
def contact(request):
    return render(request,'contact.html') 
def winner(request):
    process = subprocess.Popen(['streamlit', 'run', 'streamlit_app/app.py'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, _ = process.communicate()

    # Return response
    return HttpResponse(output)
def score(request):
    local_url = '/http://localhost:5000//'

    # Redirect to the local URL
    return redirect(local_url)


    return render(request,"score.html")

def live(request):
     return render(request,'live.html')
def rec(request):
    return render (request,'rec.html')
def team(request):
    return render(request,'team.html')