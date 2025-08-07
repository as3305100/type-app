FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

RUN npm prune --omit-dev


FROM node:22-slim AS runner

WORKDIR /app

RUN apt-get update && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/dist ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

RUN useradd -m appuser
USER appuser

CMD ["node", "index.js"]