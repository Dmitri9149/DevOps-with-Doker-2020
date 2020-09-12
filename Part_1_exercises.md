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


1.3 Hello Docker Hub

Start image devopsdockeruh/pull_exercise with flags -it like so: docker run -it devopsdockeruh/pull_exercise. It will wait for your input. Navigate through docker hub to find the docs and Dockerfile that was used to create the image.

Read the Dockerfile and/or docs to learn what input will get the application to answer a “secret message”.

Submit the secret message and command(s) given to get it as your answer.
***********************************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects$ docker run -it devopsdockeruh/pull_exercise
Unable to find image 'devopsdockeruh/pull_exercise:latest' locally
latest: Pulling from devopsdockeruh/pull_exercise
8e402f1a9c57: Pull complete 
5e2195587d10: Pull complete 
6f595b2fc66d: Pull complete 
165f32bf4e94: Pull complete 
67c4f504c224: Pull complete 
Digest: sha256:7c0635934049afb9ca0481fb6a58b16100f990a0d62c8665b9cfb5c9ada8a99f
Status: Downloaded newer image for devopsdockeruh/pull_exercise:latest
Give me the password: basics
You found the correct password. Secret message is:
"This is the secret message"

dmitri@dmitri-Lenovo-H50-00:~/projects$ 
```
**************************************************************************
***************************************************************************
1.4

Now that we’ve warmed up it’s time to get inside a container while it’s running!

Start image devopsdockeruh/exec_bash_exercise, it will start a container with clock-like features and create a log. Go inside the container and use tail -f ./logs.txt to follow the logs. Every 15 seconds the clock will send you a “secret message”.

Submit the secret message and command(s) given as your answer.

***********************************************************
``` console
dmitri@dmitri-Lenovo-H50-00:~/projects$ docker run -it devopsdockeruh/pull_exercise
Give me the password: basics
You found the correct password. Secret message is:
"This is the secret message"

dmitri@dmitri-Lenovo-H50-00:~/projects$ 
```
******************************************************************************
******************************************************************************

*********************************************************************************
********************************************************************************

1.5

Start a ubuntu image with the process sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'

You will notice that a few things required for proper execution are missing. Be sure to remind yourself which flags to use so that the read actually waits for input.

    Note also that curl is NOT installed in the container yet. You will have to install it from inside of the container.

Test inputting helsinki.fi into the application. It should respond with something like
``` console

<html>

<head>
  <title>301 Moved Permanently</title>
</head>

<body>
  <h1>Moved Permanently</h1>
  <p>The document has moved <a href="http://www.helsinki.fi/">here</a>.</p>
</body>

</html>
```
This time return the command you used to start process and the command(s) you used to fix the ensuing problems.

    This exercise has multiple solutions, if the curl for helsinki.fi works then it’s done. Can you figure out other (smart) solutions?

*************************************************************************************
```console

dmitri@dmitri-Lenovo-H50-00:~/projects$ docker run -it --name website ubuntu:16.04
root@f9f56814e3dc:/# sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'
Input website:
helsinki.fi
Searching..
sh: 1: curl: not found
root@f9f56814e3dc:/# apt-get update
Get:1 http://archive.ubuntu.com/ubuntu xenial InRelease [247 kB]
Get:2 http://security.ubuntu.com/ubuntu xenial-security InRelease [109 kB]
Get:3 http://archive.ubuntu.com/ubuntu xenial-updates InRelease [109 kB]
Get:4 http://archive.ubuntu.com/ubuntu xenial-backports InRelease [107 kB]
Get:5 http://security.ubuntu.com/ubuntu xenial-security/main amd64 Packages [1115 kB]
Get:6 http://security.ubuntu.com/ubuntu xenial-security/restricted amd64 Packages [12.7 kB]
Get:7 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 Packages [627 kB]                   
Get:8 http://archive.ubuntu.com/ubuntu xenial/main amd64 Packages [1558 kB]                                
Get:9 http://security.ubuntu.com/ubuntu xenial-security/multiverse amd64 Packages [6677 B]                        
Get:10 http://archive.ubuntu.com/ubuntu xenial/restricted amd64 Packages [14.1 kB] 
Get:11 http://archive.ubuntu.com/ubuntu xenial/universe amd64 Packages [9827 kB]    
Get:12 http://archive.ubuntu.com/ubuntu xenial/multiverse amd64 Packages [176 kB]   
Get:13 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 Packages [1482 kB]
Get:14 http://archive.ubuntu.com/ubuntu xenial-updates/restricted amd64 Packages [13.1 kB]
Get:15 http://archive.ubuntu.com/ubuntu xenial-updates/universe amd64 Packages [1031 kB]
Get:16 http://archive.ubuntu.com/ubuntu xenial-updates/multiverse amd64 Packages [19.7 kB]
Get:17 http://archive.ubuntu.com/ubuntu xenial-backports/main amd64 Packages [7942 B]
Get:18 http://archive.ubuntu.com/ubuntu xenial-backports/universe amd64 Packages [8807 B]
Fetched 16.5 MB in 5s (3060 kB/s)                           
Reading package lists... Done
root@f9f56814e3dc:/# apt-get -y install
Reading package lists... Done
Building dependency tree       
Reading state information... Done
0 upgraded, 0 newly installed, 0 to remove and 6 not upgraded.
root@f9f56814e3dc:/# sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'
Input website:
helsinki.fi
Searching..
sh: 1: curl: not found
root@f9f56814e3dc:/# apt-get -y install curl
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  ca-certificates krb5-locales libasn1-8-heimdal libcurl3-gnutls libffi6 libgmp10 libgnutls30 libgssapi-krb5-2
  libgssapi3-heimdal libhcrypto4-heimdal libheimbase1-heimdal libheimntlm0-heimdal libhogweed4 libhx509-5-heimdal
  libidn11 libk5crypto3 libkeyutils1 libkrb5-26-heimdal libkrb5-3 libkrb5support0 libldap-2.4-2 libnettle6
  libp11-kit0 libroken18-heimdal librtmp1 libsasl2-2 libsasl2-modules libsasl2-modules-db libsqlite3-0 libssl1.0.0
  libtasn1-6 libwind0-heimdal openssl
Suggested packages:
  gnutls-bin krb5-doc krb5-user libsasl2-modules-otp libsasl2-modules-ldap libsasl2-modules-sql
  libsasl2-modules-gssapi-mit | libsasl2-modules-gssapi-heimdal
The following NEW packages will be installed:
  ca-certificates curl krb5-locales libasn1-8-heimdal libcurl3-gnutls libffi6 libgmp10 libgnutls30 libgssapi-krb5-2
  libgssapi3-heimdal libhcrypto4-heimdal libheimbase1-heimdal libheimntlm0-heimdal libhogweed4 libhx509-5-heimdal
  libidn11 libk5crypto3 libkeyutils1 libkrb5-26-heimdal libkrb5-3 libkrb5support0 libldap-2.4-2 libnettle6
  libp11-kit0 libroken18-heimdal librtmp1 libsasl2-2 libsasl2-modules libsasl2-modules-db libsqlite3-0 libssl1.0.0
  libtasn1-6 libwind0-heimdal openssl
