# Serverless NextJS app

Using `express`, `aws-serverless-express` and `claudia`.

### Deploy

```bash
npm i
npm run build

npm i -g claudia
claudia create --region eu-west-1 --handler lambda.handler --deploy-proxy-api
```