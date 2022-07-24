#!bin/bash -eu

DOCKERYML=docker-compose.yml

docker-compose -f ${DOCKERYML} down