0 upgraded, 34 newly installed, 0 to remove and 6 not upgraded.
Need to get 5345 kB of archives.
After this operation, 19.0 MB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu xenial/main amd64 libffi6 amd64 3.2.1-4 [17.8 kB]
Get:2 http://archive.ubuntu.com/ubuntu xenial/main amd64 libgmp10 amd64 2:6.1.0+dfsg-2 [240 kB]
Get:3 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libnettle6 amd64 3.2-1ubuntu0.16.04.1 [93.5 kB]
Get:4 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libhogweed4 amd64 3.2-1ubuntu0.16.04.1 [136 kB]
Get:5 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libidn11 amd64 1.32-3ubuntu1.2 [46.5 kB]
Get:6 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libp11-kit0 amd64 0.23.2-5~ubuntu16.04.1 [105 kB]
Get:7 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libtasn1-6 amd64 4.7-3ubuntu0.16.04.3 [43.5 kB]
Get:8 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libgnutls30 amd64 3.4.10-4ubuntu1.7 [548 kB]
Get:9 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libsqlite3-0 amd64 3.11.0-1ubuntu1.4 [398 kB]
Get:10 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libssl1.0.0 amd64 1.0.2g-1ubuntu4.15 [1084 kB]
Get:11 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 openssl amd64 1.0.2g-1ubuntu4.15 [492 kB]
Get:12 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 ca-certificates all 20170717~16.04.2 [167 kB]
Get:13 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 krb5-locales all 1.13.2+dfsg-5ubuntu2.1 [13.6 kB]
Get:14 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libroken18-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [41.4 kB]
Get:15 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libasn1-8-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [174 kB]
Get:16 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libkrb5support0 amd64 1.13.2+dfsg-5ubuntu2.1 [31.2 kB]
Get:17 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libk5crypto3 amd64 1.13.2+dfsg-5ubuntu2.1 [81.3 kB]
Get:18 http://archive.ubuntu.com/ubuntu xenial/main amd64 libkeyutils1 amd64 1.5.9-8ubuntu1 [9904 B]
Get:19 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libkrb5-3 amd64 1.13.2+dfsg-5ubuntu2.1 [273 kB]
Get:20 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libgssapi-krb5-2 amd64 1.13.2+dfsg-5ubuntu2.1 [120 kB]
Get:21 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libhcrypto4-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [85.0 kB]
Get:22 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libheimbase1-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [29.3 kB]
Get:23 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libwind0-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [47.8 kB]
Get:24 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libhx509-5-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [107 kB]
Get:25 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libkrb5-26-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [202 kB]
Get:26 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libheimntlm0-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [15.1 kB]
Get:27 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libgssapi3-heimdal amd64 1.7~git20150920+dfsg-4ubuntu1.16.04.1 [96.1 kB]
Get:28 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libsasl2-modules-db amd64 2.1.26.dfsg1-14ubuntu0.2 [14.5 kB]
Get:29 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libsasl2-2 amd64 2.1.26.dfsg1-14ubuntu0.2 [48.7 kB]
Get:30 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libldap-2.4-2 amd64 2.4.42+dfsg-2ubuntu3.8 [159 kB]
Get:31 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 librtmp1 amd64 2.4+20151223.gitfa8646d-1ubuntu0.1 [54.4 kB]
Get:32 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libcurl3-gnutls amd64 7.47.0-1ubuntu2.14 [184 kB]
Get:33 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 libsasl2-modules amd64 2.1.26.dfsg1-14ubuntu0.2 [47.7 kB]
Get:34 http://archive.ubuntu.com/ubuntu xenial-updates/main amd64 curl amd64 7.47.0-1ubuntu2.14 [139 kB]
Fetched 5345 kB in 1s (4261 kB/s)
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package libffi6:amd64.
(Reading database ... 4781 files and directories currently installed.)
Preparing to unpack .../libffi6_3.2.1-4_amd64.deb ...
Unpacking libffi6:amd64 (3.2.1-4) ...
Selecting previously unselected package libgmp10:amd64.
Preparing to unpack .../libgmp10_2%3a6.1.0+dfsg-2_amd64.deb ...
Unpacking libgmp10:amd64 (2:6.1.0+dfsg-2) ...
Selecting previously unselected package libnettle6:amd64.
Preparing to unpack .../libnettle6_3.2-1ubuntu0.16.04.1_amd64.deb ...
Unpacking libnettle6:amd64 (3.2-1ubuntu0.16.04.1) ...
Selecting previously unselected package libhogweed4:amd64.
Preparing to unpack .../libhogweed4_3.2-1ubuntu0.16.04.1_amd64.deb ...
Unpacking libhogweed4:amd64 (3.2-1ubuntu0.16.04.1) ...
Selecting previously unselected package libidn11:amd64.
Preparing to unpack .../libidn11_1.32-3ubuntu1.2_amd64.deb ...
Unpacking libidn11:amd64 (1.32-3ubuntu1.2) ...
Selecting previously unselected package libp11-kit0:amd64.
Preparing to unpack .../libp11-kit0_0.23.2-5~ubuntu16.04.1_amd64.deb ...
Unpacking libp11-kit0:amd64 (0.23.2-5~ubuntu16.04.1) ...
Selecting previously unselected package libtasn1-6:amd64.
Preparing to unpack .../libtasn1-6_4.7-3ubuntu0.16.04.3_amd64.deb ...
Unpacking libtasn1-6:amd64 (4.7-3ubuntu0.16.04.3) ...
Selecting previously unselected package libgnutls30:amd64.
Preparing to unpack .../libgnutls30_3.4.10-4ubuntu1.7_amd64.deb ...
Unpacking libgnutls30:amd64 (3.4.10-4ubuntu1.7) ...
Selecting previously unselected package libsqlite3-0:amd64.
Preparing to unpack .../libsqlite3-0_3.11.0-1ubuntu1.4_amd64.deb ...
Unpacking libsqlite3-0:amd64 (3.11.0-1ubuntu1.4) ...
Selecting previously unselected package libssl1.0.0:amd64.
Preparing to unpack .../libssl1.0.0_1.0.2g-1ubuntu4.15_amd64.deb ...
Unpacking libssl1.0.0:amd64 (1.0.2g-1ubuntu4.15) ...
Selecting previously unselected package openssl.
Preparing to unpack .../openssl_1.0.2g-1ubuntu4.15_amd64.deb ...
Unpacking openssl (1.0.2g-1ubuntu4.15) ...
Selecting previously unselected package ca-certificates.
Preparing to unpack .../ca-certificates_20170717~16.04.2_all.deb ...
Unpacking ca-certificates (20170717~16.04.2) ...
Selecting previously unselected package krb5-locales.
Preparing to unpack .../krb5-locales_1.13.2+dfsg-5ubuntu2.1_all.deb ...
Unpacking krb5-locales (1.13.2+dfsg-5ubuntu2.1) ...
Selecting previously unselected package libroken18-heimdal:amd64.
Preparing to unpack .../libroken18-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libroken18-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libasn1-8-heimdal:amd64.
Preparing to unpack .../libasn1-8-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libasn1-8-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libkrb5support0:amd64.
Preparing to unpack .../libkrb5support0_1.13.2+dfsg-5ubuntu2.1_amd64.deb ...
Unpacking libkrb5support0:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Selecting previously unselected package libk5crypto3:amd64.
Preparing to unpack .../libk5crypto3_1.13.2+dfsg-5ubuntu2.1_amd64.deb ...
Unpacking libk5crypto3:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Selecting previously unselected package libkeyutils1:amd64.
Preparing to unpack .../libkeyutils1_1.5.9-8ubuntu1_amd64.deb ...
Unpacking libkeyutils1:amd64 (1.5.9-8ubuntu1) ...
Selecting previously unselected package libkrb5-3:amd64.
Preparing to unpack .../libkrb5-3_1.13.2+dfsg-5ubuntu2.1_amd64.deb ...
Unpacking libkrb5-3:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Selecting previously unselected package libgssapi-krb5-2:amd64.
Preparing to unpack .../libgssapi-krb5-2_1.13.2+dfsg-5ubuntu2.1_amd64.deb ...
Unpacking libgssapi-krb5-2:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Selecting previously unselected package libhcrypto4-heimdal:amd64.
Preparing to unpack .../libhcrypto4-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libhcrypto4-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libheimbase1-heimdal:amd64.
Preparing to unpack .../libheimbase1-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libheimbase1-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libwind0-heimdal:amd64.
Preparing to unpack .../libwind0-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libwind0-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libhx509-5-heimdal:amd64.
Preparing to unpack .../libhx509-5-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libhx509-5-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libkrb5-26-heimdal:amd64.
Preparing to unpack .../libkrb5-26-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libkrb5-26-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libheimntlm0-heimdal:amd64.
Preparing to unpack .../libheimntlm0-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libheimntlm0-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libgssapi3-heimdal:amd64.
Preparing to unpack .../libgssapi3-heimdal_1.7~git20150920+dfsg-4ubuntu1.16.04.1_amd64.deb ...
Unpacking libgssapi3-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Selecting previously unselected package libsasl2-modules-db:amd64.
Preparing to unpack .../libsasl2-modules-db_2.1.26.dfsg1-14ubuntu0.2_amd64.deb ...
Unpacking libsasl2-modules-db:amd64 (2.1.26.dfsg1-14ubuntu0.2) ...
Selecting previously unselected package libsasl2-2:amd64.
Preparing to unpack .../libsasl2-2_2.1.26.dfsg1-14ubuntu0.2_amd64.deb ...
Unpacking libsasl2-2:amd64 (2.1.26.dfsg1-14ubuntu0.2) ...
Selecting previously unselected package libldap-2.4-2:amd64.
Preparing to unpack .../libldap-2.4-2_2.4.42+dfsg-2ubuntu3.8_amd64.deb ...
Unpacking libldap-2.4-2:amd64 (2.4.42+dfsg-2ubuntu3.8) ...
Selecting previously unselected package librtmp1:amd64.
Preparing to unpack .../librtmp1_2.4+20151223.gitfa8646d-1ubuntu0.1_amd64.deb ...
Unpacking librtmp1:amd64 (2.4+20151223.gitfa8646d-1ubuntu0.1) ...
Selecting previously unselected package libcurl3-gnutls:amd64.
Preparing to unpack .../libcurl3-gnutls_7.47.0-1ubuntu2.14_amd64.deb ...
Unpacking libcurl3-gnutls:amd64 (7.47.0-1ubuntu2.14) ...
Selecting previously unselected package libsasl2-modules:amd64.
Preparing to unpack .../libsasl2-modules_2.1.26.dfsg1-14ubuntu0.2_amd64.deb ...
Unpacking libsasl2-modules:amd64 (2.1.26.dfsg1-14ubuntu0.2) ...
Selecting previously unselected package curl.
Preparing to unpack .../curl_7.47.0-1ubuntu2.14_amd64.deb ...
Unpacking curl (7.47.0-1ubuntu2.14) ...
Processing triggers for libc-bin (2.23-0ubuntu11) ...
Setting up libffi6:amd64 (3.2.1-4) ...
Setting up libgmp10:amd64 (2:6.1.0+dfsg-2) ...
Setting up libnettle6:amd64 (3.2-1ubuntu0.16.04.1) ...
Setting up libhogweed4:amd64 (3.2-1ubuntu0.16.04.1) ...
Setting up libidn11:amd64 (1.32-3ubuntu1.2) ...
Setting up libp11-kit0:amd64 (0.23.2-5~ubuntu16.04.1) ...
Setting up libtasn1-6:amd64 (4.7-3ubuntu0.16.04.3) ...
Setting up libgnutls30:amd64 (3.4.10-4ubuntu1.7) ...
Setting up libsqlite3-0:amd64 (3.11.0-1ubuntu1.4) ...
Setting up libssl1.0.0:amd64 (1.0.2g-1ubuntu4.15) ...
debconf: unable to initialize frontend: Dialog
debconf: (No usable dialog-like program is installed, so the dialog based frontend cannot be used. at /usr/share/perl5/Debconf/FrontEnd/Dialog.pm line 76.)
debconf: falling back to frontend: Readline
debconf: unable to initialize frontend: Readline
debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.22.1 /usr/local/share/perl/5.22.1 /usr/lib/x86_64-linux-gnu/perl5/5.22 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl/5.22 /usr/share/perl/5.22 /usr/local/lib/site_perl /usr/lib/x86_64-linux-gnu/perl-base .) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
debconf: falling back to frontend: Teletype
Setting up openssl (1.0.2g-1ubuntu4.15) ...
Setting up ca-certificates (20170717~16.04.2) ...
debconf: unable to initialize frontend: Dialog
debconf: (No usable dialog-like program is installed, so the dialog based frontend cannot be used. at /usr/share/perl5/Debconf/FrontEnd/Dialog.pm line 76.)
debconf: falling back to frontend: Readline
debconf: unable to initialize frontend: Readline
debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.22.1 /usr/local/share/perl/5.22.1 /usr/lib/x86_64-linux-gnu/perl5/5.22 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl/5.22 /usr/share/perl/5.22 /usr/local/lib/site_perl /usr/lib/x86_64-linux-gnu/perl-base .) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
debconf: falling back to frontend: Teletype
Setting up krb5-locales (1.13.2+dfsg-5ubuntu2.1) ...
Setting up libroken18-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libasn1-8-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libkrb5support0:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Setting up libk5crypto3:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Setting up libkeyutils1:amd64 (1.5.9-8ubuntu1) ...
Setting up libkrb5-3:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Setting up libgssapi-krb5-2:amd64 (1.13.2+dfsg-5ubuntu2.1) ...
Setting up libhcrypto4-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libheimbase1-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libwind0-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libhx509-5-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libkrb5-26-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libheimntlm0-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libgssapi3-heimdal:amd64 (1.7~git20150920+dfsg-4ubuntu1.16.04.1) ...
Setting up libsasl2-modules-db:amd64 (2.1.26.dfsg1-14ubuntu0.2) ...
Setting up libsasl2-2:amd64 (2.1.26.dfsg1-14ubuntu0.2) ...
Setting up libldap-2.4-2:amd64 (2.4.42+dfsg-2ubuntu3.8) ...
Setting up librtmp1:amd64 (2.4+20151223.gitfa8646d-1ubuntu0.1) ...
Setting up libcurl3-gnutls:amd64 (7.47.0-1ubuntu2.14) ...
Setting up libsasl2-modules:amd64 (2.1.26.dfsg1-14ubuntu0.2) ...
Setting up curl (7.47.0-1ubuntu2.14) ...
Processing triggers for libc-bin (2.23-0ubuntu11) ...
Processing triggers for ca-certificates (20170717~16.04.2) ...
Updating certificates in /etc/ssl/certs...
148 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
done.
root@f9f56814e3dc:/# sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'
Input website:
helsinki.fi
Searching..
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="http://www.helsinki.fi/">here</a>.</p>
</body></html>
root@f9f56814e3dc:/# 
```
***************************************************************************
****************************************************************************
1.6

Create a Dockerfile that starts with FROM devopsdockeruh/overwrite_cmd_exercise. Add a CMD line to the Dockerfile.

The developer has poorly documented how the application works. Nevertheless once you will execute an application (run a container from an image) you will have some clues on how it works. Your task is to run an application so that it will simulate a clock functionality.

When you will build an image tag it as “docker-clock” so that docker run docker-clock starts the application.

Return both Dockerfile(s) and the command you used to run the container(s)
****************************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects/1.6_dockerfile$ docker build -t docker-clock .
Sending build context to Docker daemon  2.048kB
Step 1/1 : FROM devopsdockeruh/overwrite_cmd_exercise
 ---> 3d2b622b1849
Successfully built 3d2b622b1849
Successfully tagged docker-clock:latest
dmitri@dmitri-Lenovo-H50-00:~/projects/1.6_dockerfile$ docker run docker-clock

-h,             --help                  to show this message
-a [age],       --adult [age]           to check if you're older than 18
-c [time],      --clock [time]          to start a clock
-t [size],      --triangle [size]       to draw a triangle, takes second argument as the size
    
dmitri@dmitri-Lenovo-H50-00:~/projects/1.6_dockerfile$ 
```
********************************************************************************
********************************************************************************

