function createaDoc() {
  const doc = DocumentApp.create(VAL);
}
 
function doGet(){
  return HtmlService.createHtmlOutputFromFile('index');
}
 
 
function doGet1(){
  return HtmlService.createHtmlOutput('hello 2');
}

/*você precisa criar uma pasta com nome de index para esse exemplo
exemplo simples de html

<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <style>
      body {
        background :red;
      }
      </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <script>
      console.log('test');
    </script>
  </body>
</html>*/