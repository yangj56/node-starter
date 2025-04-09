# Build stage
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY jest.config.js ./
COPY src ./src

RUN npm install
RUN npm run test
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/dist/index.min.js ./dist/
COPY --from=builder /app/package*.json ./

RUN npm install --production

# Set NODE_ENV
ENV NODE_ENV=production

CMD ["node", "dist/index.min.js"] 