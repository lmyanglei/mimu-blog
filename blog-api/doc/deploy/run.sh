sudo docker run \
-d \
--name=blog-api \
-e "SPRING_PROFILES_ACTIVE=dev" \
--restart=always \
-p 8090:8090 \
blog-api:1.0.0
