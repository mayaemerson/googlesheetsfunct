function testUltlinha(){
  //selecinar ultimla linha preenchida da planilha e pintar de laranga.
  const sheet = wSh.getSheets()[0];
  const lastCol = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();
  const range = sheet.getRange(1,1,lastRow,lastCol);
  const rangeData = sheet.getDataRange();
  const lastCorner = sheet.getRange(lastRow,lastCol);
  lastCorner.setBackground('orange');
  Logger.log(lastCorner.getValue());
  Logger.log(rangeData.getValues());
  Logger.log(lastCol,lastRow);
  Logger.log(range.getValues());
}