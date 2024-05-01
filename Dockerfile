# Single-stage build with Alpine base image
FROM alpine

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

WORKDIR /app

# Copy the application source code
COPY . .

# Install dependencies and build
RUN npm install  && npm run build

# Install Nginx
RUN apk add --no-cache nginx

# Copy the built files to Nginx web root
RUN cp -r /app/build /usr/share/nginx/html

# Copy Nginx configuration
COPY ./nginx/default.conf /etc/nginx/http.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

# Install dependencies and build
# RUN npm install react@^18.0.0 @testing-library/react@13.4.0 \
#     && npm install \
#     && npm run build
