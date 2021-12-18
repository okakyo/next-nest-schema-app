up:
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

dev-restart:
	make dev-clean && make down && make up

