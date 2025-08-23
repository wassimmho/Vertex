
from django.urls import path,include
from user.views import new_Question,new_Response,showquestions,showresponses
#{from views import }

urlpatterns =[
    
    path('newQuestion/', new_Response,name="new_Response"),
    path('newResponse/', new_Question,name="new_Question"),
    path('showresponse/',showresponses,name='showresponses'),
    path('showquestions/',showquestions,name='showquestions')
]