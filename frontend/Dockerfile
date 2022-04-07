FROM node:latest
WORKDIR /frontend
COPY ./frontend_app/package.json ./
RUN npm install
COPY ./frontend_app .
EXPOSE 3000
CMD ["npm", "start"]