FROM java:8

MAINTAINER blog-api

RUN mkdir -p /blog-api

WORKDIR /blog-api

EXPOSE 8090

ADD ./blog-api.jar ./

CMD sleep 30;java -Djava.security.egd=file:/dev/./urandom -jar blog-api.jar