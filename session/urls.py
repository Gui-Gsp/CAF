from django.urls import path

from . import views

urlpatterns = [
    path('client/login', views.clientLogin, name="client_login"),
    path('client/logout', views.clientLogout, name="client_logout"),
]