# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port on which your application will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]

