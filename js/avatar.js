function change() {
    var reset = $("#reset");
    var choose = $("#choose");
    var left = $("#leftArrow");
    var right = $("#rightArrow");
    var lText = $("#leftText");
    var rText = $("#rightText");

    if(!choose.hasClass("hidden")) {
        choose.addClass("hidden");
    }

    if(!reset.hasClass("opaque")) {
        reset.addClass("opaque");
    }

    if(!left.hasClass("opaque")) {
        left.addClass("opaque");
    }

    if(!right.hasClass("opaque")) {
        right.addClass("opaque");
    }

    if(!lText.hasClass("opaque")) {
        lText.addClass("opaque");
    }

    if(!rText.hasClass("opaque")) {
        rText.addClass("opaque");
    }
}

$('.pic1').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/Burka1.png');

        $('#leftArrow img').attr('title','');
        $('#rightArrow img').attr('title','img/pose/Burka2.png')

        change();
    }
});

$('.pic2').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/WarTorn1.png');

        change();
    }
});

$('.pic3').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/Jasmine1.png');

        change();
    }
});

$('.pic4').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/KimK1.png');

        change();
    }
});

$('.pic5').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/AmericanGirl1.png');

        change();
    }
});

$('#reset').on({'click': function(){ // code for reset
        $('.opaque').attr('src','img/pose/AmericanGirl1.png');
    }
});

$('#leftArrow').on({'click': function(){
        
    }
});

$('#rightArrow').on({'click': function(){
        var rightImg = $('#rightArrow img');

        $('.opaque').attr('src',function() {
            return rightImg.title;
        })
    }
});