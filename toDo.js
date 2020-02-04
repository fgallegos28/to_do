$(".txtb").on("keyup", function(e) {
    //13 means enter button
    if(e.keyCode == 13 && $(".txtb").val() != "")
    {
        //obtener el valor del div
        var task = $("<div class='task'></div>").text($(".txtb").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        var check = $("<i class='fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                $(".comp").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        task.append(del,check);
        $(".notcomp").append(task);//agregar al div "notcomp" 
        //to clear the input
        $(".txtb").val("");
    }
    //alert("ok");
})