function testSheet1(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange();
  const values = data.getValues();
  values.forEach((val)=>{
    Logger.log(val[1]);
  })
  Logger.log(values);
  Logger.log(sheet.getName());
}