1.7

Now that we know how to create and build Dockerfiles we can improve previous works.

Create a Dockerfile for a new image that starts from ubuntu:16.04.

Make a script file on you local machine with such content as echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;. Transfer this file to an image and run it inside the container using CMD. Build the image with tag “curler”.

Run command docker run [options] curler (with correct flags again, as in 1.5) and input helsinki.fi into it. Output should match the 1.5 one.

Return both Dockerfile(s) and the command you used to run the container(s)
*******************************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects/1.7_dockerfile$ docker build -t curler .
Sending build context to Docker daemon  3.072kB
Step 1/5 : FROM ubuntu:16.04
 ---> 005d2078bdfa
Step 2/5 : WORKDIR /mydir
 ---> Using cache
 ---> 94ad0c8a2fcd
Step 3/5 : RUN apt-get update && apt-get install -y curl
 ---> Using cache
 ---> 638857c37f90
Step 4/5 : COPY script.sh .
 ---> bc82c8f21fab
Step 5/5 : ENTRYPOINT ["sh", "./script.sh"]
 ---> Running in 03edfc075bdb
Removing intermediate container 03edfc075bdb
 ---> f20afe775ef4
Successfully built f20afe775ef4
Successfully tagged curler:latest
dmitri@dmitri-Lenovo-H50-00:~/projects/1.7_dockerfile$ docker run -it curler
Input website:
helsinki.fi
Searching..
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="http://www.helsinki.fi/">here</a>.</p>
</body></html>
dmitri@dmitri-Lenovo-H50-00:~/projects/1.7_dockerfile$
```
******************************************************************************
*******************************************************************************

1.8

In this exercise we won’t create a new Dockerfile. Image devopsdockeruh/first_volume_exercise has instructions to create a log into /usr/app/logs.txt. Start the container with bind mount so that the logs are created into your filesystem.

Submit your used commands for this exercise.
************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects/1.8_dockerfile$ ls
dmitri@dmitri-Lenovo-H50-00:~/projects/1.8_dockerfile$ touch logs.txt
dmitri@dmitri-Lenovo-H50-00:~/projects/1.8_dockerfile$ (docker run -v $(pwd)/logs.txt:/usr/app/logs.txt devopsdockeruh/first_volume_exercise)
(node:1) ExperimentalWarning: The fs.promises API is experimental
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
Wrote to file /usr/app/logs.txt
^CClosing file
dmitri@dmitri-Lenovo-H50-00:~/projects/1.8_dockerfile$ 

Mon, 25 May 2020 17:09:36 GMT
Mon, 25 May 2020 17:09:39 GMT
Mon, 25 May 2020 17:09:42 GMT
Mon, 25 May 2020 17:09:45 GMT
Secret message is:
"Volume bind mount is easy"
Mon, 25 May 2020 17:09:51 GMT
Mon, 25 May 2020 17:09:54 GMT
Mon, 25 May 2020 17:09:57 GMT
Mon, 25 May 2020 17:10:00 GMT
Secret message is:
"Volume bind mount is easy"
```
**********************************************************************
*************************************************************************

1.9

In this exercise we won’t create a new Dockerfile. Image devopsdockeruh/ports_exercise will start a web service in port 80. Use -p flag to access the contents with your browser.

