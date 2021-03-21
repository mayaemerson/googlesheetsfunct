/* Seleção da célula ativa  e adição númeração sequência pela linha mais texto,  Exemplo de código-fonte abaixo*/


function prepender(val,sheet){
  sheet.insertRowBefore(1);
  let cloneArr = val.map((x)=>x);
  cloneArr.push('START');
  const range = sheet.getRange(1,1,1,cloneArr.length);
  range.setValues([cloneArr]);
}
 
function addContent2(){
 // Lembre-se o abData e minha variável que está na pasta idplan que vc deve criar a sua e nomear como você preferir.
  const sheet = abData;
  let tempArr = [sheet.getLastRow()+1,'Novo Conteúdo'];
  prepender(tempArr,sheet);
  tempArr.push('Fim');
  sheet.appendRow(tempArr);
 
}
