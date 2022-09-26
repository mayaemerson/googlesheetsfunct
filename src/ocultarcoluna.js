const hideColum = () => {

  data.getRange('C:C').activate();
  data.hideColumns(data.getActiveRange().getColumn(), data.getActiveRange().getNumColumns());

}