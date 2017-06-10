$(document).ready(function(){
    
    $('#bttn01').click(function(){
        
         console.log('jfjfjfjf');
         
        
myObj=[{"Name":"Amrit", 
           "Loc":"Delhi", 
           "Email":"Activity",
           "Gender":"male",
           "phone":'879888888',
           "country":"India",
           "occupation":"Developer",
           "fathername":"Akhil",
           "lastname":"vaiv"
           },
 
          {
          "Name":"madhu", 
          "Loc":"mumbai", 
          "Email":"Activity", 
          "Gender":"female",
          "phone":'879888777',
          "country":"India",
          "occupation":"Buisness",
          "fathername":"Akash",
          "lastname":"Deva"
          },
          {
          "Name":"saurabh", 
          "Loc":"Delhi", 
          "Email":"Activity", 
          "Gender":"male" ,
          "phone":'8798888555',
          "country":"India",
          "occupation":"Developer",
          "fathername":"Ajay",
          "lastname":"vaisnav"
          },
           {
           "Name":"Alok", 
           "Loc":"Hyderabad", 
           "Email":"Activity", 
           "Gender":"male" ,
           "phone":'8798888999',
           "country":"India",
           "occupation":"Banker",
           "fathername":"Abhi",
           "lastname":"Mishra"
           }];
  
   
   
//    $('#div01').DataTable({
//                          damyObjta: dataSet,
//                          columns:[
//                      { title: "Name" },
//                      { title: "Loc" },
//                      { title: "Email" },
//                      { title: "Gender" },
//                      { title: "phone" },
//                      { title: "country" }, 
//                      { title:"occupation" },
//                      { title:"fathername" },
//                      { title:"lastname" }]                           
//    });
    
        $("#tb01").DataTable();
            
        $.each(myObj, function(key,value){
          var  DescTable="<tr><td>"+value.Name+"</td><td>"+value.Loc+"</td><td>"
                    +value.Email+"</td><td>"+value.Gender+"</td><td>"+value.phone+"</td><td>"
                +value.country +"</td><td>"+value.occupation+"</td><td>"+value.fathername+"</td><td>"
                    +value.lastname+"</td></tr>"; 
             $("#tbd01").append(DescTable);});
        });
             });