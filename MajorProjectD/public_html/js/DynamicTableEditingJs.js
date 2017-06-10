$(document).ready(function () {
    /*On click of submit button*/
    $('#bttn01').click(function () {
//        function formClear(){
//            $("#txt01").val("");
//            $("#txt02").val("");
//            $("#txt03").val("");
//            $("#opt01").val("");
//            $("chk01").val("");
//
//        }
        var meta = "<tr><td>" + $("#txt01").val() + "</td>"
                + "<td>" + $("#txt02").val() + "</td>"
                + "<td>" + $("#txt03").val() + "</td>"
                + "<td>" + $('#opt01').val() + "</td>"
                + "<td>" + $('input[name="game"]:checked').serialize() + "</td>"
                + "<td>" + '<button id="bye01" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style="background-color:lightskyblue" >Edit</button>'
                + '<button id="bye02" type="button" class="btn btn-info btn-lg"  style="background-color:red">Delete</button>' + "</td></tr>";
        $("#tbd01").append(meta);
         $('#form01')[0].reset();
//         formClear();
    }); 
    /*On click of edit button*/
    $('body').on('click', '#bye01', function () {
        var Name = $(this).parent().parent().closest('tr').find('td').eq(0).html();
        var Email = $(this).parent().parent().closest('tr').find('td').eq(1).html();
        var Hobby = $(this).parent().parent().closest('tr').find('td').eq(2).html();
        var Experience = $(this).parent().parent().closest('tr').find('td').eq(3).html();
        var Games = $(this).parent().parent().closest('tr').find('td').eq(4).html();
        /*appenidng to form fields*/
        $('#01txt').val(Name);
        $('#02txt').val(Email);
        $('#03txt').val(Hobby);
        $('#01opt').val(Experience);
        $('input[name="game"]:checked').val(Games);
        var currentrow=$(this).parent().parent().index();
        $('#up01').attr('currentrow',currentrow)
        
    });
    /*on click of update form in modal*/
     $('body').on('click', '#up01', function () {
           var updatingRow=$(this).attr('currentrow');
           var Name=$("#01txt").val();  
           var Hobby=$('#02txt').val();
           var Email=$('#03txt').val();
           var Experience=$('#01opt').val();
           var Games=$('input[name="game"]:checked').val();
           $("#tbd01").find('tr').eq(updatingRow).find('td').eq(0).html(Name);
           $("#tbd01").find('tr').eq(updatingRow).find('td').eq(1).html(Hobby);
           $("#tbd01").find('tr').eq(updatingRow).find('td').eq(2).html(Email);
           $("#tbd01").find('tr').eq(updatingRow).find('td').eq(3).html(Experience);
           $("#tbd01").find('tr').eq(updatingRow).find('td').eq(4).html(Games);
            $('#01form')[0].reset();
       });
});
