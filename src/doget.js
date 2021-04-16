function doGet(){
  //esse metodo estou consumindo os dado getWbsite que estão sendo chamandos na pasta ajax
const url = "http://www.google.com/" // está api vc copia os dados do site do google dá pagina inicial
  const rep = UrlFetchApp.fetch(url)
 const html = rep.getContentText()
 return HtmlService.createHtmlOutput(html)
 }
