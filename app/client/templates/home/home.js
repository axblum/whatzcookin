/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  "submit .ingredient-form": function (event) {
    event.preventDefault();
    var searchType = "findByIngredients?ingredients=";
    var searchTerms = event.target.ingredient.value;
    Meteor.call('server/getSpoonacular', searchType, searchTerms)
    event.target.ingredient.value = "";
      }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  recipes: function () {
    return Recipes.find();
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
