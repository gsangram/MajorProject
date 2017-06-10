//        function getData(){
//            
//        $(document).click(function(){
//            
//        $("#g01").value();
//        } )  ;
//           
//        $(document).click(function(){
//            $("#g02").value();
//        });
//        
//        $(document).click(function(){
//            $("#g03").value();
//            });
//        }
//       
$(document).ready(function(){

    
    $("#btn01").click(function(){
        console.log('hello')

        $( "#iv01" ).append("<tr><td>"+ $("#g01").val()+"</td><br>"
             + "<td>"+$("#g02").val()+"</td><br>"
             + "<td>"+$("#g03").val()+"</td></tr>"); 
    
});
});