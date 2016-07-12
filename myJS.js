$(document).ready(function () {
    
   

    // Button stuff
    $('#btn1').html('This is my button');
    $('#btn1').on('click', function () {
        $('#btn1').html('I was clicked');
        $("#panel1").hide(1000);
        $("#panel1").show(1000);
        $("#panel1").fadeOut(1000).delay(500).fadeIn(1000);
        $("#panel1").css({ color: "green" });
        $('#headline').slideToggle(900).slideToggle(900);

    });
    
    $('#btn2').on('mouseover', function() {
        $('#panel1').slideToggle(1000);
    });

    $('.buttonId').on('click', function () {
        var whichButton = $(this).attr('data-button'); // the key is in this syntex which identifies which of the keys under the same class was pressed
        alert(whichButton);
    });
    
    //Timers
    var counter = 0;
    var myTimer = window.setInterval(function() {
        counter +=1;
        $('#timer').html("tick " + counter);
        if (counter == 4) {
            clearInterval(myTimer);
            alert('Timer is done');
        }
    }, 1000);


});