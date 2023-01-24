var isAnagram = function(s, t) {
    
    
    var p=  s.split("");
    var q=  t.split("")
     
       p.sort();
       q.sort();
      let count=0;
      // console.log(p,q)
     
      
      if(p.length==q.length)
          {
               
      for(var i=0; i<p.length; i++)
          {
              if(p[i]==q[i])
                  {
                      count++;
                  }
          }
      
      // console.log(count,p.length)
      if(count==p.length)
          {
              return true;
          }
      else{
          return false
      }
          }
      else{
          return false
      }
  };

  console.log(isAnagram)