$(document).ready(function(){
    $("#home a").click(function(){
        $("section").removeClass("show");
        var target=$(this).attr("href");
        $(target).addClass("show");
    });

    $(".type-effect").typed({
        strings: ["Autocad", "Revit Architecture"],
        typeSpeed: 100,
        backspeed: 50,
        loop:true
    });
    
    $(".type-effect1").typed({
        strings: ["Civil Engineer"],
    });
    $(".type-effect2").typed({
        strings: ["A35/2 IRI Colony (Landmark Ganeshpur Pull), Roorkee, Distt, Haridwar, Uttarakhand - 247667"],
    });
}); 
  