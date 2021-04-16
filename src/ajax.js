
function getData(){
  const url = 'https://randomuser.me/api/?results=5'
  const rep = UrlFetchApp.fetch(url)
  const results = JSON.parse(rep)
  const SheetContacts = SpreadsheetApp.getActiveSpreadsheet()
  const ss =  SheetContacts.getSheetByName("people");
  //Logger.log(results.results);
  const fileName = DriveApp.createFile('people.json',rep)
  results.results.forEach((person)=>{
    Logger.log(person.name)
    ss.appendRow([person.name.title,person.name.first,person.name.last])
  })
 
}



function getWebsite(){
  const url = "http://www.google.com/"
  const rep = UrlFetchApp.fetch(url)
  Logger.log(rep.getContentText())
}
function doGet(){
//esse metodo const url = "http://www.google.com/"  exemplo esta na pasta onOpen.js
  const rep = UrlFetchApp.fetch(url)
 const html = rep.getContentText()
 return HtmlService.createHtmlOutput(html)
 }