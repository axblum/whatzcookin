/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  // Called when clicking 'Give me a recipe' button
  'server/getSpoonacular' : function(searchType = 'findByIngredients?ingredients=' , searchTerms = 'apples%2Cflour%2Csugar', limit="&number=5"){
    var spoonacularAPI = process.env.SPOONACULAR_API
    var baseURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'
    var wholeURL = baseURL + searchType + searchTerms + limit
    var response =  Meteor.http.call("GET",  wholeURL, {headers: {'X-Mashape-Key': spoonacularAPI}})
    var recipes = response['data'];
    return recipes
  },
  // Called after the 'Give Me A Recipe' button click to add those recipes to the DB
  'server/addRecipe' : function(recipes) {
    for(i=0;i<recipes.length;i++){
      Recipes.insert({
        id: recipes[i]['id'],
        title: recipes[i]['title'],
        image: recipes[i]['image']
      })
    }
  }
});


