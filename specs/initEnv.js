import 'babel-register';
import bluebird from 'bluebird';
import moment from 'moment';
import lazy from 'lazily-require';
import approot from 'approot';
import R from 'ramda';

global.appRoot = approot(__dirname).consolidate();

global.Components = lazy(appRoot.components());
global.Routes = lazy(appRoot.routes());
global.Starters = lazy(appRoot.starters());
global.Queries = lazy(appRoot.queries());
global.Schedulers = lazy(appRoot.schedulers());
global.Promise = bluebird;
global.moment = moment;
global.R = R;
