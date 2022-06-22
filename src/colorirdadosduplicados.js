const colorirduplicates = () => {


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










 


