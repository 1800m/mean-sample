FROM node:14.17.3

ARG UID=1000
ARG GID=1000
ARG UNAME=app
ARG GNAME=app

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
    sudo \
    vim

COPY ./package.json /workspace/app/backend/
WORKDIR /workspace/app/backend
RUN npm install && \
    npm cache clean --force

RUN userdel -r node
RUN groupadd -g $GID $GNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $UNAME
USER ${UNAME}
