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
    return render(request, 'client/index.html', {'modal': "room"})

def booking(request):
    return render(request, 'client/index.html', {'message': "Sua reserva foi feita com sucesso!"})

def last_booking(request):
    return render(request, 'client/index.html', {'modal': "last_booking"})

def current_booking(request):
    return render(request, 'client/index.html', {'modal': "current_booking"})

def pending_booking(request):
    return render(request, 'client/index.html', {'modal': "pending_booking"})

def justify(request):
    return render(request, 'client/index.html', {'message': "Sua pendência foi justificada"})