# Use an official Node.js runtime as the base image
FROM node:18

COPY . .

# Install dependencies
RUN yarn install

# Copy the rest of the application source code to the container
# Expose the port the app runs on
EXPOSE 8000

# Define the command to run the application
CMD ["yarn", "start"]
