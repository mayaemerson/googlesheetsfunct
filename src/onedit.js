
/*
Lembrando que nesse exemplo chamo as planilha pelo id criei um folha com nome extras.
na planiha coloquei as colunas id  nome  data  validade mas isso só um exemplo
a validação de vencimento não está correta para o retorno dia pq e 
só um exemplo você vai ter que cria sua validação de acordo com sua necessidade.
*/


function onEdit(e){
   
   dataVencimento()
   numerarId()
}

/*
a data e hora se precisar pode formatar exemplos na pasta 
formatdatehora (os exemplos mostrado são para o horário Brasileiro)
*/
function carimboDateHor(){

  abExtra.getRange("C2").setFormula('=now()')
    const lra0 = abExtra.getLastRow()
    const ftlinha = abExtra.getRange(2,3,lra0-1)
   
   abExtra.getRange("C2").copyTo(ftlinha)


}


//exemplo data vencimento
function dataVencimento() {
  

  abExtra.getRange("D2").setFormula('=IF(B3="";"";IF(C3-TODAY()>30;"Prazo - Mais de 1 mês"; IF(C3=TODAY();"Hoje";  IF(C3<TODAY();"Venceu"; IF(C3-TODAY()<10;"Prazo - Menos de 10 dias"; IF(C3-TODAY()<15;"Prazo - Menos de 15 dias"; "Prazo - Menos de 1 Mês"))))))')
    const lra1 = abExtra.getLastRow()
    const ftlinha = abExtra.getRange(2,4,lra1-1)
   
   abExtra.getRange("D2").copyTo(ftlinha)

}

//exempo numeração automatica 

function numerarId(){
   const id = "1"
  abExtra.getRange("A2").setValue(id)
  abExtra.getRange("A3").setFormula('=OFFSET(A3;-1;0)+1')
    const lra2 = abExtra.getLastRow()
    const ftlinha = abExtra.getRange(3,1,lra2-1)
   
   abExtra.getRange("A3").copyTo(ftlinha)
}