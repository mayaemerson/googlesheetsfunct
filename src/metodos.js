function arraysObj() {
  /*onde esta abDta e o endereço da planilha estou chamando pelo id, mas vc pode chamar dentro da sua sheet, você vai ter que trocar essas duas informações para seu teste.
exemplo eu chama em outra pasta
var idplan = "aqui vc coloca o id de sua planina" mas vc pode fazer da forma que preferir para chama-la
var wSh = SpreadsheetApp.openById (idplan)
var abData = wSh.getSheetByName("data")*/

  const myObj ={
  'nome': abData.getRange(2,1,abData.getLastRow()).getValues(), 
  'email': abData.getRange(2,2,abData.getLastRow()).getValues(),
  'fone': abData.getRange(2,3,abData.getLastRow()).getValues(),
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