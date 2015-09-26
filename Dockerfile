FROM ubuntu
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    npm install -g eslint
RUN useradd -m node && mkdir -p /home/node/src
COPY package.json /home/node/src/
RUN chown -R node /home/node && \
    sudo -Hu node sh -c 'cd /home/node/src && npm install'
COPY . /home/node/src/
RUN chown -R node /home/node && \
    sudo -Hu node sh -c 'cd /home/node/src && npm run lint'
CMD sudo -Hu node sh -c 'cd /home/node/src && npm start'
EXPOSE 8080