Submit your used commands for this exercise.
**********************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects/1.9_dockerfile$ docker run -d --rm -it -p 1234:80 --name port_expose -it devopsdockeruh/ports_exercise
Unable to find image 'devopsdockeruh/ports_exercise:latest' locally
latest: Pulling from devopsdockeruh/ports_exercise
cd784148e348: Pull complete 
9abca35fefbf: Pull complete 
7fc670963d22: Pull complete 
893040f9bc16: Pull complete 
b0ae6401e570: Pull complete 
Digest: sha256:2ff93dd0c744aee7a8f00bc9558d09fd6279493da0d01769fe600f78fb4593f2
Status: Downloaded newer image for devopsdockeruh/ports_exercise:latest
6880fd7e273d85d0aa4837d276506192d5d8698667eaa97f72e5f3a29387627c
dmitri@dmitri-Lenovo-H50-00:~/projects/1.9_dockerfile$ w3m http://localhost:1234/
```

The message at the terminal is : 

##### Ports configured correctly!!

***************************************************************************
*********************************************************************************

1.10

This exercise is mandatory

A good developer creates well written READMEs that can be used to create Dockerfiles with ease.

Clone, fork or download a project from https://github.com/docker-hy/frontend-example-docker.

Create a Dockerfile for the project and give a command so that the project runs in a docker container with port 5000 exposed and published so when you start the container and navigate to http://localhost:5000 you will see message if you’re successful.

Submit the Dockerfile.

As in other exercises, do not alter the code of the project

    TIP: The project has install instructions in README.

    TIP: Note that the app starts to accept connections when “Accepting connections at http://localhost:5000” has been printed to the screen, this takes a few seconds

    TIP: You do not have to install anything new outside containers.

************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects/1.10_Dockerfile/frontend-example-docker$ docker build -t myfirst .
Sending build context to Docker daemon  221.9MB
Step 1/10 : FROM ubuntu:16.04
 ---> 005d2078bdfa
Step 2/10 : WORKDIR /dist
 ---> Using cache
 ---> 6d43a4c7d416
Step 3/10 : RUN apt-get update && apt-get install -y curl
 ---> Using cache
 ---> 2a049788f650
Step 4/10 : RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
 ---> Using cache
 ---> 41a044dc1526
Step 5/10 : RUN apt install -y nodejs
 ---> Using cache
 ---> 1ce065da2c81
Step 6/10 : COPY package.json /dist
 ---> Using cache
 ---> 69a729a13f2b
Step 7/10 : RUN npm install
 ---> Using cache
 ---> c464e0468aa5
Step 8/10 : COPY . /dist
 ---> cbb701f90cc3
Step 9/10 : EXPOSE 5000
 ---> Running in b0c1d8821ab0
Removing intermediate container b0c1d8821ab0
 ---> 8233cad18191
Step 10/10 : CMD npm start
 ---> Running in a7a33fd6b50d
Removing intermediate container a7a33fd6b50d
 ---> 838ef65feb26
Successfully built 838ef65feb26
Successfully tagged myfirst:latest
dmitri@dmitri-Lenovo-H50-00:~/projects/1.10_Dockerfile/frontend-example-docker$ docker run -p 1234:5000 myfirst

> frontend-example-docker@1.0.0 start /dist
> webpack --mode production && serve -s -l 5000 dist

Hash: 9a4d23964a0815fedb61
Version: webpack 4.42.1
Time: 40459ms
Built at: 06/03/2020 12:47:31 PM
                                 Asset       Size  Chunks                    Chunk Names
0ab54153eeeca0ce03978cc463b257f7.woff2   39.2 KiB          [emitted]         
  13db00b7a34fee4d819ab7f9838cc428.eot   96.3 KiB          [emitted]         
  701ae6abd4719e9c2ada3535a497b341.eot   30.4 KiB          [emitted]         
  82f60bd0b94a1ed68b1e6e309ce2e8c3.svg    105 KiB          [emitted]         
  8e3c7f5520f5ae906c6cf6d7f3ddcd19.eot    104 KiB          [emitted]         
  962a1bf31c081691065fe333d9fa8105.svg    382 KiB          [emitted]  [big]  
  9c74e172f87984c48ddf5c8108cabe67.png   27.5 KiB          [emitted]         
 a046592bac8f2fd96e994733faf3858c.woff   62.2 KiB          [emitted]         
  a1a749e89f578a49306ec2b055c073da.svg    496 KiB          [emitted]  [big]  
  a3e2211dddcba197b5bbf2aa9d5d9a9a.svg   3.19 KiB          [emitted]         
  ad97afd3337e8cda302d10ff5a4026b8.ttf   30.2 KiB          [emitted]         
  b87b9ba532ace76ae9f6edfe9f72ded2.ttf    103 KiB          [emitted]         
  bff6c47a9da5c7cfa2e8a552e2df3a78.svg    3.2 KiB          [emitted]         
  c5ebe0b32dc1b5cc449a76c4204d13bb.ttf   96.1 KiB          [emitted]         
cd6c777f1945164224dee082abaea03a.woff2     12 KiB          [emitted]         
e8c322de9658cbeb8a774b6624167c2c.woff2   53.2 KiB          [emitted]         
 ef60a4f6c25ef7f39f2d25a748dbecfe.woff   14.4 KiB          [emitted]         
 faff92145777a3cbaf8e7367b4807987.woff   49.3 KiB          [emitted]         
                            index.html  454 bytes          [emitted]         
                              main.css  127 bytes       0  [emitted]         main
                               main.js   21.8 KiB       0  [emitted]         main
                    vendors~main-1.css    602 KiB       1  [emitted]  [big]  vendors~main
                       vendors~main.js    342 KiB       1  [emitted]  [big]  vendors~main
           vendors~main.js.LICENSE.txt   1.37 KiB          [emitted]         
Entrypoint main [big] = vendors~main-1.css vendors~main.js main.css main.js
  [7] ./node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules 2.94 KiB {1} [built]
      |    2 modules
 [51] ./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules 6.22 KiB {1} [built]
      |    2 modules
 [80] ./node_modules/react-redux/es/index.js + 19 modules 37 KiB {1} [built]
      |    20 modules
 [93] ./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js + 2 modules 10.6 KiB {1} [built]
      |    3 modules
[212] (webpack)/buildin/global.js 472 bytes {1} [built]
[251] ./src/assets/toscalogo_color.svg 82 bytes {0} [built]
[252] ./src/assets/toscalogo_grayscale.svg 82 bytes {0} [built]
[270] multi @babel/polyfill ./src 40 bytes {0} [built]
[464] (webpack)/buildin/harmony-module.js 573 bytes {1} [built]
[466] ./src/assets/custom.css 39 bytes {0} [built]
[602] ./src/index.js + 18 modules 42.1 KiB {0} [built]
      | ./src/index.js 609 bytes [built]
      | ./src/util/store.js 481 bytes [built]
      | ./util/common.js 117 bytes [built]
      | ./src/util/apiConnection.js 4.57 KiB [built]
      | ./src/util/redux/index.js 219 bytes [built]
      | ./src/util/redux/messageReducer.js 2.15 KiB [built]
      | ./src/util/redux/simpleReducer.js 1.86 KiB [built]
      | ./src/util/common.js 221 bytes [built]
      |     + 11 hidden modules
[603] ./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js + 3 modules 17.7 KiB {1} [built]
      |    4 modules
[612] ./node_modules/react-router-dom/es/BrowserRouter.js + 12 modules 41 KiB {1} [built]
      |    13 modules
[614] ./node_modules/react-router-dom/es/Switch.js + 1 modules 3.35 KiB {1} [built]
      |    2 modules
[615] ./node_modules/react-router-dom/es/Route.js + 1 modules 5.9 KiB {1} [built]
      |    2 modules
    + 989 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  962a1bf31c081691065fe333d9fa8105.svg (382 KiB)
  a1a749e89f578a49306ec2b055c073da.svg (496 KiB)
  vendors~main-1.css (602 KiB)
  vendors~main.js (342 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (966 KiB)
      vendors~main-1.css
      vendors~main.js
      main.css
      main.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
Child mini-css-extract-plugin node_modules/css-loader/index.js!node_modules/semantic-ui-css/semantic.min.css:
    Entrypoint mini-css-extract-plugin = *
       19 modules
Child mini-css-extract-plugin node_modules/css-loader/index.js!src/assets/custom.css:
    Entrypoint mini-css-extract-plugin = *
    [0] ./node_modules/css-loader!./src/assets/custom.css 340 bytes {0} [built]
        + 1 hidden module
UPDATE AVAILABLE The latest version of `serve` is 11.3.1
INFO: Accepting connections at http://localhost:5000
```
************************************************************************

The message on the web page: Exercise 1.10: Congratulations! You configured your ports correctly!

To run on localhost:5000 need to execute: 
docker run -p 5000:5000 myfirst

********************************************************************************************
********************************************************************************************

1.11

This exercise is mandatory

Clone, fork or download a project from https://github.com/docker-hy/backend-example-docker.

Create a Dockerfile for the project and give a command so that the project runs in a docker container with port 8000 exposed and published so when you start the container and navigate to http://localhost:8000 you will generate a message in logs.txt in the root.

Create a volume for the logs.txt so that when the application is shut down the logs are not destroyed. And when restarted it continues to write into the same logs.txt.

Submit the Dockerfile and the command used.

Do not alter the code of the project
************************************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects/1.11_Dockerfile/backend-example-docker$ docker build -t mysecond .
Sending build context to Docker daemon  233.5kB
Step 1/10 : FROM ubuntu:16.04
 ---> 005d2078bdfa
Step 2/10 : WORKDIR /app_server
 ---> Using cache
 ---> d66b0156057b
Step 3/10 : RUN apt-get update && apt-get install -y curl
 ---> Using cache
 ---> 429a6bc4759f
Step 4/10 : RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
 ---> Using cache
 ---> 6e5c56d50cd5
Step 5/10 : RUN apt install -y nodejs
 ---> Using cache
 ---> a4483e6d527e
Step 6/10 : COPY package.json /app_server
 ---> Using cache
 ---> 0de732e26915
Step 7/10 : RUN npm install
 ---> Using cache
 ---> 0ec5b6b70347
Step 8/10 : COPY . /app_server
 ---> fc0160ef7afd
Step 9/10 : EXPOSE 8000
 ---> Running in 9f5d44be4b14
Removing intermediate container 9f5d44be4b14
 ---> db46b808f2ed
Step 10/10 : CMD npm start
 ---> Running in a0762024d425
Removing intermediate container a0762024d425
 ---> 852567dbdc94
