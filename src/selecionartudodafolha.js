function testSheet1(){
 
  const sheet = wSh
  const data = sheet.getDataRange();
  const values = data.getValues();
  values.forEach((val)=>{
    Logger.log(val[0]);
    //o número 1 ele e referente a (folha ou aba) escolhida (a númeração das folhas começa com 0) .
  })
  Logger.log(values);
  Logger.log(sheet.getName());
}