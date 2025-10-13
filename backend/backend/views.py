from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password
from datetime import datetime
from user.models import User


@api_view(['POST'])
def signin(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")


    if User.objects.filter(email = email):
        return Response({"error":"User already exists"},
                        status = status.HTTP_400_BAD_REQUEST 
        )
    
    if User.objects.filter(username = username):
        return Response({"error":"User already exists"},
                        status = status.HTTP_400_BAD_REQUEST  
        )
    
    password = make_password(password)

    user = User.objects.create(
        username = username,
        email = email,
        password = password
    )

    return Response(
        {'message':"User added to the DB",
         "id": "user.id"
         },
        status = status.HTTP_201_CREATED,
        
    )



@api_view(['POST'])
def Login(request):

    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response(
            {"error": "Email and password are required."},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    user = None

    try:
        user = User.objects.get(email = email)

        if not user.check_password(password):
            user = None
    except User.DoesNotExist :
        return Response({"error":"user not found"},
                        status = status.HTTP_401_UNAUTHORIZED)
    
    refresh = RefreshToken.for_user(user)

    return Response({
        'refresh':str(refresh),
        'access':str(refresh.access_token),
        'email' : email,
        "id": user.id
    })