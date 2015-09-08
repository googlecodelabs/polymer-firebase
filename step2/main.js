(function(document) {
  'use strict';

  var app = document.querySelector('#app');

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

})(document);
