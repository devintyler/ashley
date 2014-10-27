$('.pic1').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/Burka1.png');

        var reset = $("#reset");

        if(!reset.hasClass("opaque")) {
            reset.addClass("opaque");
        }
    }
});

$('.pic2').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/WarTorn1.png');

        var reset = $("#reset");

        if(!reset.hasClass("opaque")) {
            reset.addClass("opaque");
        }
    }
});

$('.pic3').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/Jasmine1.png');

        var reset = $("#reset");

        if(!reset.hasClass("opaque")) {
            reset.addClass("opaque");
        }
    }
});

$('.pic4').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/KimK1.png');

        var reset = $("#reset");

        if(!reset.hasClass("opaque")) {
            reset.addClass("opaque");
        }
    }
});

$('.pic5').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/AmericanGirl1.png');

        var reset = $("#reset");

        if(!reset.hasClass("opaque")) {
            reset.addClass("opaque");
        }
    }
});

$('#reset').on({'click': function(){ // code for reset
        $('.opaque').attr('src','img/pose/AmericanGirl1.png');
    }
})