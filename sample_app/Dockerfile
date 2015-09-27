FROM cttttt/docker-node-base:12 

# Or, to use node v10...
# FROM cttttt/docker-node-base:10

# Clear out the simple node program from the base image.
RUN rm -rf /home/node/src && mkdir -p /home/node/src

# Since only the package.json can influence dependencies, copy it in first and
# install dependencies.
COPY package.json /home/node/src/
RUN chown -R node /home/node && \
    sudo -Hu node sh -c 'cd /home/node/src && npm install'

# And now copy the rest of the source code in.
COPY . /home/node/src/
RUN chown -R node /home/node && \
    sudo -Hu node sh -c 'cd /home/node/src && npm run lint'

# Why split up the steps?
#
# Where a dev updates source but not package.json, the Docker cache will be
# used to bypass the npm install, saving *a lot* of time.
#
# NOTE: The base image exposes port 8080.
