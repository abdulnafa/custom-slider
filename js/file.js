$(document).ready(function () {
    var first = 0;
    var zindex = 1;
    var noElement = 0;
    var dots = 0;



    $(".main .inner").first().addClass("active");




    $(".main .inner").each(function (index, elem) {
        $(".dots").append(`<div class="dot"></div>`);

        noElement++;
    });
    $(".dots .dot").first().addClass("active");

    var length = $(".dot").length;

    $(".next").on("click", function () {
        var currentIndex = $(".dot.active").index();

        if (currentIndex == length - 1) {
            $(".dots .dot").removeClass("active").first().addClass("active");
            $(".main .inner").removeClass("active").first().addClass("active");
        } else {
            var nextElem = $(".inner.active").next();
            $(".dots .dot.active")
                .removeClass("active")
                .next()
                .addClass("active");

            $(".main .inner.active")
                .removeClass("active")
                .next()
                .addClass("active");
        }
    });

    $(".previous").on("click", function () {
        var currentIndex = $(".dot.active").index();
        console.log(currentIndex);
        if (currentIndex == 0) {
            $(".dots .dot").removeClass("active").last().addClass("active");
            $(".main .inner").removeClass("active").last().addClass("active");
        } else {
            $(".dot.active").removeClass("active").prev().addClass("active");
            $(".main .inner.active")
                .removeClass("active")
                .prev()
                .addClass("active");
        }
    });

    $(".dots .dot").on("click", function (e) {
        $(".dots .dot").removeClass("active");
        var dotIndex = $(this).addClass("active").index();

        $(".main .inner").removeClass("active");
        $(".main .inner").each(function (index, elem) {
            if (index == dotIndex) {
                $(elem).addClass("active");
            }
        });
    });

    // timeout 
    setTimeout(myGreeting, 3000);

    function myGreeting() {
        var ci = $(".main .inner.active").index();
        console.log(ci);
        console.log(noElement);
        if (ci == noElement - 1) {

            $(".main .inner").removeClass("active");
            $(".dot_main .dots .dot").removeClass("active");
            $(".main .inner").first().addClass("active");
            $(".dot_main .dots .dot").first().addClass("active");
        } else {

            $(".main .inner.active").removeClass("active").next().addClass("active");
            $(".dot_main .dots .dot.active").removeClass("active").next().addClass("active");

        }



        setTimeout(myGreeting, 3000);
    }
    // timeoutend 

});