/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  // Called when clicking 'Give me a recipe' button
  'server/getSpoonacular' : function(searchType = 'findByIngredients?ingredients=' , searchTerms = 'apples%2Cflour%2Csugar&number=5', limit){
    var spoonacularAPI = process.env.SPOONACULAR_API
    var baseURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'
    var wholeURL = baseURL + searchType + searchTerms
    var response =  Meteor.http.call("GET",  wholeURL, {headers: {'X-Mashape-Key': spoonacularAPI}})
    console.log(response)
    return response
  }
});


