function test2 () {
  const ss = SpreadsheetApp . getActiveSpreadsheet (); 
  Logger . log ( ss . getUrl ());
  Logger . log ( ss . getId ());
  Logger . log ( ss . getName ());
}