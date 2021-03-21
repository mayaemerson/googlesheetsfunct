/*Obtendo Células Selecionar Intervalo  Exemplo de Código Fonte de Notação A1 
 aqui chamo minhas planilha pelo id representado em wSh.
*/

function addColors(){
 
  
  const sheet = wSh.getSheets()[0];
  let counter = 0;
  for(let i=1;i<51;i++){
    let backColor = 'green';
    for(let x=0;x<5;x++){
      let val = 'A'.charCodeAt()+x;
      let letterVal = String.fromCharCode(val);
      Logger.log(letterVal);
      counter++;
      if((counter%2)==0){
        backColor = 'pink';
      }else{
        backColor = 'yellow';
      }
      sheet.getRange(letterVal+i).setBackground(backColor);
    }
  }
}
