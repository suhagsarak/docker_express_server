


	FROM node:alpine
	
	WORKDIR /app

	COPY . .
	
	EXPOSE 5555
	
	CMD node server.js


