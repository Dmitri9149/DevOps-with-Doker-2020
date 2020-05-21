*************************************************************************************
************************************************************************************

1.1 Getting started

Since we already did “Hello, World!” in the material let’s do something else.

Start 3 containers from image that does not automatically exit, such as nginx, detached.

Stop 2 of the containers leaving 1 up.

Submitting the output for docker ps -a is enough to prove this exercise has been done.

*********************
```console

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS               NAMES
453dedee991f        nginx               "nginx -g 'daemon of…"   16 minutes ago      Up 16 minutes               80/tcp              boring_beaver
6afd80ee1e75        nginx               "nginx -g 'daemon of…"   17 minutes ago      Exited (0) 15 minutes ago                       jolly_margulis
3f84e9aa15c4        nginx               "nginx -g 'daemon of…"   18 minutes ago      Exited (0) 15 minutes ago                       gallant_wilbur
```
********************************************************************************************
*********************************************************************************************

***********************************************************************************************
***************************************************************************************

1.2 Cleanup

We’ve left containers and a image that won’t be used anymore and are taking space, as docker ps -as and docker images will reveal.

Clean the docker daemon from all images and containers.

Submit the output for docker ps -a and docker images
**********************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects$ docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Deleted Containers:
453dedee991fbcb316400082919fe45e0dd5209c810dee46aefb59d78c068d16
6afd80ee1e757c1cc7e7df17bad843f531a23d06851afff70189a89c05d4783a
3f84e9aa15c477529f2dd0ace33d0d3a0ac7a7b597678f4d3a3b21a186eb3597

Total reclaimed space: 0B
dmitri@dmitri-Lenovo-H50-00:~/projects$ docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES

dmitri@dmitri-Lenovo-H50-00:~/projects$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              9beeba249f3e        5 days ago          127MB

dmitri@dmitri-Lenovo-H50-00:~/projects$ docker system prune -a
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all images without at least one container associated to them
  - all build cache

Are you sure you want to continue? [y/N] y
Deleted Images:
untagged: nginx:latest
untagged: nginx@sha256:30dfa439718a17baafefadf16c5e7c9d0a1cde97b4fd84f63b69e13513be7097
deleted: sha256:9beeba249f3ee158d3e495a6ac25c5667ae2de8a43ac2a8bfd2bf687a58c06c9
deleted: sha256:8fb6373b4cca3383756d7fd7843dd92f95827e5f2913609e09a9621dcddb3752
deleted: sha256:8b09841626797a03a9fe5e73aa38aeacf9ff0ce85a3004236ff35234eec3b35c
deleted: sha256:ffc9b21953f4cd7956cdf532a5db04ff0a2daa7475ad796f1bad58cfbaf77a07

Total reclaimed space: 126.8MB
dmitri@dmitri-Lenovo-H50-00:~/projects$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE

dmitri@dmitri-Lenovo-H50-00:~/projects$ docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
dmitri@dmitri-Lenovo-H50-00:~/projects$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
dmitri@dmitri-Lenovo-H50-00:~/projects$ 
```
***********************************************************************************************
***********************************************************************************************












