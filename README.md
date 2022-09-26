 ![Isso é uma imagem](https://user-images.githubusercontent.com/57040825/175081561-e35d367c-f973-4bd9-b682-a2430cdf5679.png)

# Google Sheets Script

###### Projeto para ajudar com as planilhas do googleSheets, funções metodos etc...

<strong>

O Google Apps é um conjunto de aplicações, Gmail, Calendário, Drive, Docs. e Formulários.
Nesse Artigo, iniciarei uma série de códigos JS que podem ser usados no script do (google) direto nas planilhas ou em aplicações APPWEB, modal, etc.
Os aplicativos do Google, os famosos Google Apps, bem como os scripts da linguagem que o mesmo disponibiliza, baseada em JavaScript.
Os serviços e APIs GAS fornecem fácil acesso para automatizar tarefas nos produtos (Google), até em serviços de terceiros.
Espero que esse artigo ajude em algum momento.

<strong>

> Documentação [Doc Apps Script](https://www.google.com/script/start/)
> GitHub  [Google Apps Script Git](https://github.com/topics/google-apps-script)
> Ajuda  [Ajuda do editores](https://support.google.com/docs#topic=1382883)

> JS  [Java script](https://www.javascript.com/)
> Node [Node.Js](https://nodejs.org/en/)
 
<details><summary>Dica Importante</summary>

<p>

> **Coisas que podem deixar suas planilhas _pesadas_ cuidado com funções voláteis (são funções que ficam atualizando a casa segundo).**

 1. TODAY()
    - Uso TODAY()
      - Sintaxe
        - TODAY()
          - TODAY é uma função volátil e pode prejudicar o desempenho da planilha, [documentação](https://support.google.com/docs/answer/3092984?hl=pt-BR), O mesmo serve paraa função NOW [documentação](https://support.google.com/docs/answer/3092981?hl=pt-BR).
 
2. ARRAYFORMULA
   - 
     - Ela e uma função que pode ajudar muito, mas quando sua planilha começa a ficar grande pode ser um problema (Porque mesmo que não exista dados nas linhas em branco ela vai alimentar dados nessas linhas em branco, com isso o desempenho de sua planilha pode ser prejudicada) [documentação](https://support.google.com/docs/answer/3093275?hl=pt-BR).
 
> Aternativa para ARRAYFORMULA
 - ARRAY_CONSTRAN
   - Restringe o resultado de uma matriz ao tamanho especificado, [documentação](https://support.google.com/docs/answer/3267036).
 
 **OBS: Geralmente usada em conjunto com outras funções que retornam um resultado em matriz, quando um número menor de linhas ou colunas é desejado.**
 
 ###### exemplo:
 
 ```
 Sintaxe : ARRAY_CONSTRAIN(intervalo_de_entrada; numero_de_linhas; numero_de_colunas)
 
 ARRAY_CONSTRAIN(A1:C10, 2, 3)
 ARRAY_CONSTRAIN(SORT(A1:F100, 1, TRUE), 10, 6)
 
 ```

 3. LINHAS EM BRANCO OU COLUNAS
   - Se você tem dados da (A2 : C4), não a necessidade de que as colunas D Para frente e as linhas 5 para baixo exita na planilha, como no exemplo abaixo, importante excluir essas linhas e colunas não vazias, (Mesmo que não exita dados sempre que sua planilha for atualizada ela vai ler essas linhas e colunas vazias).
 
 ## No exemplo abaixo, teríamos que excluir as linhas 5/6/7/8 e a coluna D
 
 ###### ~~ERRADO~~
 
|   A          |  B             |    C          |    D          |
| :---         |     :---:      |          ---: |          ---: |
| 1   | name     | name     |
| 2   | git diff | git diff |
| 3   | git diff | git diff |
| 4   | git diff | git diff |
| 5   |  | |
| 6   |  | |
| 7   |  | |
| 8   |  | |
 
 ###### **CORRETO**
|   A          |  B             |    C          |
| :---         |     :---:      |          ---: |
| 1   | name     | name     |
| 2   | git diff | git diff |
| 3   | git diff | git diff |
| 4   | git diff | git diff |

 ## *Essas, boas práticas ira ajuda sua planilha ter um rendimento muito melhor.*
 ###### Essas informações são casos de uso utilizada em meus códigos, e são práticas minhas, não significa que estão corretas ou não, significa que é uma prática que gosto de utilizar.
</p>

</details>
 
 <details><summary>Planilha com script</summary>

<p>

#### [documentação](https://developers.google.com/apps-script).

 
 > Nossas chamadas da planilha com script.
 
###### Para chamar nossa planilha e suas abas iremos usar o id dá planilha e também sua chamada local como a planilha ativa (SpreadsheetApp), as abas chama pelo nome da aba.
 
 - id
 - SpreadsheetApp
 - Aba
 
 ![Isso é uma imagem](https://user-images.githubusercontent.com/57040825/175077705-f25e10df-4398-46d5-a67f-4e885e9adc47.png)
 
 ###### Com a planilha ativa você consegue pegar o id na barra de navegação como está na imagem acima, você só precisa do número que está em negrito, está imagem e só um exemplo você tem que pegar o id dá sua planilha.(Obs.: esse endereço não te leva para lugar nenhum poque é só um exemplo).
 
 ![Isso é uma imagem](https://user-images.githubusercontent.com/57040825/175102916-c2be2b7b-a8b8-4106-83aa-c35f480e7c52.png)
 
 ###### Acima temos como as abas foram nomeadas
 
 <sub>Exemplo para ID</sub>
 
 ***vamos usar*** 
 
 **Importante vamos noear nossos arquivos códigos como _camelCase_**
 
 - idBd = Para o id dá planilha
 - ss = Para SpreadsheetApp Id
 - tb = Para aba
 
 ```javascript
       const idBd = "1CgcnfEIrCTL55H4tI5Lz-2abvfT_fBkIML_1PRYmnMk"
       const ss = SpreadsheetApp.openById (idBd)
 
       const data = ss.getSheetByName("data")
       const bdText = ss.getSheetByName("bd_text")
       const adNewRow = ss.getSheetByName("ad_new_row")
       const duplicados = ss.getSheetByName("duplicados")
       const extras = ss.getSheetByName("extras")
 ```
 
 ***vamos usar*** 
 
 - ssS = Para SpreadsheetApp
 - tbS = Para aba
 
 <sub>Exemplo para SpreadsheetApp</sub>
 
 ###### O procedimento para SpreadsheetApp, e o mesmo usado para o ID.
 
 ```javascript
       
       const ssS = SpreadsheetApp.getActiveSpreadsheet()
       const tbS = ssS.getSheetByName("nome da aba")
 ```
 
 
 ```javascript
       var tbDt = data
       var tbNr = adNewRow
       var tbTt = bdText
       var tbNr = adNewRow
       var tbDp = duplicados
       var tbEx = extras
 ```
 
 **Obs.: Essas informações e para quando estiver olhando para as pastas dos códigos você saiba com estamos chamando.**

</p>

</details>
 
 
 <details><summary>Revisa permissão</summary>

<p>

#### Dá permissão para acesso a planilha

![Isso é uma imagem](https://user-images.githubusercontent.com/57040825/175099923-aab7e52f-9eb1-42e3-90a6-ccfc15d7449a.png)

</p>

</details>
 
 
 <details><summary>Códigos Script</summary>

<p>

#### Códigos Js
 
<sup>Nome do Usuário</sup>

```javascript
   const nomeUser = Session.getEffectiveUser().getUsername()
   Logger.log(nomeUser)
```

 
 <sup>Add na primeria linha e na última</sup>

```javascript
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
```
 
 <sup>Add before start after e na última linha</sup>

```javascript
  const addContentTwo = () => {
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

```
 <sup>Colorir dubplicados</sup>

```javascript
  const colorirduplicates = () =>
  let values = tbDp.getRange("A2:D").getValues()
  let arr=[]
  let repeat=[]
  let row=2
//importante o array no js começa pelo número zero
  values.map((elem,ind,obj)=>{
    if(elem[0] != ""){
      if(arr.indexOf(elem[0]) === -1){
        arr.push(elem[0])
      }else{
         repeat.push(elem[0])
      }
    }
   })// fim primeira parte

  values.map((elem,ind,obj)=>{
    if(elem[0] != ""){
      if(repeat.indexOf(elem[0]) !== -1){
        tbDp.getRange(`A${row}:D${row}`).setBackground('pink')
      }else{
        tbDp.getRange(`A${row}:D${row}`).setBackground('white')
      }
      }
    row++
  })
```
 <sup>Consultar Cep</sup>

```javascript

let app = SpreadsheetApp;
let spreadsheet = app.getActiveSpreadsheet();
let sheet = spreadsheet.getSheetByName('consulta_cep');

//Busca o cep na base dos correios
const getAddressByCep = () =>
{       sheet.getRange("D5").clear
        let searchCep = sheet.getRange("C3").getValue().replace("-","") // busca pelo cep na celula c2
        let cep = searchCep
        let reqs = UrlFetchApp.fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let ress = JSON.parse(reqs.getContentText())

        const retCep = `
        ${'Rua '} ${ ress.logradouro} 
        ${'Complemento '} ${ ress.complemento} 
        ${'Bairro '} ${ ress.bairro} 
        ${'Cidade'} ${ ress.localidade}
        ${'Uf'} ${ ress.uf}
        `

         sheet.getRange("D5").setValue(retCep)
         
    }

  
```

 
 <sup>Copiar colar até a última linha, aqui criando um id</sup>

```javascript
  let lra = tbEx. getLastRow()

   function numerarId(){
   const id = "1"
   tbEx.getRange("A2").setValue(id)
   tbEx.getRange("A3").setFormula('=OFFSET(A3;-1;0)+1')
   const lra2 = tbEx.getLastRow()
   const ftlinha = tbEx.getRange(3,1,lra-1)
   tbEx.getRange("A3").copyTo(ftlinha)
}
```

 <sup>Ocultar Coluna</sup>

```javascript
  const hideColum = () => {
  data.getRange('C:C').activate();
  data.hideColumns(data.getActiveRange().getColumn(), data.getActiveRange().getNumColumns());

}

```

 <sup>API que não requer autenticação</sup>

 <sub>Url exemplo</sub>

```javascript
// set the endpoint
     const url = 'https://dever.example.com/v3/abc';
 
// call the API
     const response = UrlFetchApp.fetch(url);

```

 <sup>API requer autenticação</sup>

 <sub>Url exemplo</sub>

```javascript
// include the API Key
const API_KEY = 'XXXXXXXXXXXXXXX';
 
// set the endpoint
const url = 'https://developers.example.com/v1/abc';
 
// call the API
const response = UrlFetchApp.fetch(url + '&api_key=' + API_KEY);


```

 <sup>API requer chave no cabeçalho</sup>

 <sub>Url exemplo</sub>

```javascript
// include the API Key
const API_KEY = 'XXXXXXXXXXXXXXX';
 
// set the endpoint
const url = 'https://developers.example.com/v1/abc';
 
// set the params object
const params = {
    headers: {
      Authorization: API_KEY
    }
  }
 
// call the API
const response = UrlFetchApp.fetch(url,params);



```

 <sup>Às vezes, a palavra “Autorização” é substituída por uma palavra diferente, dependendo de como os designers da API configuraram a API</sup>

<sub>Por exemplo, a API Teachable usa a palavra “apiKey”</sub>

 <sub>Url exemplo</sub>

```javascript
// include the API Key
const API_KEY = 'XXXXXXXXXXXXXXX';
 
// set the endpoint
const url = 'https://developers.example.com/v1/abc';
 
// set the params object
const params = {
    headers: {
      apiKey: API_KEY
    }
  }
 
// call the API
const response = UrlFetchApp.fetch(url,params);

```

 <sup> Quebrar linha no msg.box </sup>

```javascript

    const msgBox = () => {

   Browser.msgBox("Linha 1 \\n Linha 2 \\n Linha 3")

    }

```
 

 </p>


</details>

<details><summary>Funções</summary>

<p>

<sub>Função que retorna quantidades de domingo no mês selecionado</sub>

```javascript
function SUNDAYSMONTH ( m, y )  {
  const days = new Date( y,m,0 ).getDate();
  const sundays = [ (8 - (new Date( m +'/01/'+ y ).getDay())) % 7 ];
  for ( let i = sundays[0] + 7; i <= days; i += 7 ) {
    sundays.push( i );
  }

  const sundayTotal = sundays.length

  return sundayTotal
}


/* CASO DE USO 

=SUNDAYSMONTH("AQUI COLUNA MES";"AQUI COLUNA ANO")

*/
   
```
#### Exemplo de uso

![Isso é uma imagem](https://user-images.githubusercontent.com/57040825/177204115-27ebfe0e-2409-47e5-99d4-b069dc691bb8.png)


#### Sequence
<sub>
A função SEQUENCE é uma função útil no Planilhas Google. É uma maneira poderosa de gerar listas numeradas.
</sub>

###### exemplo:
 
> Documentação [Doc Sequence](https://bit.ly/maiasequence)
> Documentação [Doc Matriz](https://bit.ly/maiasheetsmatriz)
> Documentação [Doc Lambda](https://bit.ly/maiasheetslambda)

 ```
 Maneira antiga:

 =ArrayFormula(SEQUENCE(4) & " of " & SEQUENCE(4,1,4,0))
 
 ** A fórmula de matriz acima não é fácil de entender ou modificar, a menos que você esteja familiarizado com a função de sequência.
 
 Nova maneira com Lambda.

 Aqui está o equivalente BYROW para gerar a mesma lista:

 =BYROW(SEQUENCE(4),LAMBDA(row,row&" of "&4))

 Ele cria uma matriz de números de 1 a 4 , que a função lambda interna transforma, linha por linha, em 1 de 4, 2 de 4, etc.

 Além de a fórmula ser mais sucinta, acho que é mais fácil de entender e modificar.

 Agora, só precisamos alterar o "4" para um número diferente duas vezes, e é fácil identificar os números a serem alterados.
 
 ```
 #### Sort
<sub>
 você tenha uma lista de 10 itens na coluna A da sua Planilha e queira classificá-los do menor para o maior.
</sub>
 
 ###### exemplo:
 
> Documentação [Doc Sort](https://bit.ly/docsortsheets)

 ```
 Sintaxe :
  Uso de exemplo
  SORT(A2:B26; 1; VERDADEIRO)
  SORT({1, 2; 3, 4; 5, 6}; 2; FALSO)
  SORT(A2:B26; C2:C26; VERDADEIRO)  

 Sintaxe:

 SORT(intervalo; coluna_a_classificar; crescente; [coluna_a_classificar2; crescente2; ...])


  =SORT(A1:A10,LEN(A1:A10),TRUE)

  O primeiro intervalo é a coluna a ser classificada, neste exemplo A1:A10
  O segundo intervalo é a coluna de classificação, ou seja, a coluna usada para determinar a ordem de classificação.
  Neste exemplo, uso a função LEN para converter a coluna A em uma matriz de números, com base na contagem de caracteres. Por exemplo, "fazer" se torna 2.
  Em seguida, a terceira coluna é um valor VERDADEIRO/FALSO para classificar em ordem crescente ou decrescente

  ```
 
 ![Isso é uma imagem](https://user-images.githubusercontent.com/57040825/192324206-7afacd76-ef10-427c-b7b4-0825d1c2ec6a.png)


 #### Len
<sub>
Retorna o tamanho de uma string.
</sub>
 
 ###### exemplo:
 
> Documentação [Doc Len](https://bit.ly/maialensheets)

 ```
 Sintaxe :
  Uso de exemplo
  NÚM.CARACT(A2)

  NÚM.CARACT("lorem ipsum")  

  Sintaxe:
  NÚM.CARACT(texto)
  
 ```
</p>

</details>




