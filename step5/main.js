(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  app.firebaseURL = 'https://polysummitcodelab.firebaseio.com';
  app.firebaseProvider = 'google';

  app.items = [];

  app.updateItems = function(snapshot) {
    this.items = [];
    snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.uid = childSnapshot.key();
      this.push('items', item);
    }.bind(this));
  };

  app.addItem = function(ev) {
    ev.preventDefault(); // Don't send the form!
    this.ref.push({
      done: false,
      text: app.newItemValue
    });
    app.newItemValue = '';
  };

  app.toggleItem = function(ev) {
    this.ref.child(ev.model.item.uid).update({done: ev.model.item.done});
  };

  app.deleteItem = function(ev) {
    this.ref.child(ev.model.item.uid).remove();
  };

  app.onFirebaseError = function(e) {
    this.$.errorToast.text = e.detail.message;
    this.$.errorToast.show();
  };
  app.onFirebaseLogin = function(e) {
    this.ref = new Firebase(this.firebaseURL + '/user/' + e.detail.user.uid);
    this.ref.on('value', this.updateItems.bind(this));
  };

})(document);
