# DEV TOOLS
## Run Project (Docker)
```
docker compose build or docker-compose build
docker compose up -d or docker-compose up -d
```

## Run Project (Manual)
* Backend
```
cd server-side
yarn start
```
* Frontend
```
cd client-side
yarn dev
```

## Branch
- `main` - When staging features that ready to be deployed on the production.
- `feature/{feature name}` - For develop new features, eg: feature/a or feature/b.
- `debug/{feature name}` - For the feature that have to test something new or resolve the bug.
