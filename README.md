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
 <p>





[^1]: Projeto opensource fique a vontade para ajuda.
