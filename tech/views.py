import re
from django.contrib import messages, auth
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.core.mail import send_mail


# Create your views here.
def home(request):
    return render(request, 'pages/home.html')

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            auth.login(request, user)
            messages.success(request, 'You logged in successfully')
            return redirect('home')
        else:
            messages.error(request, 'Bad credentials')    
            return redirect('signin')
    else:    
        return render(request, 'accounts/signin.html')

def signup(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password  = request.POST['password']
        confirm_password = request.POST['confirm_password']
        
        
        if len(username)>10 :
            messages.error(request, 'Username must be less than 10 characters!')
            return redirect('signup')
        
        if len(password)<8 :
            messages.error(request, 'Password must be 8 characters!')
            return redirect('signup')
            
        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.error(request, 'User already exists')
                return redirect('signup')
            else:
                if User.objects.filter(email=email).exists():
                    messages.error(request, 'Email already exists')
                    return redirect('signup')
                else:
                    user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email, password=password)
                    
                    user.save()
                    admin_info = User.objects.get(is_superuser=True)
                    admin_email = admin_info.email
                    send_mail(
                            "Welcome message",
                            "Hello" + user.first_name + "!! \n " + "You are welcome to my Tech gadgets site \n Thank you for signing up with us.",
                            "ezemosesjohn21997@gmail.com",
                            [user.email],
                            fail_silently = False,
                    )
                    messages.success(request, 'You signed up successfully!')
                    return redirect('signin')  
                
                
        else:
            messages.error(request, 'Passwords do not match!') 
            return redirect('signup') 
                
    else:    
        return render(request, 'accounts/signup.html')
    
def read_more(request):
    return render(request, 'pages/read_more.html')

def tool(request):
    return render(request, 'pages/tool.html')

def gallery(request):
    return render(request, 'pages/gallery.html')

def contact(request):
    return render(request, 'pages/contact.html')