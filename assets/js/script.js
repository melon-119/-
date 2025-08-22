$(function () {
  $(".spots__link").hover(function () {
    $(this).css("transition", "0.2s");
  });


  $('a[href^="#"]').click(function () {
    var section = $(this).attr("href");
    i = $("#" == section || "" == section ? "html" : section);
    top_ = i.offset().top - 40;
    return $("body,html").animate({ scrollTop: top_ }, 400, "swing");
  });

  $(".wrapper").hide().fadeIn(1000);

  var $allMsg = $(".top__title");
  var $wordList = $(".top__title").html().split("");
  $(".top__title").html("");
  $.each($wordList, function (idx, elem) {
    var newEL = $("<span/>").text(elem).css({ opacity: 0 });
    newEL.appendTo($allMsg);
    newEL.delay(idx * 100);
    newEL.animate({ opacity: 1 }, 1100);
  });



  function fadein_blocks(selector) {
    $(window).on('scroll', function () {
      $(selector).each(function (i) {
        var elemTop = $(this).offset().top;
        if ($(window).scrollTop() > elemTop - $(window).height() + 200) {
          
          if (!$(this).hasClass("is-fadein")) {
            $(this)
              .delay(200 * i)
              .queue(function () {
                $(this).addClass("is-fadein").dequeue();
              });
          }
        }
      });
    });

    $(window).trigger('scroll');
  }

  fadein_blocks(".about");
  fadein_blocks(".club");
  fadein_blocks(".club__block");
  fadein_blocks(".hobby");
  fadein_blocks(".hobby__block");
  fadein_blocks(".spots__link");
  fadein_blocks(".other");
});

document.addEventListener('DOMContentLoaded', function() {
    const popupBtns = document.querySelectorAll('[id^="popup-btn"]');
    popupBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const btnId = btn.id.replace('popup-btn', 'popup');
            const popup = document.getElementById(btnId);
            if (popup) {
                popup.classList.add('active');
                popup.addEventListener('animationend', function handler() {
                    popup.classList.remove('active');
                    popup.removeEventListener('animationend', handler);
                });
            }
            e.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        document.querySelectorAll('.popup.active').forEach(function(popup) {
            popup.classList.remove('active');
        });
    });
});
