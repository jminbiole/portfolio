import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('portfolio', {path: '/'}, function() {
  this.route('main-page', {path: '/'});
  this.route('resume');
});
});

export default Router;
