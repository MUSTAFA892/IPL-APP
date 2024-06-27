# prediction/forms.py

from django import forms

class IPLPredictionForm(forms.Form):
    batting_team = forms.CharField(label='Batting Team', max_length=100)
    bowling_team = forms.CharField(label='Bowling Team', max_length=100)
    # Define other form fields similarly
