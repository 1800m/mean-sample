#!bin/bash -eu

TAG=$1
DOCKERYML=docker-compose.yml
DOCKER="docker compose"

echo "TAG=${TAG}" > .env

UID=`id -u`
GID=`id -g`
UNAME=`id -un`
GNAME=`id -gn`

${DOCKER} -f ${DOCKERYML} build \
    --build-arg UID="${UID}" \
    --build-arg GID="${GID}" \
    --build-arg UNAME="${UNAME}" \
    --build-arg GNAME="${GNAME}" \
    --force-rm --no-cache
