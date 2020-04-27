from django.shortcuts import render

def index(request):
    return render(request, 'client/index.html')

def edit(request):
    return render(request, 'client/pages/profile/index.html')

def update(request):
    return render(request, 'client/index.html', {'message': "Perfil atualizado com sucesso"})

def checkin(request):
    return render(request, 'client/index.html', {'message': "Check-in realizado com successo"})

def checkout(request):
    return render(request, 'client/index.html', {'message': "Check-out realizado com successo"})

def get_room(request):
    return render(request, 'client/pages/booking/index.html', {'message': "client's page room"})

def booking(request):
    return render(request, 'client/index.html', {'message': "Sua reserva foi feita com sucesso!"})

def last_booking(request):
    return render(request, 'client/pages/last_booking/index.html')

def current_booking(request):
    return render(request, 'client/pages/current_booking/index.html')

def pending_booking(request):
    return render(request, 'client/pages/pending_booking/index.html')

def justify(request):
    return render(request, 'client/pages/pending_booking/index.html', {'message': "Sua pendência foi justificada"})