Successfully built 852567dbdc94
Successfully tagged mysecond:latest
dmitri@dmitri-Lenovo-H50-00:~/projects/1.11_Dockerfile/backend-example-docker$ docker run -p 8000:8000 -v $(pwd)/logs.txt:/app_server/logs.txt mysecond

> backend-example-docker@1.0.0 start /app_server
> cross-env NODE_ENV=production node index.js

Started on port 8000

```
*******************************************

The message from web page: Port configured correctly, generated message in logs.txt

*****************************************************
*****************************************************

1.12

This exercise is mandatory

Start both frontend-example and backend-example with correct ports exposed and add ENV to Dockerfile with necessary information from both READMEs (front,back).

Ignore the backend configurations until frontend sends requests to _backend_url_/ping when you press the button.

You know that the configuration is ready when the button for 1.12 of frontend-example responds and turns green.

Do not alter the code of either project

Submit the edited Dockerfiles and commands used to run.
************************************************************************
```console
dmitri@dmitri-Lenovo-H50-00:~/projects/1.11_Dockerfile/backend-example-docker$ docker build -t mysecond .
Sending build context to Docker daemon  233.5kB
Step 1/11 : FROM ubuntu:16.04
 ---> 005d2078bdfa
Step 2/11 : WORKDIR /app_server
 ---> Using cache
 ---> d66b0156057b
Step 3/11 : RUN apt-get update && apt-get install -y curl
 ---> Using cache
 ---> 429a6bc4759f
Step 4/11 : RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
 ---> Using cache
 ---> 6e5c56d50cd5
Step 5/11 : RUN apt install -y nodejs
 ---> Using cache
 ---> a4483e6d527e
Step 6/11 : COPY package.json /app_server
 ---> Using cache
 ---> 0de732e26915
Step 7/11 : RUN npm install
 ---> Using cache
 ---> 0ec5b6b70347
Step 8/11 : COPY . /app_server
 ---> 241c7dd8aa3e
Step 9/11 : EXPOSE 8000
 ---> Running in b38019d5305a
Removing intermediate container b38019d5305a
 ---> e5d427d62718
Step 10/11 : ENV FRONT_URL=http://127.0.0.1:5000
 ---> Running in 66ce5411479b
Removing intermediate container 66ce5411479b
 ---> cc06939a1d2a
Step 11/11 : CMD npm start
 ---> Running in 634cb6b6d9f1
Removing intermediate container 634cb6b6d9f1
 ---> f9f091ee8053
Successfully built f9f091ee8053
Successfully tagged mysecond:latest
dmitri@dmitri-Lenovo-H50-00:~/projects/1.11_Dockerfile/backend-example-docker$ docker run -p 8000:8000 -v $(pwd)/logs.txt:/app_server/logs.txt mysecond

> backend-example-docker@1.0.0 start /app_server
> cross-env NODE_ENV=production node index.js

Started on port 8000

 .......................................................

 dmitri@dmitri-Lenovo-H50-00:~/projects/1.10_Dockerfile/frontend-example-docker$ docker build -t myfirst .Sending build context to Docker daemon  221.9MB
Step 1/11 : FROM ubuntu:16.04
 ---> 005d2078bdfa
Step 2/11 : WORKDIR /app
 ---> Using cache
 ---> 5332af8c1e59
Step 3/11 : RUN apt-get update && apt-get install -y curl
 ---> Using cache
 ---> d584ab433008
Step 4/11 : RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
 ---> Using cache
 ---> ad451a7455db
Step 5/11 : RUN apt install -y nodejs
 ---> Using cache
 ---> 3292822427b2
Step 6/11 : COPY package.json /app
 ---> Using cache
 ---> 8219c8a688d3
Step 7/11 : RUN npm install
 ---> Using cache
 ---> 8da2a729fe93
Step 8/11 : COPY . /app
 ---> 08a08a977c76
Step 9/11 : EXPOSE 5000
 ---> Running in a0b8fe2b4ff6
Removing intermediate container a0b8fe2b4ff6
 ---> 88b94ea48e64
Step 10/11 : ENV API_URL=http://127.0.0.1:8000
 ---> Running in bb97cf5f47e2
Removing intermediate container bb97cf5f47e2
 ---> 61fba5cc93e5
Step 11/11 : CMD npm start
 ---> Running in 2c4951ad7768
Removing intermediate container 2c4951ad7768
 ---> a27cce782980
Successfully built a27cce782980
Successfully tagged myfirst:latest
dmitri@dmitri-Lenovo-H50-00:~/projects/1.10_Dockerfile/frontend-example-docker$ docker run -p 5000:5000 myfirst

> frontend-example-docker@1.0.0 start /app
> webpack --mode production && serve -s -l 5000 dist

Hash: 2a2cfae59ad09ae26486
Version: webpack 4.42.1
Time: 66771ms
Built at: 06/06/2020 11:29:32 AM
                                 Asset       Size  Chunks                    Chunk Names
0ab54153eeeca0ce03978cc463b257f7.woff2   39.2 KiB          [emitted]         
  13db00b7a34fee4d819ab7f9838cc428.eot   96.3 KiB          [emitted]         
  701ae6abd4719e9c2ada3535a497b341.eot   30.4 KiB          [emitted]         
  82f60bd0b94a1ed68b1e6e309ce2e8c3.svg    105 KiB          [emitted]         
  8e3c7f5520f5ae906c6cf6d7f3ddcd19.eot    104 KiB          [emitted]         
  962a1bf31c081691065fe333d9fa8105.svg    382 KiB          [emitted]  [big]  
  9c74e172f87984c48ddf5c8108cabe67.png   27.5 KiB          [emitted]         
 a046592bac8f2fd96e994733faf3858c.woff   62.2 KiB          [emitted]         
  a1a749e89f578a49306ec2b055c073da.svg    496 KiB          [emitted]  [big]  
  a3e2211dddcba197b5bbf2aa9d5d9a9a.svg   3.19 KiB          [emitted]         
  ad97afd3337e8cda302d10ff5a4026b8.ttf   30.2 KiB          [emitted]         
  b87b9ba532ace76ae9f6edfe9f72ded2.ttf    103 KiB          [emitted]         
  bff6c47a9da5c7cfa2e8a552e2df3a78.svg    3.2 KiB          [emitted]         
  c5ebe0b32dc1b5cc449a76c4204d13bb.ttf   96.1 KiB          [emitted]         
cd6c777f1945164224dee082abaea03a.woff2     12 KiB          [emitted]         
e8c322de9658cbeb8a774b6624167c2c.woff2   53.2 KiB          [emitted]         
 ef60a4f6c25ef7f39f2d25a748dbecfe.woff   14.4 KiB          [emitted]         
 faff92145777a3cbaf8e7367b4807987.woff   49.3 KiB          [emitted]         
                            index.html  454 bytes          [emitted]         
                              main.css  127 bytes       0  [emitted]         main
                               main.js   21.8 KiB       0  [emitted]         main
                    vendors~main-1.css    602 KiB       1  [emitted]  [big]  vendors~main
                       vendors~main.js    342 KiB       1  [emitted]  [big]  vendors~main
           vendors~main.js.LICENSE.txt   1.37 KiB          [emitted]         
Entrypoint main [big] = vendors~main-1.css vendors~main.js main.css main.js
  [7] ./node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules 2.94 KiB {1} [built]
      |    2 modules
 [51] ./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules 6.22 KiB {1} [built]
      |    2 modules
 [80] ./node_modules/react-redux/es/index.js + 19 modules 37 KiB {1} [built]
      |    20 modules
 [93] ./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js + 2 modules 10.6 KiB {1} [built]
      |    3 modules
[212] (webpack)/buildin/global.js 472 bytes {1} [built]
[251] ./src/assets/toscalogo_color.svg 82 bytes {0} [built]
[252] ./src/assets/toscalogo_grayscale.svg 82 bytes {0} [built]
[270] multi @babel/polyfill ./src 40 bytes {0} [built]
[464] (webpack)/buildin/harmony-module.js 573 bytes {1} [built]
[466] ./src/assets/custom.css 39 bytes {0} [built]
[602] ./src/index.js + 18 modules 42.1 KiB {0} [built]
      | ./src/index.js 609 bytes [built]
      | ./src/util/store.js 481 bytes [built]
      | ./util/common.js 117 bytes [built]
      | ./src/util/apiConnection.js 4.57 KiB [built]
      | ./src/util/redux/index.js 219 bytes [built]
      | ./src/util/redux/messageReducer.js 2.15 KiB [built]
      | ./src/util/redux/simpleReducer.js 1.86 KiB [built]
      | ./src/util/common.js 221 bytes [built]
      |     + 11 hidden modules
[603] ./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js + 3 modules 17.7 KiB {1} [built]
      |    4 modules
[612] ./node_modules/react-router-dom/es/BrowserRouter.js + 12 modules 41 KiB {1} [built]
      |    13 modules
[614] ./node_modules/react-router-dom/es/Switch.js + 1 modules 3.35 KiB {1} [built]
      |    2 modules
