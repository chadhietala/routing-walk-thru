import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service('router'),
  init() {
    this._super(...arguments);
    this.routeName = this.router.currentRoute.name;
    this.router.on('routeDidChange', ({ to }) => {
      this.set('routeName', to.name);
    })
  }
});
