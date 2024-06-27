from django.urls import path
from . import views
urlpatterns = [
    path('',views.index, name ='index'),
    path('contact.html', views.contact, name='contact'),
    path('index/',views.index, name="index"),
    path('winner.html',views.winner,name="winner"),
    path('score.html/', views.score,name="score"),
    path('live.html',views.live, name= 'live'),
    path('rec/',views.rec, name="rec"),
    path('team/',views.team, name="team")
]



    
