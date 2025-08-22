from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Tags(models.Model):
    name = models.CharField(max_length=100)

class Questions(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question_title = models.CharField(max_length=100)
    publish_date = models.DateTimeField()
    question_text = models.TextField(max_length=200)
    tags = models.ManyToManyField(Tags)
    

class Response(models.Model):

    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    response_text = models.TextField()
    response_date = models.DateTimeField()
    upvote = models.IntegerField(default=0)

