FROM node:11-alpine AS builder

COPY . /usr/src/wbfr
WORKDIR /usr/src/wbfr

RUN yarn
RUN yarn build

FROM nginx:1.12-alpine

COPY --from=builder /usr/src/wbfr/build /usr/share/nginx/html
COPY --from=builder /usr/src/wbfr/k8s/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80 443
