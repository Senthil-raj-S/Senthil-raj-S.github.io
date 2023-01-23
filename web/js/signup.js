
 function button(){
   let n1=document.getElementById("name");
   let p1=document.getElementById("pwd");
   let m1=document.getElementById("num");
   n1.ariaValueMax=5;
   if(n1.value==""&&p1.value==""){
      alert("enter your name  "+n1.value+"\nenter your password"+n1.value);
      return false
   }
    else if(m1.value==""){
      alert("enter your mobile no " +n1.value);
      } 
      
}  

