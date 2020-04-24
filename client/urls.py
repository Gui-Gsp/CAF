from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="dashboard"),
    path('perfil', views.edit, name="profile"),
    path('updated', views.update, name="client_update"),
    # REMEMBER id
    path('check-in', views.checkin, name="check-in"),
    path('check-out', views.checkout, name="check-out"),
    path('salas', views.show_rooms, name="rooms"),  
    path('sala', views.get_room, name="room"),
    path('reserva', views.booking, name="make_booking"),
    path('reserva-histórico', views.last_booking, name="last_booking"),
    path('reserva-agenda', views.current_booking, name="current_booking"),
    path('reserva-pendentes', views.pending_booking, name="pending_booking"),
    path('reserva-pendentes/justificada', views.justify, name="justify"),
]