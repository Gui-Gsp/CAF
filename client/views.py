from django.shortcuts import render

def index(request):
    return render(request, 'client/index.html', {'message': "client's page index"})

def get_room(request):
    return render(request, 'client/pages/booking/index.html', {'message': "client's page room"})

def booking(request):
    return render(request, 'client/index.html', {'booking_msg': "Sua reserva foi feita com sucesso!"})