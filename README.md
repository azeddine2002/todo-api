# Todo API — Dockerisée

API REST de gestion de tâches avec Node.js et Docker.

## Membres du groupe
- Ton Prénom Nom

## Comment lancer le projet

### Prérequis
- Docker Desktop installé

### Lancer avec Docker
```bash
docker compose up --build
```
L'API sera disponible sur http://localhost:3000

### Endpoints disponibles
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | /health | Vérifier que l'API fonctionne |
| GET | /api/tasks | Lister toutes les tâches |
| GET | /api/tasks/:id | Voir une tâche |
| POST | /api/tasks | Créer une tâche |
| PUT | /api/tasks/:id | Modifier une tâche |
| DELETE | /api/tasks/:id | Supprimer une tâche |

### Exemple de création de tâche
```json
POST /api/tasks
{
  "description": "Ma première tâche",
  "status": "todo"
}
```
