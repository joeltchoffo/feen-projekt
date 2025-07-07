from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Mission  # dein ORM-Modell
from .models import UserProgress  # unser neues Modell


class ProgressView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            prog = UserProgress.objects.get(user=request.user)
        except UserProgress.DoesNotExist:
            # Falls noch kein Fortschritt angelegt ist, Default-Werte zurückgeben
            data = {
                "mode": "normal",
                "points": 0,
                "scrolls": [],
                "completed_missions": [],
            }
        else:
            data = {
                "mode": prog.mode,
                "points": prog.points,
                "scrolls": prog.scrolls,
                "completed_missions": [
                    f"{m.level}-{m.mission}" for m in prog.completed_missions.all()
                ],
            }
        return Response(data)
    

class MissionEvaluateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, level, mission):
        sql = request.data.get("sql")
        if not sql:
            return Response({"error": "Keine SQL-Abfrage gesendet"}, status=400)

        # Mission-Objekt via ORM laden
        try:
            mission_obj = Mission.objects.using('game').get(
                level=level, mission=mission
            )
        except Mission.DoesNotExist:
            return Response({"error": "Mission nicht gefunden"}, status=404)

        # SQL gegen die spieldaten-DB ausführen
        from django.db import connections
        with connections['game'].cursor() as cursor:
            try:
                cursor.execute(sql)
            except Exception as e:
                return Response({"error": str(e)}, status=400)

            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()

        result = [dict(zip(columns, row)) for row in rows]
        return Response({"result": result})

class HealthCheckView(APIView):
    def get(self, request):
        return Response({"status": "ok"}, status=status.HTTP_200_OK)