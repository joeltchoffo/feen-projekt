# SQL-Feen Projekt

Dieses Repository enthält ein kleines Beispiel-Spiel, bei dem mit SQL-Abfragen Feen befreit werden. Die Anwendung besteht aus einem Django REST Backend und einem React Frontend.

## Projektstruktur

- **backend/** – Django‑Projekt mit zwei Apps (`users` und `game`). Die REST-API nutzt JWT-Authentifizierung.
- **frontend/** – React + Vite Anwendung mit TailwindCSS.
- **docker-compose.yml** – Startet zwei PostgreSQL Datenbanken und das Backend.

## Entwicklung mit Docker

1. `docker-compose up --build`
   startet die Datenbanken und das Backend unter `http://localhost:8000`.
2. In einem zweiten Terminal das Frontend starten:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Das Frontend ist dann unter `http://localhost:5173` erreichbar.

Das Frontend verwendet die Umgebungsvariable `VITE_API_URL` um die Backend-API zu finden. In `frontend/.env` ist standardmäßig `http://backend:8000/api` eingetragen.

## API-Endpunkte

Im Backend sind u. a. folgende Routen definiert:

```text
/api/health/              – einfacher Health‑Check
/api/register/            – neues Benutzerkonto anlegen
/api/token/               – JWT erhalten
/api/token/refresh/       – Access-Token erneuern
/api/progress/            – Fortschritt des Spielers abrufen
/api/mission/<level>/<mission>/ – SQL einer Mission auswerten
```

Weitere Details finden sich in den Quelltexten unter `backend/` und `frontend/`.
