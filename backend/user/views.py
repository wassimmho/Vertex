from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password
from datetime import datetime
# Create your views here.

from .models import User ,Tags,Questions,Response


@api_view(['POST'])
def new_Question(request):
    title = request.data.get("question_title")
    date = datetime.now()
    description = request.data.get("question_text")
    userid = request.data.get("user_id")
    tag_ids = request.data.get("tags", [])
    user = User.objects.filter(id = userid)

    question = Questions.objects.create(
        user = user,
        question_title = title,
        publish_date = date,
        question_text = description,
    )


    tags = Tags.objects.filter(id__in=tag_ids)
    question.tags.set(tags)
    
    return Response(
        {"message":f"Question added and the question's id is {question.id}"},
        status = status.HTTP_201_CREATED
    )

@api_view(['POST'])
def new_Response(request):

    date = datetime.now()
    description = request.data.get("response_text")
    questionid = request.data.get("question_id")
    userid = request.data.get("user_id")


    user = User.objects.filter(id = userid)
    question = Questions.objects.filter(id = questionid)


    response = Response.objects.create(
        user = user,
        question = question,
        response_date = date,
        response_text = description,
    )
    
    return Response(
        {"message":"Response added"},
        status = status.HTTP_201_CREATED
    )




@api_view(["GET"])
def showquestions(request):
    questions=Questions.objects.All()

    title = request.GET.get("title")
    if title:
        questions = questions.filter(question_title__icontains = title)


    tag_ids = request.GET.get("tags", [])
    if tag_ids:
        questions = questions.filter(id__in = tag_ids)

    questions=questions.orderby("publish_date")

    question_list = []
    for q in questions:
        question_list.append({
            'id': q.id,
            'user_id': q.user.id,
            'username': q.user.username,
            'question_title': q.question_title,
            'publish_date': q.publish_date,
            'question_text': q.question_text,
            'tags': [tag.name for tag in q.tags.all()]
        })

    return Response(question_list)


@api_view(["GET"])
def showresponses(resquest):
    questionid=resquest.data.get(questionid)
    response=Response.objects.filter(id=questionid)

    response_list = []
    for r in response:
        response_list.append({
            'id': r.id,
            'question_id': r.question.id,
            'response_text': r.response_text,
            'response_date': r.response_date,
            'upvote': r.upvote
        })

    return Response(response_list)

    