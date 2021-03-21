//criar documento

function testDoc(){
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  body.appendParagraph('Hello World');
  body.appendPageBreak();
  Logger.log(body);
}
 
 
function addtoDoc(){
  
  const doc = docid
  const body = doc.getBody();
  body.appendParagraph('Hello World');
  body.appendHorizontalRule();
  body.appendPageBreak();
  Logger.log(doc);
}
 
function createmyDoc(){
  let myName = 'Tester Docs ';
  const doc = DocumentApp.create(myName);
  Logger.log(doc.getId());
  Logger.log(doc.getUrl());
  Logger.log(doc.getEditors());
  myName += ' ' + doc.getId();
  doc.setName(myName);
  const body = doc.getBody();
  body.appendParagraph('Hello World in '+myName);
  body.appendParagraph('URL ' + doc.getUrl());
  body.appendParagraph('Nome ' +doc.getName());
  body.appendParagraph('Editor ' +doc.getEditors());
  body.appendHorizontalRule();
  body.appendPageBreak();
 
}
 
