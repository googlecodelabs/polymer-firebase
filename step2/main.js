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

  app.addItem = function(event) {
    event.preventDefault(); // Don't send the form!
    this.push('items', {
      done: false,
      text: app.newItemValue
    });
    this.newItemValue = '';
  };

  app.toggleItem = function(event) {
    event.model.set('done', !event.model.item.done);
  };
  app.deleteItem = function(event) {
    this.splice('items', event.model.index, 1);
  };

})(document);
