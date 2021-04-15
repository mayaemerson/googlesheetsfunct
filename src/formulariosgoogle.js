function createaForm() {
  const form = FormApp.create('MyForm');
  const item = form.addTextItem();
  Logger.log(item);
  Logger.log(form);
}
 
function updateMyForm(){
  const id = 'Aqui vc coloca o id do seu formulario';
  const form = FormApp.openById(id);
 
  const item1 = form.addCheckboxItem();
  item1.setChoices([
      item1.createChoice('Pimeiro'),
      item1.createChoice('Segundo'),
      item1.createChoice('Terceiro')
  ]);
 
  const item2 = form.addMultipleChoiceItem();
  item2.setTitle('Você gosta do script do google?')
    .setChoiceValues(['Sim','Não','Pode Ser'])
    .showOtherOption(true);
  form.addPageBreakItem().setTitle('Obrigado');
 
  const item3 = form.addGridItem();
  item3.setTitle('Avalie a sua IDE preferida')
  .setRows(['IDE google','Vs code','Subtext'])
  .setColumns(['Principal','Média','Ruim']);
 
  form.addDateItem().setTitle('Qaundo você iniciou com Apps Script?')
 
  Logger.log(form);
}

