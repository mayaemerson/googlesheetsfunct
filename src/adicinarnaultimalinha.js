


const prepender = (val,sheet) =>{
  sheet.insertRowBefore(1);
  let cloneArr = val.map((x)=>x);
  cloneArr.push('START');
  const range = sheet.getRange(1,1,1,cloneArr.length);
  range.setValues([cloneArr]);
}
 
const addContent = () =>{
 
  const sheet = tbNr;
  let tempArr = [sheet.getLastRow()+1,'Novo Conteúdo'];
  prepender(tempArr,sheet);
  tempArr.push('Fim');
  sheet.appendRow(tempArr);
 
}


const addContenttwo = () =>{

  const sheet = tbNr
  Logger.log(sheet);
  let startPos = 5;
  let startVal = sheet.getRange(startPos,1).getValue();
  sheet.getRange(startPos,1).setValue(startVal + ' START');
  sheet.insertRowAfter(startPos);
  sheet.getRange(startPos+1,1).setValue('AFTER');
  sheet.insertRowBefore(startPos);
  sheet.getRange(startPos,1).setValue('BEFORE');
  let tempArr = [sheet.getLastRow()+1,'test',2,'hello world'];
  sheet.appendRow(tempArr);
}