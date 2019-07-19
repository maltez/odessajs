FROM jenkins/jenkins

USER root

RUN apt update
RUN apt install curl && curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt install nodejs

