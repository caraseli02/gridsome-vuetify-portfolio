FROM node:12-alpine AS builder

# Install build tools
RUN apk update && apk upgrade
RUN apk --no-cache add --virtual native-deps git\
  g++ gcc libgcc libstdc++ linux-headers make python


# Install Gridsome globally
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
USER node
RUN npm i -g gridsome

# Install the application
COPY --chown=node:node ./ /home/node/build/
WORKDIR /home/node/build
USER node
RUN npm cache clean --force
RUN npm clean-install

FROM node:12-alpine
# Remove the project files
# but keep the node modules
WORKDIR /home/node
USER node
RUN mkdir build .npm-global
COPY --from=builder /home/node/build/node_modules build/node_modules
COPY --from=builder /home/node/.npm-global .npm-global

# Get the source code without node_modules
# Then build the site
CMD cp -r app temp && \
    rm -rf temp/node_modules && \
    cp -r temp/* build/ && \
    cd build && \
    ~/.npm-global/bin/gridsome build
