


	FROM node:alpine
	
	WORKDIR /app

	COPY . .
	
	EXPOSE 6666

	CMD npm install
	
	CMD node server.js


