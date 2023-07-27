#!bin/bash -eu

DOCKER="docker compose"
DOCKERYML=docker-compose.yml

${DOCKER} -f ${DOCKERYML} down
