Router.configure({
  waiton: function() { return Meteor.subscribe("pocketBook"); }
});

//Router.route('/', {name: 'index'} );

Router.route('/', function () {
  this.render('index');
});
