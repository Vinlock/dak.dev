build:
	docker-compose build --parallel

logs:
	docker-compose logs -ft --tail 500 app

start:
	docker-compose up -d

stop:
	docker-compose stop

restart:
	docker-compose restart

reboot: stop start

start-logs: start logs

reboot-logs: stop start-logs
