

function filter(){
  let ss = SpreadsheetApp.getActiveSpreadsheet()
  let tbl = ss.getSheetByName("bd_text")
  let originalData = tbl.getRange(2,1, tbl.getLastRow()-1,10).getDisplayValues()
  let pesquisa = "AG202078691GD"

  let data = originalData.filter(function(item){
    return item[0] === pesquisa

  })
 //codigo acima filtra
 //codigo abaixo criar uma folha e salva os dados pesquisados
let svdSheet = ss.insertSheet(retPesquisa)
if (data.length > 0 )
  svdSheet.getRange(2,1,data.length,data[0].length.setValues(data))
}