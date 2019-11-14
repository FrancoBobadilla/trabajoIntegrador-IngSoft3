FROM openjdk:8-jre-alpine
RUN apk add --no-cache bash
WORKDIR /opt
COPY target/server-0.0.1-SNAPSHOT.jar .
ENV JAVA_OPTS="-Xms32m -Xmx128m"
EXPOSE 8080
CMD ["java", "-Xms32m", "-Xmx128m", "-jar", "-Dserver.port=${PORT}", "server-0.0.1-SNAPSHOT.jar"]

