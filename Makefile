run:
	@docker-compose up -d --build frontend

debug:
	@docker-compose up --build --no-deps frontend

stop:
	@docker-compose down

clean:
	# @find . -path "*/migrations" -type d -exec rm -rf {} +
	@find . -path "*/__pycache__" -type d -exec rm -rf {} +
	@docker-compose down
	@docker system prune -f
	@docker network prune -f
	@docker image prune -f
	@docker container prune -f

restart: stop debug

fclean: clean
	@docker rmi -f $(shell docker images -q)
	@docker volume rm $(shell docker volume ls -q)