


	FROM node:alpine
	
	WORKDIR /app

	COPY . .
	
	EXPOSE 6666

	CMD node server.js


