from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="dashboard"),
    # REMEMBER id here
    path('sala', views.get_room, name="room"),
    # REMEMBER id here
    path('reserva', views.booking, name="make_booking"),
    # REMEMBER id here
    path('reserva/histórico', views.last_booking, name="last_booking"),
    # REMEMBER id here
    path('agenda', views.current_booking, name="current_booking"),
    # REMEMBER id here
    path('reserva/pendentes', views.pending_booking, name="pending_booking"),
]