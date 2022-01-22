# Next.js Nest.js Sample Repository

![Logo](images/next-nest-openapi.png)

An example repository for a Schema-Driven Development project with Nest.js & Next.js


## Requirements

- Node.js (v17.2.0)
- Makefile
- Docker

## Setup

1. Install nodejs(v17.2.0), Makefile, and Docker

2. Build and start up an applications

```bash
make build-up
```

After setup, execute `make up`

3. Migration and Seeding

```bash
make migrate
make db-seed
```

## Commands

- ### Activate an app

```
make up
```

- ### Deactivate an app

```
make down
```

- ### Migration

```
make migrate
```

- ### Revertion

```
make migrate-down
```

- ### Seeding

```
make db-seed
```

- ### clean an DB Schema

```
make db-clean
```

- ### Generate OpenAPI codes
```bash
# on running the API server at http://localhost:11000
cd front; yarn codegen
```


## URL

- Frontend: http://localhost:10000
- Backend: http://localhost:11000
- PostgreSQL: http://localhost:5432


## LISENCE
- [MIT](./LICENSE)

## Author
- Oka Kyohei(@okakyo)
