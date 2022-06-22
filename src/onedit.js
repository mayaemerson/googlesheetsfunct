
/*
Lembrando que nesse exemplo chamo as planilha pelo id criei um folha com nome extras.
na planiha coloquei as colunas id  nome  data  validade mas isso só um exemplo
a validação de vencimento não está correta para o retorno dia pq e 
só um exemplo você vai ter que cria sua validação de acordo com sua necessidade.
*/


function onEdit(e){
   
   dataVencimento()
   numerarId()
   duplicates()
}

/*
aqui chamo só o dia
a data e hora se precisar pode formatar exemplos na pasta 
formatdatehora (os exemplos mostrado são para o horário Brasileiro)
*/
function carimboDateHor(){
// extras é a aba da planilha
const SheetContacts = SpreadsheetApp.getActiveSpreadsheet()
const ss =  SheetContacts.getSheetByName("extras");
  ss.getRange("C2").setFormula('=TODAY()')
    const lra0 = ss.getLastRow()
    const ftlinha = ss.getRange(2,3,lra0-1)
   
   ss.getRange("C2").copyTo(ftlinha)
}


//exemplo data vencimento
function dataVencimento() {
  // extras é a aba da planilha
const SheetContacts = SpreadsheetApp.getActiveSpreadsheet()
const ss =  SheetContacts.getSheetByName("extras");

  ss.getRange("D2").setFormula('=IF(B2="";"";IF(C2-TODAY()>30;"Prazo - Mais de 1 mês"; IF(C2=TODAY();"Hoje";  IF(C3<TODAY();"Venceu"; IF(C2-TODAY()<10;"Prazo - Menos de 10 dias"; IF(C3-TODAY()<15;"Prazo - Menos de 15 dias"; "Prazo - Menos de 1 Mês"))))))')
    const lra1 = ss.getLastRow()
    const ftlinha = ss.getRange(2,4,lra1-1)
   
   ss.getRange("D2").copyTo(ftlinha)

}

//exempo numeração automatica 

let lra = tbEx. getLastRow()

function numerarId(){
   const id = "1"
   tbEx.getRange("A2").setValue(id)
   tbEx.getRange("A3").setFormula('=OFFSET(A3;-1;0)+1')
   const lra2 = tbEx.getLastRow()
   const ftlinha = tbEx.getRange(3,1,lra-1)
   tbEx.getRange("A3").copyTo(ftlinha)
}