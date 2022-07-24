FROM node:14.17.3

ARG UID=1000
ARG GID=1000
ARG UNAME=app
ARG GNAME=app

RUN apt-get update && \
    apt-get upgrade -y

RUN npm install  && \
    npm cache clean --force

RUN userdel -r node
RUN groupadd -g $GID $GNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $UNAME
USER ${UNAME}
WORKDIR /workspace/app/backend
