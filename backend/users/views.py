from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer

class RegisterView(APIView):
    permission_classes = []  # offen

    def post(self, request):
        ser = RegisterSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response({'message': 'Registrierung erfolgreich'}, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
