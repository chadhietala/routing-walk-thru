import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service('router'),
  init() {
    this._super(...arguments);
    this.routeName = this.router.currentRoute.name;
    this.cb = ({ to }) => {
      if (!this.isDestroyed) {
        this.set('routeName', to.name);
      }
    };
    this.router.on('routeDidChange', this.cb);
  },
  willDestroy() {
    this.router.off('routeDidChange', this.cb);
  }
});
