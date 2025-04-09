FROM node:20-slim

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm run build

# Remove development dependencies
RUN npm prune --production

CMD ["node", "dist/index.js"] 