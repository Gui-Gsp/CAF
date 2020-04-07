from django.urls import path

from . import views

urlpatterns = [
    path('client/login', views.clientLogin, name="client login"),
    path('client/logout', views.clientLogout, name="client logout"),
]