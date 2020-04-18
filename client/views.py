from django.shortcuts import render

def index(request):
    return render(request, 'client/index.html', {'message': "client's page index"})

def get_room(request):
    return render(request, 'client/pages/room.html', {'message': "client's page room"})