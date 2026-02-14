FROM node:20-alpine

# Install ffmpeg and libwebp for sticker/media processing
RUN apk add --no-cache ffmpeg libwebp-tools

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN cp example.settings.js settings.js 2>/dev/null || true

EXPOSE 3001

CMD ["npm", "run", "luthor"]