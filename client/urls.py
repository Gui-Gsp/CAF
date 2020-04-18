from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="dashboard"),
    # REMEMBER id here
    path('sala', views.get_room, name="room"),
]