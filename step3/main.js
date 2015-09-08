(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  app.firebaseURL = 'https://polysummitcodelab.firebaseio.com';
  app.firebaseProvider = 'anonymous';

  app.items = [
    {
      done: true,
      text: 'Write a TODO app'
    },
    {
      done: false,
      text: 'Use Firebase'
    }
  ];

  app.toggleItem = function(ev) {
    ev.model.set('done', !ev.model.item.done);
  };
  app.deleteItem = function(ev) {
    this.splice('items', ev.model.index, 1);
  };

  app.onFirebaseError = function(e) {
    this.$.errorToast.text = e.detail.message;
    this.$.errorToast.show();
  };
  app.onFirebaseLogin = function(e) {
    this.ref = new Firebase(this.firebaseURL + '/user/' + e.detail.user.uid);
  };

})(document);
