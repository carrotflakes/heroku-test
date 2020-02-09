const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello heroku';
});

app.listen(process.env.PORT || 3000);
