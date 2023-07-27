FROM node:20-bullseye-slim

ARG UID=1000
ARG GID=1000
ARG UNAME=app
ARG GNAME=app

RUN apt-get update \
    && apt-get install -y -qq --no-install-recommends \
    sudo \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get autoremove -y

COPY ./package.json /workspace/app/backend/
WORKDIR /workspace/app/backend
RUN npm install && \
    npm cache clean --force

RUN userdel -r node
RUN groupadd -g $GID $GNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $UNAME
USER ${UNAME}
