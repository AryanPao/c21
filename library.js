function isTouching (m,f)
{
  if(m.x - f.x  <= m.width / 2  + f.width / 2  &&
    f.x - m.x <= m.width / 2 + f.width /2 &&
    m.y - f.y  <= m.height  / 2  + f.height / 2  &&
    f.y - m.y  <= m.height / 2 + f.height  /2 ){
   return true ; 
  
  }
  else {
   return false ; 
  }
}