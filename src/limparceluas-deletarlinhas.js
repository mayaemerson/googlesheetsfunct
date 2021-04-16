function limparLinhas(){
   //database e onome da aba ok
  const databd = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("database")
  const lrdata = databd.getLastRow()
  databd.getRange(2,1,lrdata,11).clear()

}
function excluirLinhas(){
  //database e onome da aba ok
  const databd = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("database")
  const lrdata = databd.getLastRow()
  databd.deleteRows(2,lrdata)

}

function backUp(){
    //database e onome da aba ok
    const databd = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("database")
    const backUp = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("backup")
    const lrdata = databd.getLastRow()
    const dados = databd.getRange(2,2,lrdata,11).getValues()
    backUp.getRange(2,1,lrdata,11).setValues(dados)

}
