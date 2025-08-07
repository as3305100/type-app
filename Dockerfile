# Use official Node image
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm install

# Copy the rest of your project files
COPY . .

# Build TypeScript
RUN npm run build

# Run the compiled app
CMD ["node", "dist/index.js"]
