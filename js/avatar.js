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
        playSound
        $('.opaque').attr('src','img/pose/Burka1.png');
        $('.opaque').attr('title','Burka1');

        $('#leftArrow img').attr('title','Burka3');
        $('#rightArrow img').attr('title','Burka2');

        change();
    }
});

$('.pic2').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/WarTorn1.png');
        $('.opaque').attr('title','WarTorn1');

        $('#leftArrow img').attr('title','WarTorn3');
        $('#rightArrow img').attr('title','WarTorn2');

        change();
    }
});

$('.pic3').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/Jasmine1.png');
        $('.opaque').attr('title','Jasmine1');

        $('#leftArrow img').attr('title','Jasmine3');
        $('#rightArrow img').attr('title','Jasmine2');

        change();
    }
});

$('.pic4').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/KimK1.png');
        $('.opaque').attr('title','KimK1');

        $('#leftArrow img').attr('title','KimK3');
        $('#rightArrow img').attr('title','KimK2');

        change();
    }
});

$('.pic5').on({'click': function(){ // code for pic 1
        $('.opaque').attr('src','img/pose/AmericanGirl1.png');
        $('.opaque').attr('title','AmericanGirl1');

        $('#leftArrow img').attr('title','AmericanGirl3');
        $('#rightArrow img').attr('title','AmericanGirl2');

        change();
    }
});

$('#reset').on({'click': function(){ // code for reset
        $('.opaque').attr('src','img/pose/UnderwearBase.png');
    }
});

$('#leftArrow').on({'click': function(){
        var imgTitle = document.getElementById("left").getAttribute('title');

        // alert(imgTitle);

        $('.opaque').attr("src", function() {
            return "img/pose/" + imgTitle + ".png";
        });

        $('#avatar').attr("title", function() {
            return imgTitle;
        });

        var avatarTitle = document.getElementById("avatar").getAttribute('title');

        switcher(avatarTitle);
    }
});

$('#rightArrow').on({'click': function(){
        var imgTitle = document.getElementById("right").getAttribute('title');

        // alert(imgTitle);

        $('.opaque').attr("src", function() {
            return "img/pose/" + imgTitle + ".png";
        });

        $('#avatar').attr("title", function() {
            return imgTitle;
        });

        var avatarTitle = document.getElementById("avatar").getAttribute('title');

        switcher(avatarTitle);
    }
});

function switcher(avatarTitle) {
    switch(avatarTitle) {
        case 'Burka1':
            document.getElementById("left").setAttribute('title', 'Burka3');
            document.getElementById("right").setAttribute('title', 'Burka2');
            break;
        case 'Burka2':
            document.getElementById("left").setAttribute('title', 'Burka1');
            document.getElementById("right").setAttribute('title', 'Burka3');
            break;
        case 'Burka3':
            document.getElementById("left").setAttribute('title', 'Burka2');
            document.getElementById("right").setAttribute('title', 'Burka1');
            break;
        case 'WarTorn1':
            document.getElementById("left").setAttribute('title', 'WarTorn3');
            document.getElementById("right").setAttribute('title', 'WarTorn2');
            break;
        case 'WarTorn2':
            document.getElementById("left").setAttribute('title', 'WarTorn1');
            document.getElementById("right").setAttribute('title', 'WarTorn3');
            break;
        case 'WarTorn3':
            document.getElementById("left").setAttribute('title', 'WarTorn2');
            document.getElementById("right").setAttribute('title', 'WarTorn1');
            break;
        case 'Jasmine1':
            document.getElementById("left").setAttribute('title', 'Jasmine3');
            document.getElementById("right").setAttribute('title', 'Jasmine2');
            break;
        case 'Jasmine2':
            document.getElementById("left").setAttribute('title', 'Jasmine1');
            document.getElementById("right").setAttribute('title', 'Jasmine3');
            break;
        case 'Jasmine3':
            document.getElementById("left").setAttribute('title', 'Jasmine2');
            document.getElementById("right").setAttribute('title', 'Jasmine1');
            break;
        case 'KimK1':
            document.getElementById("left").setAttribute('title', 'KimK3');
            document.getElementById("right").setAttribute('title', 'KimK2');
            break;
        case 'KimK2':
            document.getElementById("left").setAttribute('title', 'KimK1');
            document.getElementById("right").setAttribute('title', 'KimK3');
            break;
        case 'KimK3':
            document.getElementById("left").setAttribute('title', 'KimK2');
            document.getElementById("right").setAttribute('title', 'KimK1');
            break;
        case 'AmericanGirl1':
            document.getElementById("left").setAttribute('title', 'AmericanGirl3');
            document.getElementById("right").setAttribute('title', 'AmericanGirl2');
            break;
        case 'AmericanGirl2':
            document.getElementById("left").setAttribute('title', 'AmericanGirl1');
            document.getElementById("right").setAttribute('title', 'AmericanGirl3');
            break;
        case 'AmericanGirl3':
            document.getElementById("left").setAttribute('title', 'AmericanGirl2');
            document.getElementById("right").setAttribute('title', 'AmericanGirl1');
            break;
    }
}