[615] ./node_modules/react-router-dom/es/Route.js + 1 modules 5.9 KiB {1} [built]
      |    2 modules
    + 989 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  962a1bf31c081691065fe333d9fa8105.svg (382 KiB)
  a1a749e89f578a49306ec2b055c073da.svg (496 KiB)
  vendors~main-1.css (602 KiB)
  vendors~main.js (342 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (966 KiB)
      vendors~main-1.css
      vendors~main.js
      main.css
      main.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
Child mini-css-extract-plugin node_modules/css-loader/index.js!node_modules/semantic-ui-css/semantic.min.css:
    Entrypoint mini-css-extract-plugin = *
       19 modules
Child mini-css-extract-plugin node_modules/css-loader/index.js!src/assets/custom.css:
    Entrypoint mini-css-extract-plugin = *
    [0] ./node_modules/css-loader!./src/assets/custom.css 340 bytes {0} [built]
        + 1 hidden module
UPDATE AVAILABLE The latest version of `serve` is 11.3.2
INFO: Accepting connections at http://localhost:5000

```
**************************************************************************


Type in browser : http://127.0.0.1:5000    

Then : "Press to Test";  Reply : Working!

**************************************************************************
****************************************************************************************************************************************************

1.13

Lets create a Dockerfile for a Java Spring project: github page

The setup should be straightforward with the README instructions. Tips to get you started:

Use openjdk image FROM openjdk:_tag_ to get java instead of installing it manually. Pick the tag by using the README and dockerhub page.

You’ve completed the exercise when you see a ‘Success’ message in your browser.
************************************************************
```
dmitri@dmitri-Lenovo-H50-00:~/projects/spring-example-project$ docker build .
Sending build context to Docker daemon  43.01kB
Step 1/6 : FROM openjdk:8
 ---> 51d6b33ebe8a
Step 2/6 : COPY . /workdir
 ---> Using cache
 ---> 3716517778a1
Step 3/6 : WORKDIR /workdir
 ---> Using cache
 ---> e0b7686840b5
Step 4/6 : RUN ./mvnw package
 ---> Using cache
 ---> e8a321f45a79
Step 5/6 : EXPOSE 8080
 ---> Using cache
 ---> 71a4f0099ef8
Step 6/6 : CMD java -jar ./target/docker-example-1.1.3.jar
 ---> Using cache
 ---> 70996a32c4c0
Successfully built 70996a32c4c0
dmitri@dmitri-Lenovo-H50-00:~/projects/spring-example-project$ docker images
REPOSITORY                              TAG                 IMAGE ID            CREATED             SIZE
<none>                                  <none>              70996a32c4c0        16 hours ago        596MB
openjdk                                 8                   51d6b33ebe8a        4 days ago          511MB
myfirst                                 latest              a27cce782980        6 weeks ago         683MB
<none>                                  <none>              2546608839c2        6 weeks ago         683MB
<none>                                  <none>              dedb2edeeca0        6 weeks ago         683MB
mysecond                                latest              f9f091ee8053        6 weeks ago         353MB
<none>                                  <none>              852567dbdc94        6 weeks ago         353MB
<none>                                  <none>              4e4ca32a27af        6 weeks ago         353MB
<none>                                  <none>              838ef65feb26        6 weeks ago         683MB
<none>                                  <none>              706f893db326        6 weeks ago         684MB
fav_distro                              xenial              005d2078bdfa        2 months ago        125MB
ubuntu                                  16.04               005d2078bdfa        2 months ago        125MB
devopsdockeruh/overwrite_cmd_exercise   latest              3d2b622b1849        9 months ago        908MB
docker-clock  
dmitri@dmitri-Lenovo-H50-00:~/projects/spring-example-project$ docker run -p 1234:8080 70996a32c4c0

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.3.RELEASE)

