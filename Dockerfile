


	FROM node:alpine
	
	WORKDIR /devops pr/docker_jenkins_mean_app/server

	COPY . .
	
	EXPOSE 5555
	
	CMD node server.js


