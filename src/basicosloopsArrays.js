function outputone(){
  for(let i = 0;i<10;i++){
    //Logger.log('Counter : '+i);
  }
  let x =0;
  while(x < 10){
    x++;
    //Logger.log('Counter : '+x);
  }
  const arr = ['Carla','Oliveira','One'];
  //Logger.log(arr.length);
  for(let y=0;y<arr.length;y++){
    //Logger.log(arr[y]);
  }
  arr.forEach((ele,index)=>{
    ///Logger.log(ele,index);
  })
  const myArray = [];
  for(let q=0;q<10;q++){
    //let temp = `item ${q}`;
    const temp = {
      'first' : 'Myname'+q,
      'last' : 'Laster'+q
    };
    myArray.push(temp);
  }
  //Logger.log(myArray);
  myArray.forEach((person)=>{
    //Logger.log(person.first + person.last);
  })
  const newArray = myArray;
  newArray[2] = 'Novo Item';
  myArray[5] = 'seu array está aqui';
  Logger.log(myArray);
  Logger.log(newArray);
 
}