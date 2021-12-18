up:
	docker compose down
	docker compose up

build-up:
	docker compose build

down:
	docker compose down

start:
	docker compose start

stop:
	docker compose stop

dev-clean:
	docker compose rm postgresqlvolume

dev-clean-restart:
	make dev-clean
	make up

migrate:
	docker compose exec api yarn migration:run

migrate-down:
	docker composee exec api yarn migration:revert


