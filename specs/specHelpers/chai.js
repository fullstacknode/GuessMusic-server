import chai from 'chai';
chai.should();
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));
global.chai = chai.should;
global.expect = chai.expect;
