Meteor.publish('recipes', function() {
  return Recipes.find();
});
