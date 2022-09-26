function SUNDAYSMONTH ( m, y )  {
  const days = new Date( y,m,0 ).getDate();
  const sundays = [ (8 - (new Date( m +'/01/'+ y ).getDay())) % 7 ];
  for ( let i = sundays[0] + 7; i <= days; i += 7 ) {
    sundays.push( i );
  }

  const sundayTotal = sundays.length

  return sundayTotal
}


/* USO 

=SUNDAYSMONTH("AQUI COLUNA MES";"AQUI COLUNA ANO")

*/