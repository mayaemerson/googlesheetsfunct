function arraysObj() {
// data é a aba da planilha
 const SheetContacts = SpreadsheetApp.getActiveSpreadsheet()
 const ss =  SheetContacts.getSheetByName("data");
  const myObj ={
  'nome': ss.getRange(2,1,ss.getLastRow()).getValues(), 
  'email':ss.getRange(2,2,ss.getLastRow()).getValues(),
  'fone': ss.getRange(2,3,ss.getLastRow()).getValues(),
}
Logger.log(myObj.nome)
Logger.log(myObj.email)
Logger.log(myObj.fone)

// aqui vc pode fazer um json e pegar qualquer dado

}


function output() {
  const today = new Date();
  //Logger.log(today);
  const day = 1000 * 60 * 60 * 24;
  const nextWeek = new Date(today.getTime() + (day * 7));
  //Logger.log(nextWeek);
 
  let a = 0.5;
  Logger.log(Math.floor(a));
  Logger.log(Math.ceil(a));
  for (let i = 0; i < 100; i++) {
    let ranNum = Math.floor(Math.random() * 10) + 1; //1-10
    Logger.log(ranNum);
  }
 
  const myObj = {
    'first' : 'Maria',
    'last' : 'souza'
  }
  const myStr = JSON.stringify(myObj);
  Logger.log(myObj.first);
  Logger.log(myStr);
  const myObj2 = JSON.parse(myStr);
  myObj2.first = 'John';
  Logger.log(myObj2);
  Logger.log(myObj);
 
 
}