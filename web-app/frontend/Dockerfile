FROM node:20-bullseye-slim

ARG UID=1000
ARG GID=1000
ARG UNAME=app
ARG GNAME=app

RUN apt-get update \
    && apt-get install -y -qq --no-install-recommends \
    sudo \
    vim \
    nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get autoremove -y

COPY ./package.json /workspace/app/frontend/
WORKDIR /workspace/app/frontend
RUN npm install && \
    npm cache clean --force

RUN userdel -r node
RUN groupadd -g $GID $GNAME && \
    useradd  -g $GNAME -G sudo -m -s /bin/bash $UNAME && \
    echo "$UNAME:$UNAME" | chpasswd
RUN echo 'Defaults visiblepw'             >> /etc/sudoers
RUN echo "${UNAME} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER ${UNAME}
