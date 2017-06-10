    
    $(document).ready(function(){
    $('#bttn01').click(function(){
        
         console.log('jfjfjfjf');
         
    //Storing object to localstorage        
    var cart1={"vegetables":"aloo", "type":"kashmiri", "price":55};
            var cart2={"vegetables":"green bean", "type":"keral", "price":70};
            var objsn1=JSON.stringify(cart1);
            var objsn2=JSON.stringify(cart2);
            localStorage.setItem("firstVeg",objsn1);
            localStorage.setItem("secondVeg",objsn2); 
            
    //retrieving the stored values
            data01=localStorage.getItem("firstVeg");
            data02=localStorage.getItem("secondVeg");
            obj01=JSON.parse(data01);
            obj02=JSON.parse(data02);
            document.getElementById("0012").innerHTML=obj01.vegetables;
            document.getElementById("1123").innerHTML=obj02.price;
        });
    });