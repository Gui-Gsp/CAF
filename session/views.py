from django.shortcuts import render

def clientLogin(request):
    return render(request, 'client/session/login.html', {"message": "Client's login page"})

def clientLogout(request):
    return render(request, 'client/session/login.html', {"message": "Client's login page"})