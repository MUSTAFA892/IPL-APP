from django.shortcuts import redirect, render
from django.shortcuts import HttpResponse
# Create your views here.
def home(request):
    return render(request,'login.html')
def google_login(request):
    return redirect('https://accounts.google.com/o/oauth2/auth...')