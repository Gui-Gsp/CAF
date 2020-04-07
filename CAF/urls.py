from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('home.urls')),
    path('client/', include('client.urls')),
    path('session/', include('session.urls')),
    path('admin/', admin.site.urls),
]