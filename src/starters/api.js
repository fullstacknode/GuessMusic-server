import '../initEnv';
import express from 'express';
import logger from 'morgan';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import responseTime from 'response-time';

const app = express();
app.disable('etag');

app.use(responseTime((req, res, time) => {
  // TODO will record process time
  console.log(time);
}));

app.use(logger('dev'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Routes.api.index);

// TODO move port to config
app.set('port', 4000);

export default app;
