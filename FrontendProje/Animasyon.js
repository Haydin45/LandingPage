$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            if ($("#liste").css("height") == "100px") {
                var sayi = 100;
                var timer = setInterval(function () {
                    var yukseklik = sayi + "px";
                    if (sayi == 50) {
                        clearInterval(timer);
                    }

                    $("#liste").css("height", yukseklik);
                    $("#navbar").css("line-height", (sayi - 20) + "px");
                    sayi--;
                });
            }
        }

        else {
            if ($("#liste").css("height") == "50px") {
                var sayi = 50;
                var timer = setInterval(function () {
                    var yukseklik = sayi + "px";
                    if (sayi == 100) {
                        clearInterval(timer);
                    }

                    $("#liste").css("height", yukseklik);
                    $("#navbar").css("line-height", (sayi - 20) + "px");
                    sayi++;
                });
            }
        }

        tekliGoruntule(".tekli1", "#Hizmetlerimiz");
        tekliGoruntule(".tekli2", "#Portfoy");
        tekliGoruntule(".tekli3", "#Portfoy3");
        tekliGoruntule(".tekli4", "#Hakkimizda");
        tekliGoruntule(".tekli5", "#Musterilerimiz");
        tekliGoruntule(".tekli6", "#Iletisim");
        tekliGoruntule(".tekli7", "#Iletisim2");

        siraliGoruntule("#sirali", "#Hizmetlerimiz2", 6);

        yukariKaydir("#yukari", "#Hakkimizda", 2);
        yukariKaydir("#yukariKay", "#Iletisim", 3);

        animateValue("sayilar1", "#Portfoy4");
        animateValue("sayilar2", "#Portfoy4");
        animateValue("sayilar3", "#Portfoy4");
        animateValue("sayilar4", "#Portfoy4");

        dondur("#Hakkimizda4");
    });

    function tekliGoruntule(elementClass, parentId) {
        if ($(document).scrollTop() > $(parentId).position().top - 500 && $(elementClass).css("opacity") == "0") {
            $(elementClass).animate({ opacity: "1", marginLeft: "0" }, 1500);
        }
    };

    basla = true;
    function siraliGoruntule(elementId, parentId, adet) {
        if ($(document).scrollTop() > $(parentId).position().top - 500 && basla) {
            var sayi1 = 0;
            basla = false;

            var siralama = setInterval(function () {
                if (sayi1 == adet) {
                    clearInterval(siralama);
                }
                $(elementId + (sayi1 + 1)).animate({ opacity: "1", marginLeft: "0" }, 1500);
                sayi1++;
            }, 100);
        }
    };

    function yukariKaydir(elementId, parentId, adet) {
        if ($(document).scrollTop() > $(parentId).position().top - 500 && $(elementId + "1").css("opacity") == "0") {
            var sayi2 = 0;

            var yukari = setInterval(function () {
                if (sayi2 == adet) {
                    clearInterval(yukari);
                }
                $(elementId + (sayi2 + 1)).animate({ opacity: "1", marginTop: "0" }, 1500);
                sayi2++;
            }, 100);
        }
    };

    function say(gelenSayi, parentId, adet) {
        if ($(document).scrollTop() > $(parentId).position().top - 500) {
            var index = 0;

            var saydir = setInterval(function () {
                if (index == adet) {
                    clearInterval(saydir);
                }

                var saydirilan = Number($(gelenSayi + (index + 1)).text().replace(",", ""));
                for (var i = 0; i < saydirilan + 1; i++) {
                    document.getElementById(gelenSayi + (index + 1)).innerHTML = i;
                }
                index++;
            }, 100);
        }
    };

    var sayac = 0;
    function animateValue(id, parentId) {
        if ($(document).scrollTop() > $(parentId).position().top - 500 && sayac++ <= 3) {
            var obj = document.getElementById(id);
            var current = 0;
            var replaced = obj.innerHTML;

            replaced = replaced.replace(",", "");
            var last = parseInt(replaced);

            if (last >= 200) {
                current = last - 100 * replaced.length;
            }

            var say = setInterval(function () {
                if (current == last) {
                    clearInterval(say);
                }
                if (current > 999) {
                    var metin = String(current++);
                    obj.innerHTML = metin.substring(0, metin.length - 3) + "," + metin.substring(metin.length - 3);
                }
                else {
                    obj.innerHTML = current++;
                }
            }, 5);
        }
    };

    $("#referanslar > span > a").click(function () {
        var className = (this).innerHTML.toLowerCase().replace(" ", "");

        if (className != "all") {
            $("." + className).animate({
                width: "16.66%",
                height: "1%",
                opacity: "1"
            }, 400);

            $(".portfoyler:not(." + className + ")").animate({ width: "0", height: "0", opacity: "0" }, 400);

            $("#Portfoy").css("height", "900px");
        }
        else {
            $(".portfoyler").animate({
                width: "16.66%",
                height: "1%",
                opacity: "1"
            }, 400);

            $("#Portfoy").css("height", "1050px");
        }
    });

    $(".kutu").each(function () {
        $(this).mouseenter($(this).css("background-color", "white"));
    });

    $("#takim2, #takim3, #takim4").hide();
});