from django.db import models
from django.conf import settings
# from django.contrib.auth.models import User


class Mission(models.Model):
    level = models.IntegerField()
    mission = models.IntegerField()
    punkte = models.IntegerField()
    loesung = models.TextField()

    class Meta:
        unique_together = ("level", "mission")

    def __str__(self):
        return f"Level {self.level} – Mission {self.mission}"


class UserProgress(models.Model):
    # user               = models.OneToOneField(User, on_delete=models.CASCADE)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    mode = models.CharField(max_length=20, default="normal")
    points = models.IntegerField(default=0)
    scrolls = models.JSONField(default=list)  # Liste von Scroll-Namen
    completed_missions = models.ManyToManyField(
        Mission, blank=True
    )  # erledigte Missionen

    def __str__(self):
        return f"Progress of {self.user.username}"
