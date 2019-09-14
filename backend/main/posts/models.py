from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
