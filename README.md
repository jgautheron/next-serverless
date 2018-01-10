# Serverless NextJS app

Using `express`, `aws-serverless-express` and `claudia`.

### Deploy

```bash
npm i
npm run build

npm i -g claudia
claudia create --region eu-west-1 --handler lambda.handler --deploy-proxy-api
```

#### Next 4.2

It'll work fine with Next 4.2 if you go around the hardcoded `babel-runtime` require.

```bash
cd node_modules/next
npm i babel-runtime
```