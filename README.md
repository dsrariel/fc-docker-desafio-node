# Description

This repository is an assignment of the [Full Cycle Course](https://curso.fullcycle.com.br/curso-fullcycle/).

This repo creates 3 containers:
1. nginx: a reverse proxy for app;
2. app: a node app; and
3. db: a mysql db.

db will mount a volume locally to persist db data under `./mysql`.
app root page will show a list of names registered on db.

# How to run
```bash
docker compose up -d
```

Then, access [http://localhost:8080](http://localhost:8080).
