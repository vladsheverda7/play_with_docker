# play_with_docker

## Create image

1. docker build -t assertion . (-t - tag, . - current directory)

## check docker image

1. docker images

## remove docker image

1. docker rmi <IMAGE_NAME> or <Image_Id>

## run application

1. docker run assertion
2. docker run --name assert assertion

## view all containers even if it is not run

1. docker ps -a
2. docker ps -a -q (get ids)

## remove containers

1. docker rm <container_id>
2. docker rm $(docker ps -qa) - remove all containers

## volume

1. docker volume ls - view all volumes
2. docker volume create test_1 - create volume with test_1 name
3. docker run --rm --name assert -v test_1:/usr/src/app/data assertion_1
