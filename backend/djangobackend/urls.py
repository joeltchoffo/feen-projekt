"""
URL configuration for djangobackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from users.views import RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from game.views import ProgressView, MissionEvaluateView
from game.views import HealthCheckView


urlpatterns = [
    path('api/health/', HealthCheckView.as_view(), name='health'),
    path('api/register/',       RegisterView.as_view(),        name='register'),
    path('api/token/',          TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/',  TokenRefreshView.as_view(),    name='token_refresh'),
    path('api/progress/',       ProgressView.as_view(),        name='progress'),
    path('api/mission/<int:level>/<int:mission>/', MissionEvaluateView.as_view(), name='mission_eval'),
]
