FROM node:12.2.0-alpine
COPY . .
RUN npm install
RUN cd /frontend
RUN npm install
EXPOSE 7000
EXPOSE 3000
CMD ["npm","start"]
