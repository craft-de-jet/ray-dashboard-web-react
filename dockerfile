FROM node:10.16.3-alpine

WORKDIR /app

CMD ["sh","-c","./ops/pre-start.sh && npm start"]
