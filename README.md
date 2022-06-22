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
 
 <sub>Exemplo para ID</sub>
 
 ***vamos usar*** 
 
 - idBd = Para o id dá planilha
 - sb = Para SpreadsheetApp Id
 - tb = Para aba
 
 ```javascript
       const idBd = "1CgcnfEIrCTL55H4tI5Lz-2abvfT_fBkIML_1PRYmnMk"
       const sb = SpreadsheetApp.openById (idBd)
       const tbAb = sb.getSheetByName("nome da aba")
 ```
 
 <sub>Exemplo para SpreadsheetApp</sub>
 
 ***vamos usar*** 
 
 - ss = Para SpreadsheetApp
 - tb = Para aba
 
 ```javascript
       const ss = SpreadsheetApp.getActiveSpreadsheet()
       const tbAb = ss.getSheetByName("nome da aba")
 ```
 
 **Obs.: Essas informações e para quando estiver olhando para as pastas dos códigos você saiba com estamos chamando.**

</p>

</details>
 
 <details><summary>Códigos Script</summary>

<p>

#### Códigos Js

```ruby
   puts "Hello World"
```

</p>

</details>

<details><summary>Formulas</summary>

<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>

</details>


[^1]: Projeto opensource fique a vontade para ajuda.
