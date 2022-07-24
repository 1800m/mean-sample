#!bin/bash -eu

DOCKERYML=docker-compose.yml

docker-compose -f ${DOCKERYML} up -d
