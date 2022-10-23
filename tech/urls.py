from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('signin', views.signin, name='signin'),
    path('signup', views.signup, name='signup'),
    path('read_more', views.read_more, name='read_more'),
    path('tool', views.tool, name='tool'),
    path('gallery', views.gallery, name='gallery'),
    path('contact', views.contact, name='contact'),
    
]
