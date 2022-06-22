# Google Sheets Script

###### Projeto para ajudar com as planilhas do googleSheets, funções metodos etc...

<strong>

O Google Apps é um conjunto de aplicações, Gmail, Calendário, Drive, Docs. e Formulários.
Nesse Artigo, iniciarei uma série de códigos JS que podem ser usados no script do (google) direto nas planilhas ou em aplicações APPWEB, modal, etc.
Os aplicativos do Google, os famosos Google Apps, bem como os scripts da linguagem que o mesmo disponibiliza, baseada em JavaScript.
Os serviços e APIs GAS fornecem fácil acesso para automatizar tarefas nos produtos (Google), até em serviços de terceiros.
Espero que esse artigo ajude em algum momento.

<strong>

> Documentação [Apps Script](https://www.google.com/script/start/)
> GitHub  [Google Apps Script](https://github.com/topics/google-apps-script)

 
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

</p>

</details>
 
 <details><summary>Planilha com script</summary>

<p>

#### Neste documento a maioria dos nossos códigos serão com script.
###### Teremos também muitos códigos como fórmulas.
 
 > Nossas chamadas da planilha com script.
 
###### Para chamar nossa planilha e suas abas iremos usar o id dá planilha e também sua chamada local como a planilha ativa (SpreadsheetApp), as abas chama pelo nome da aba.
 
 - id
 - SpreadsheetApp
 - Aba
 
 
 
 ```javascript
 
   var id = "número do id"
 
 ```
 
 
 
 


</p>

</details>




[^1]: Projeto opensource fique a vontade para ajuda.
