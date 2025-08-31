# backend/Dockerfile

# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all backend files
COPY . .

# Expose backend port (e.g., 5000)
EXPOSE 5000

# Start backend
CMD ["npm", "start"]
