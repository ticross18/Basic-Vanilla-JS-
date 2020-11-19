         var ans = 0;

         function display(val) 
         { 
         	 if(val === '')
         	 {
         	 	document.getElementById("result").value=''; 
         	 }
             document.getElementById("result").value+=val; 
         } 

         function solve(){
         	ans = document.getElementById("result").value;
         	document.getElementById("result").value = eval(ans);
         }
         

