/*
 * Step 1:
 * Chamada  básica para uma a API
 */
function swapi() {
  
  // Chame a API Star Wars
  var response = UrlFetchApp.fetch("https://swapi.dev/api/planets/1/");
 // Analise a resposta do JSON
  var json = response.getContentText();
  var data = JSON.parse(json);
  Logger.log(data);
  Logger.log(data.name);
  Logger.log(data.population);
  Logger.log(data.terrain);
}


