/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $('#bttn01').click(function(){
      
          console.log('jfjfjfjf');
         console.log('ddd',$('input[name="game"]:checked').val())
//         
//           "Name : "+$("txt01").val() + '<br>'
//          "E-mail : "+$("txt02").val()+ '<br>'
//          "Hobby : "+$("txt03").val() + '<br>'//   
//          "Experence : "+$("opt01").val()+$("opt02").val()+$("opt03").val()
             
             $( "#tbd01" ).append("<tr><td>"+ $("#txt01").val()+"</td><br>"
                                   + "<td>"+$("#txt02").val()+"</td><br>"
                                   + "<td>"+$("#txt03").val()+"</td><br>"
                                   + "<td>"+$('#opt01').val()+"</td><br>"
                                   + "<td>"+$('input[name="game"]:checked').serialize()+"</td></tr>");              
//                           +"<td>"+ $('input:checkbox[name=game]:checked').each(function() 
//                           {
//                           $(this).val();
//                           })
//                           +"</td></tr>");
     
     });
//               $("#pid01").mousedown(function(){
//               alert("Mouse is pressed over paragraph");
//                });
                
//           $("#bttn01").mouseup(function(){
//               alert("Mouse click is released"); 
//           });
//           
//           $("#pid01").blur(function(){
//               alert("paragraph lost its focus");
//           })

//             $("#txt03").change(function(){
//             alert("Text can be modified ");
//             });
             
//             $("#txt03").hover(function(){
//                 alert("color of 3rd textbox is " +$("#txt03").css("background-color"));
//             })

                
               });