2020-07-21 09:05:22.801  INFO 6 --- [           main] c.d.dockerexample.DemoApplication        : Starting DemoApplication v1.1.3 on 6c1f32b5800d with PID 6 (/workdir/target/docker-example-1.1.3.jar started by root in /workdir)
2020-07-21 09:05:22.814  INFO 6 --- [           main] c.d.dockerexample.DemoApplication        : No active profile set, falling back to default profiles: default
2020-07-21 09:05:27.567  INFO 6 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2020-07-21 09:05:27.700  INFO 6 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2020-07-21 09:05:27.702  INFO 6 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.16]
2020-07-21 09:05:27.737  INFO 6 --- [           main] o.a.catalina.core.AprLifecycleListener   : The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [/usr/java/packages/lib/amd64:/usr/lib64:/lib64:/lib:/usr/lib]
2020-07-21 09:05:28.067  INFO 6 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2020-07-21 09:05:28.067  INFO 6 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 5052 ms
2020-07-21 09:05:28.791  INFO 6 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2020-07-21 09:05:29.254  INFO 6 --- [           main] o.s.b.a.w.s.WelcomePageHandlerMapping    : Adding welcome page template: index
2020-07-21 09:05:29.579  INFO 6 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2020-07-21 09:05:29.591  INFO 6 --- [           main] c.d.dockerexample.DemoApplication        : Started DemoApplication in 8.408 seconds (JVM running for 10.952)
```
****************************************************

In the browther print : http://localhost:1234

And we get : "Press here" and "Success"

************************************************************
*****************************************************
*************************************************************

1.14

Lets create a Dockerfile for a rails project: github page.

Again we can take a look at the README for the project to see the installation instructions. Tips to get you started:

Use Ruby image FROM ruby:_tag_ to easily get most of what you’ll need at the beginning. Pick the tag by using the README and dockerhub page.

If you want you can make small edits to the program if you get stuck and google doesn’t help you configure the setup. If you did, explain the edits with your submission of the Dockerfile.

You’ve completed the exercise when the application works in your browser.
*****************************************************************************
´´´
dmitri@dmitri-Lenovo-H50-00:~/projects/rails-example-project$ docker build -t rails .
Sending build context to Docker daemon  146.4kB
Step 1/15 : FROM ruby:2.6.0
 ---> ef8778f370d5
Step 2/15 : WORKDIR /workdir
 ---> Running in f2f12269dfae
Removing intermediate container f2f12269dfae
 ---> 13d5d00935e3
Step 3/15 : RUN apt-get update && apt-get install -y curl
 ---> Running in c3041f2156e9
Ign:1 http://deb.debian.org/debian stretch InRelease
Get:2 http://security.debian.org/debian-security stretch/updates InRelease [53.0 kB]
Get:3 http://deb.debian.org/debian stretch-updates InRelease [93.6 kB]
Get:4 http://deb.debian.org/debian stretch Release [118 kB]
Get:5 http://deb.debian.org/debian stretch Release.gpg [2410 B]
Get:6 http://security.debian.org/debian-security stretch/updates/main amd64 Packages [547 kB]
Get:7 http://deb.debian.org/debian stretch-updates/main amd64 Packages [2596 B]
Get:8 http://deb.debian.org/debian stretch/main amd64 Packages [7080 kB]
Fetched 7896 kB in 4s (1744 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
The following additional packages will be installed:
  libcurl3 libcurl4-openssl-dev
Suggested packages:
  libcurl4-doc libcurl3-dbg libidn11-dev libldap2-dev librtmp-dev
  libssh2-1-dev libssl1.0-dev | libssl-dev
The following packages will be upgraded:
  curl libcurl3 libcurl4-openssl-dev
3 upgraded, 0 newly installed, 0 to remove and 111 not upgraded.
Need to get 894 kB of archives.
After this operation, 5120 B of additional disk space will be used.
Get:1 http://security.debian.org/debian-security stretch/updates/main amd64 libcurl4-openssl-dev amd64 7.52.1-5+deb9u11 [374 kB]
Get:2 http://security.debian.org/debian-security stretch/updates/main amd64 curl amd64 7.52.1-5+deb9u11 [227 kB]
Get:3 http://security.debian.org/debian-security stretch/updates/main amd64 libcurl3 amd64 7.52.1-5+deb9u11 [292 kB]
debconf: delaying package configuration, since apt-utils is not installed
Fetched 894 kB in 0s (4011 kB/s)
(Reading database ... 29688 files and directories currently installed.)
Preparing to unpack .../libcurl4-openssl-dev_7.52.1-5+deb9u11_amd64.deb ...
Unpacking libcurl4-openssl-dev:amd64 (7.52.1-5+deb9u11) over (7.52.1-5+deb9u8) ...
Preparing to unpack .../curl_7.52.1-5+deb9u11_amd64.deb ...
Unpacking curl (7.52.1-5+deb9u11) over (7.52.1-5+deb9u8) ...
Preparing to unpack .../libcurl3_7.52.1-5+deb9u11_amd64.deb ...
Unpacking libcurl3:amd64 (7.52.1-5+deb9u11) over (7.52.1-5+deb9u8) ...
Setting up libcurl3:amd64 (7.52.1-5+deb9u11) ...
Processing triggers for libc-bin (2.24-11+deb9u3) ...
Setting up libcurl4-openssl-dev:amd64 (7.52.1-5+deb9u11) ...
Setting up curl (7.52.1-5+deb9u11) ...
Removing intermediate container c3041f2156e9
 ---> 8178133ae4ee
Step 4/15 : RUN apt-get update && apt-get install -y apt-utils
 ---> Running in c0e2b604c588
Ign:1 http://deb.debian.org/debian stretch InRelease
Hit:2 http://security.debian.org/debian-security stretch/updates InRelease
Hit:3 http://deb.debian.org/debian stretch-updates InRelease
Hit:4 http://deb.debian.org/debian stretch Release
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
The following additional packages will be installed:
  apt libapt-inst2.0
Suggested packages:
  apt-doc aptitude | synaptic | wajig dpkg-dev powermgmt-base python-apt
The following NEW packages will be installed:
  apt-utils libapt-inst2.0
The following packages will be upgraded:
  apt
1 upgraded, 2 newly installed, 0 to remove and 110 not upgraded.
Need to get 1833 kB of archives.
After this operation, 1603 kB of additional disk space will be used.
Get:1 http://deb.debian.org/debian stretch/main amd64 apt amd64 1.4.10 [1232 kB]
Get:2 http://deb.debian.org/debian stretch/main amd64 libapt-inst2.0 amd64 1.4.10 [191 kB]
Get:3 http://deb.debian.org/debian stretch/main amd64 apt-utils amd64 1.4.10 [410 kB]
debconf: delaying package configuration, since apt-utils is not installed
Fetched 1833 kB in 0s (4915 kB/s)
(Reading database ... 29688 files and directories currently installed.)
Preparing to unpack .../archives/apt_1.4.10_amd64.deb ...
Unpacking apt (1.4.10) over (1.4.9) ...
Setting up apt (1.4.10) ...
Selecting previously unselected package libapt-inst2.0:amd64.
(Reading database ... 29688 files and directories currently installed.)
Preparing to unpack .../libapt-inst2.0_1.4.10_amd64.deb ...
Unpacking libapt-inst2.0:amd64 (1.4.10) ...
Selecting previously unselected package apt-utils.
Preparing to unpack .../apt-utils_1.4.10_amd64.deb ...
Unpacking apt-utils (1.4.10) ...
Setting up libapt-inst2.0:amd64 (1.4.10) ...
Setting up apt-utils (1.4.10) ...
Processing triggers for libc-bin (2.24-11+deb9u3) ...
Removing intermediate container c0e2b604c588
 ---> 794356d5e6f8
Step 5/15 : RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
 ---> Running in 34dc5c5b8d79

## Installing the NodeSource Node.js 10.x repo...


## Populating apt-get cache...

+ apt-get update
Hit:1 http://security.debian.org/debian-security stretch/updates InRelease
Ign:2 http://deb.debian.org/debian stretch InRelease
Hit:3 http://deb.debian.org/debian stretch-updates InRelease
Hit:4 http://deb.debian.org/debian stretch Release
Reading package lists...

## Installing packages required for setup: apt-transport-https lsb-release...

+ apt-get install -y apt-transport-https lsb-release > /dev/null 2>&1

## Confirming "stretch" is supported...

+ curl -sLf -o /dev/null 'https://deb.nodesource.com/node_10.x/dists/stretch/Release'

## Adding the NodeSource signing key to your keyring...

+ curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
Warning: apt-key output should not be parsed (stdout is not a terminal)
OK

## Creating apt sources list file for the NodeSource Node.js 10.x repo...

+ echo 'deb https://deb.nodesource.com/node_10.x stretch main' > /etc/apt/sources.list.d/nodesource.list
+ echo 'deb-src https://deb.nodesource.com/node_10.x stretch main' >> /etc/apt/sources.list.d/nodesource.list

## Running `apt-get update` for you...

+ apt-get update
Hit:1 http://security.debian.org/debian-security stretch/updates InRelease
Ign:2 http://deb.debian.org/debian stretch InRelease
Hit:3 http://deb.debian.org/debian stretch-updates InRelease
Hit:4 http://deb.debian.org/debian stretch Release
Get:5 https://deb.nodesource.com/node_10.x stretch InRelease [4585 B]
Get:7 https://deb.nodesource.com/node_10.x stretch/main amd64 Packages [766 B]
Fetched 5351 B in 2s (2397 B/s)
Reading package lists...

## Run `sudo apt-get install -y nodejs` to install Node.js 10.x and npm
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
     echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn


Removing intermediate container 34dc5c5b8d79
 ---> f749e139aa49
Step 6/15 : RUN apt install -y nodejs
 ---> Running in 354d7c38135f

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Reading package lists...
Building dependency tree...
Reading state information...
The following NEW packages will be installed:
  nodejs
0 upgraded, 1 newly installed, 0 to remove and 110 not upgraded.
Need to get 16.2 MB of archives.
After this operation, 81.3 MB of additional disk space will be used.
Get:1 https://deb.nodesource.com/node_10.x stretch/main amd64 nodejs amd64 10.22.0-1nodesource1 [16.2 MB]
debconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
debconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
dpkg-preconfigure: unable to re-open stdin: 
Fetched 16.2 MB in 2s (5446 kB/s)
Selecting previously unselected package nodejs.
(Reading database ... 29843 files and directories currently installed.)
Preparing to unpack .../nodejs_10.22.0-1nodesource1_amd64.deb ...
Unpacking nodejs (10.22.0-1nodesource1) ...
Setting up nodejs (10.22.0-1nodesource1) ...
Removing intermediate container 354d7c38135f
 ---> 91a902edaa75
Step 7/15 : COPY package.json /workdir
 ---> 65c40fc1e8ef
Step 8/15 : RUN npm install
 ---> Running in d3fb248f7b20
npm notice created a lockfile as package-lock.json. You should commit this file.
up to date in 1.116s
found 0 vulnerabilities

Removing intermediate container d3fb248f7b20
 ---> e20872a1c859
Step 9/15 : COPY . /workdir
 ---> 38ffa38469a3
Step 10/15 : COPY Gemfile Gemfile.lock /workdir/
 ---> 19ef355736b2
Step 11/15 : RUN gem install bundler
 ---> Running in 5dbac4448bce
Successfully installed bundler-2.1.4
1 gem installed
Removing intermediate container 5dbac4448bce
 ---> 7336684db51a
Step 12/15 : RUN bundle install
 ---> Running in a9aeb8d47eeb
The dependency tzinfo-data (>= 0) will be unused by any of the platforms Bundler is installing for. Bundler is installing for ruby but the dependency is only for x86-mingw32, x86-mswin32, x64-mingw32, java. To add those platforms to the bundle, run `bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java`.
Fetching gem metadata from https://rubygems.org/..............
Fetching rake 12.3.2
Installing rake 12.3.2
Fetching concurrent-ruby 1.1.5
Installing concurrent-ruby 1.1.5
Fetching i18n 1.6.0
Installing i18n 1.6.0
Fetching minitest 5.11.3
Installing minitest 5.11.3
Fetching thread_safe 0.3.6
Installing thread_safe 0.3.6
Fetching tzinfo 1.2.5
Installing tzinfo 1.2.5
Fetching activesupport 5.2.2.1
Installing activesupport 5.2.2.1
Fetching builder 3.2.3
Installing builder 3.2.3
Fetching erubi 1.8.0
Installing erubi 1.8.0
Fetching mini_portile2 2.4.0
Installing mini_portile2 2.4.0
Fetching nokogiri 1.10.1
Installing nokogiri 1.10.1 with native extensions
Fetching rails-dom-testing 2.0.3
Installing rails-dom-testing 2.0.3
Fetching crass 1.0.4
Installing crass 1.0.4
Fetching loofah 2.2.3
Installing loofah 2.2.3
Fetching rails-html-sanitizer 1.0.4
Installing rails-html-sanitizer 1.0.4
Fetching actionview 5.2.2.1
Installing actionview 5.2.2.1
Fetching rack 2.0.6
Installing rack 2.0.6
Fetching rack-test 1.1.0
Installing rack-test 1.1.0
Fetching actionpack 5.2.2.1
Installing actionpack 5.2.2.1
Fetching nio4r 2.3.1
Installing nio4r 2.3.1 with native extensions
Fetching websocket-extensions 0.1.3
Installing websocket-extensions 0.1.3
Fetching websocket-driver 0.7.0
Installing websocket-driver 0.7.0 with native extensions
Fetching actioncable 5.2.2.1
Installing actioncable 5.2.2.1
Fetching globalid 0.4.2
Installing globalid 0.4.2
Fetching activejob 5.2.2.1
Installing activejob 5.2.2.1
Fetching mini_mime 1.0.1
Installing mini_mime 1.0.1
Fetching mail 2.7.1
Installing mail 2.7.1
Fetching actionmailer 5.2.2.1
Installing actionmailer 5.2.2.1
Fetching activemodel 5.2.2.1
Installing activemodel 5.2.2.1
Fetching arel 9.0.0
Installing arel 9.0.0
Fetching activerecord 5.2.2.1
Installing activerecord 5.2.2.1
Fetching mimemagic 0.3.3
Installing mimemagic 0.3.3
Fetching marcel 0.3.3
Installing marcel 0.3.3
Fetching activestorage 5.2.2.1
Installing activestorage 5.2.2.1
Fetching public_suffix 3.0.3
Installing public_suffix 3.0.3
Fetching addressable 2.6.0
Installing addressable 2.6.0
Fetching io-like 0.3.0
Installing io-like 0.3.0
Fetching archive-zip 0.12.0
Installing archive-zip 0.12.0
Fetching bindex 0.5.0
Installing bindex 0.5.0 with native extensions
Fetching msgpack 1.2.9
Installing msgpack 1.2.9 with native extensions
Fetching bootsnap 1.4.1
Installing bootsnap 1.4.1 with native extensions
Using bundler 1.17.2
Fetching byebug 11.0.0
Installing byebug 11.0.0 with native extensions
Fetching regexp_parser 1.3.0
Installing regexp_parser 1.3.0
Fetching xpath 3.2.0
Installing xpath 3.2.0
Fetching capybara 3.14.0
Installing capybara 3.14.0
Fetching ffi 1.10.0
Installing ffi 1.10.0 with native extensions
Fetching childprocess 0.9.0
Installing childprocess 0.9.0
Fetching chromedriver-helper 2.1.0
Installing chromedriver-helper 2.1.0
Fetching coffee-script-source 1.12.2
Installing coffee-script-source 1.12.2
Fetching execjs 2.7.0
Installing execjs 2.7.0
Fetching coffee-script 2.4.1
Installing coffee-script 2.4.1
Fetching method_source 0.9.2
Installing method_source 0.9.2
Fetching thor 0.20.3
Installing thor 0.20.3
Fetching railties 5.2.2.1
Installing railties 5.2.2.1
Fetching coffee-rails 4.2.2
Installing coffee-rails 4.2.2
Fetching multi_json 1.13.1
Installing multi_json 1.13.1
Fetching jbuilder 2.8.0
Installing jbuilder 2.8.0
Fetching rb-fsevent 0.10.3
Installing rb-fsevent 0.10.3
Fetching rb-inotify 0.10.0
Installing rb-inotify 0.10.0
Fetching ruby_dep 1.5.0
Installing ruby_dep 1.5.0
Fetching listen 3.1.5
Installing listen 3.1.5
Fetching puma 3.12.0
Installing puma 3.12.0 with native extensions
Fetching sprockets 3.7.2
Installing sprockets 3.7.2
Fetching sprockets-rails 3.2.1
Installing sprockets-rails 3.2.1
Fetching rails 5.2.2.1
Installing rails 5.2.2.1
Fetching rubyzip 1.2.2
Installing rubyzip 1.2.2
Fetching sass-listen 4.0.0
Installing sass-listen 4.0.0
Fetching sass 3.7.3
Installing sass 3.7.3
Fetching tilt 2.0.9
Installing tilt 2.0.9
Fetching sass-rails 5.0.7
Installing sass-rails 5.0.7
Fetching selenium-webdriver 3.141.0
Installing selenium-webdriver 3.141.0
Fetching spring 2.0.2
Installing spring 2.0.2
Fetching spring-watcher-listen 2.0.1
Installing spring-watcher-listen 2.0.1
Fetching sqlite3 1.3.13
Installing sqlite3 1.3.13 with native extensions
Fetching turbolinks-source 5.2.0
Installing turbolinks-source 5.2.0
Fetching turbolinks 5.2.0
Installing turbolinks 5.2.0
Fetching uglifier 4.1.20
Installing uglifier 4.1.20
Fetching web-console 3.7.0
Installing web-console 3.7.0
Bundle complete! 18 Gemfile dependencies, 79 gems now installed.
Bundled gems are installed into `/usr/local/bundle`
Post-install message from i18n:

HEADS UP! i18n 1.1 changed fallbacks to exclude default locale.
But that may break your application.

Please check your Rails app for 'config.i18n.fallbacks = true'.
If you're using I18n (>= 1.1.0) and Rails (< 5.2.2), this should be
'config.i18n.fallbacks = [I18n.default_locale]'.
If not, fallbacks will be broken in your app by I18n 1.1.x.

For more info see:
https://github.com/svenfuchs/i18n/releases/tag/v1.1.0

Post-install message from sass:

Ruby Sass is deprecated and will be unmaintained as of 26 March 2019.

* If you use Sass as a command-line tool, we recommend using Dart Sass, the new
  primary implementation: https://sass-lang.com/install

* If you use Sass as a plug-in for a Ruby web framework, we recommend using the
  sassc gem: https://github.com/sass/sassc-ruby#readme

* For more details, please refer to the Sass blog:
  http://sass.logdown.com/posts/7081811

Removing intermediate container a9aeb8d47eeb
 ---> 0d02493776f2
Step 13/15 : RUN rails db:migrate
 ---> Running in 1bfc1377211d
== 20190314120316 CreatePresses: migrating ====================================
-- create_table(:presses)
   -> 0.0020s
== 20190314120316 CreatePresses: migrated (0.0054s) ===========================

Removing intermediate container 1bfc1377211d
 ---> cd65b6737c57
Step 14/15 : EXPOSE 3000
 ---> Running in 2022c61fa543
Removing intermediate container 2022c61fa543
 ---> d310118faf3f
Step 15/15 : CMD rails s
 ---> Running in 5c9303d584c0
Removing intermediate container 5c9303d584c0
 ---> 45c1823b25e9
Successfully built 45c1823b25e9
Successfully tagged rails:latest
dmitri@dmitri-Lenovo-H50-00:~/projects/rails-example-project$ 
dmitri@dmitri-Lenovo-H50-00:~/projects/rails-example-project$ docker run -p 1234:3000 rails
=> Booting Puma
=> Rails 5.2.2.1 application starting in development 
=> Run `rails server -h` for more startup options
Puma starting in single mode...
* Version 3.12.0 (ruby 2.6.0-p0), codename: Llamas in Pajamas
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://0.0.0.0:3000
Use Ctrl-C to stop
Started GET "/" for 172.17.0.1 at 2020-08-10 11:56:10 +0000
Cannot render console from 172.17.0.1! Allowed networks: 127.0.0.1, ::1, 127.0.0.0/127.255.255.255
   (0.4ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC
  ↳ /usr/local/bundle/gems/activerecord-5.2.2.1/lib/active_record/log_subscriber.rb:98
Processing by PressesController#new as HTML
   (0.4ms)  SELECT COUNT(*) FROM "presses"
  ↳ app/controllers/presses_controller.rb:18
  Rendering presses/new.html.erb within layouts/application
  Rendered presses/_form.html.erb (3.7ms)
  Rendered presses/new.html.erb within layouts/application (8.9ms)
Completed 200 OK in 1518ms (Views: 1479.1ms | ActiveRecord: 2.3ms)


Started POST "/presses" for 172.17.0.1 at 2020-08-10 11:56:28 +0000
Cannot render console from 172.17.0.1! Allowed networks: 127.0.0.1, ::1, 127.0.0.0/127.255.255.255
Processing by PressesController#create as HTML
  Parameters: {"utf8"=>"✓", "authenticity_token"=>"ZLKnFjiZHcednMTNpUA/0Zn+Yn82B/KsvxnuSusuPrV11jaXtJVYUfKwzeHM4OOCR4FNHKTQj0f3MSYA8oov2w==", "commit"=>"Press"}
   (0.2ms)  begin transaction
  ↳ app/controllers/presses_controller.rb:31
  Press Create (1.2ms)  INSERT INTO "presses" ("created_at", "updated_at") VALUES (?, ?)  [["created_at", "2020-08-10 11:56:28.072623"], ["updated_at", "2020-08-10 11:56:28.072623"]]
  ↳ app/controllers/presses_controller.rb:31
   (50.9ms)  commit transaction
  ↳ app/controllers/presses_controller.rb:31
Redirected to http://localhost:1234/presses/new
Completed 302 Found in 66ms (ActiveRecord: 52.3ms)


Started GET "/presses/new" for 172.17.0.1 at 2020-08-10 11:56:28 +0000
Cannot render console from 172.17.0.1! Allowed networks: 127.0.0.1, ::1, 127.0.0.0/127.255.255.255
Processing by PressesController#new as HTML
   (0.4ms)  SELECT COUNT(*) FROM "presses"
  ↳ app/controllers/presses_controller.rb:18
  Rendering presses/new.html.erb within layouts/application
  Rendered presses/_form.html.erb (3.2ms)
  Rendered presses/new.html.erb within layouts/application (6.7ms)
Completed 200 OK in 58ms (Views: 53.7ms | ActiveRecord: 0.4ms
´´´
**************************************************************

In browser : localhost:1234 -> New press -> Press (press Press)

*********************************************************************
****************************************************************
******************************************************************
**********************************************************************

1.15

Create Dockerfile for an application or any other dockerised project in any of your own repositories and publish it to Docker Hub. This can be any project except clones / forks of backend-example or frontend-example.

For this exercise to be complete you have to provide the link to the project in docker hub, make sure you at least have a basic description and instructions for how to run the application in a README that’s available through your submission.
*********************************************************************

The project is here: https://github.com/Dmitri9149/Simple-web-app-with-Rust-and-Rocket

Pull image : docker pull dmitri9149/identity_functions

******************************************************
************************************************************
***************************************************************
***************************************************************


1.16

Pushing to heroku happens in a similar way. A project has already been prepared at devopsdockeruh/heroku-example so lets pull that first. Note that the image of the project is quite large.

Go to https://www.heroku.com/ and create a new app there and install heroku CLI. You can find additional instructions from Deploy tab under Container Registry. Tag the pulled image as registry.heroku.com/_app_/_process-type_, process-type can be web for this exercise. The app should be your project name in heroku.

Then push the image to heroku with docker push registry.heroku.com/_app_/web and release it using the heroku CLI: heroku container:release web (you might need to login first: heroku container:login)

For this exercise return the url in which the released application is.

You could also use the heroku CLI to build and push, but since we didn’t want to build anything this time it was easier to just tag the image.
***********************************************************************

The app is here : https://heroku--app--1.herokuapp.com/presses/new

********************************************************************
***********************************************************************
*************************************************************************
**************************************************************************

