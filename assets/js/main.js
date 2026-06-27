function sendToWhatsapp() {
    const phoneNumber = "9837765643"; 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    const textMessage = "Hello, I would like to submit my form details:%0a%0a"
        + "*Name:* " + encodeURIComponent(name) + "%0a"
        + "*Email:* " + encodeURIComponent(email) + "%0a"
        + "*Message:* " + encodeURIComponent(message);

    const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + textMessage;

    window.open(whatsappUrl, '_blank').focus();
}
function sendSubToWhatsapp() {
    const phoneNumber = "9837765643"; 

    const contactName = document.getElementById("Cname").value;
    const contactPhone = document.getElementById("Cphone").value;
    const ContactEmail = document.getElementById("Cemail").value;
    const contactSubject = document.getElementById("Csubject").value;
    const contactMessage = document.getElementById("Cmessage").value;

    if (!contactName || !contactPhone || !ContactEmail || !contactSubject || !contactMessage) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    const textSubjectMessage = "Hello, I would like to submit my form details:%0a%0a"
        + "*Name:* " + encodeURIComponent(contactName) + "%0a"
        + "*Phone:* " + encodeURIComponent(contactPhone) + "%0a"
        + "*Email:* " + encodeURIComponent(ContactEmail) + "%0a"
        + "*Subject:* " + encodeURIComponent(contactSubject) + "%0a"
        + "*Message:* " + encodeURIComponent(contactMessage);

    const whatsappSubUrl = "https://wa.me/" + phoneNumber + "?text=" + textSubjectMessage;

    window.open(whatsappSubUrl, '_blank').focus();
}



(function ($) {
  "use strict";

  var invJs = {
    m: function (e) {
      invJs.d();
      invJs.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      invJs.wowActive();
      invJs.stickyHeader();
      invJs.menuCurrentLink();
      invJs.tpm_mobileMenuActive();
      invJs.tmpcustomAnimation();
      invJs.popupMobileMenu();
      invJs.animationOnHover();
      invJs.odoMeter();
    },

    wowActive: function () {
      new WOW().init();
    },

    // sticky header activation
    menuCurrentLink: function () {
      var currentPage = location.pathname.split("/"),
        current = currentPage[currentPage.length - 1];
      $(".tmp-mainmenu li a").each(function () {
        var $this = $(this);
        if ($this.attr("href") === current) {
          $this.addClass("active");
          $this.parents(".has-dropdown").addClass("menu-item-open");
        }
      });
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }

       

      });

      if ($(window).width() < 1500) {
        $('.tmp-sticky-top-banner').css({
          top: 150
        });
      } else {
        $('.tmp-sticky-top-banner').css({
          top: 200
        });
      }
    },

    popupMobileMenu: function (e) {
      $(".humberger_menu_active").on("click", function (e) {
        $(".tmp-popup-mobile-menu").addClass("active");
      });

      $(".close-menu").on("click", function (e) {
        $(".tmp-popup-mobile-menu").removeClass("active");
        $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a")
          .siblings(".submenu")
          .removeClass("active")
          .slideUp("400");
        $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a").removeClass(
          "open"
        );
      });

      $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
          $(this).toggleClass("open");
        }
      );

      $(".tmp-popup-mobile-menu").on("click", function (e) {
        e.target === this &&
          $(".tmp-popup-mobile-menu").removeClass("active") &&
          $(".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a")
            .siblings(".submenu")
            .removeClass("active")
            .slideUp("400") &&
          $(
            ".tmp-popup-mobile-menu .tmp-mainmenu .has-dropdown > a"
          ).removeClass("open");
      });
    },

    tpm_mobileMenuActive: function (e) {
      $(".tmp_button_active").on("click", function (e) {
        e.preventDefault();
        $(".tmp_side_bar").addClass("tmp_side_bar_open");
        $("body").addClass("sidemenu-active");
        // invJs._html.css({
        //   overflow: "hidden",
        // });
      });

      $(".close_side_menu_active").on("click", function (e) {
        e.preventDefault();
        $(".tmp_side_bar").removeClass("tmp_side_bar_open");
        $("body").removeClass("sidemenu-active");
        invJs._html.css({
          overflow: "",
        });
      });
    },

    tmpcustomAnimation: function () {
      return {
        init: function () {
          this.animates();
        },
        animates: function () {
          var animates = $(".tmp-scroll-trigger");
          if (animates.length > 0) {
            animates.each(function () {
              $(this).on("animationend", function (e) {
                setTimeout(function () {
                  $(e.target).attr("animation-end", "");
                }, 1000);
              });
            });
          }
        },
      };
    },

    animationOnHover: function () {
      let cards = document.querySelectorAll('.tmponhover');
        cards.forEach((tmpOnHover) => {
          tmpOnHover.onmousemove = function (e) {
            let rect = tmpOnHover.getBoundingClientRect();
            let x = e.clientX - rect.left; // element X position
            let y = e.clientY - rect.top;  // element Y position
            tmpOnHover.style.setProperty('--x', `${x}px`);
            tmpOnHover.style.setProperty('--y', `${y}px`);
          };
      });
    },

    odoMeter: function () {

      $(document).ready(function () {
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
        }

        function triggerOdometer(element) {
          const $element = $(element);
          if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            $element.html(countNumber);
            $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
          }
        }

        function handleOdometer() {
          $('.odometer').each(function () {
            if (isInViewport(this)) {
              triggerOdometer(this);
            }
          });
        }

        // Check on page load
        handleOdometer();

        // Check on scroll
        $(window).on('scroll', function () {
          handleOdometer();
        });

      });


    },

  };

  invJs.m();
})(jQuery, window);


// Back To Top style here
function updateDimensions() {
  windowHeight = window.innerHeight;
  documentHeight = document.documentElement.scrollHeight - windowHeight;
}

// Initialize dimensions
updateDimensions();

// Add resize event listener to update dimensions
window.addEventListener('resize', updateDimensions);

document.addEventListener('DOMContentLoaded', function() {
  var box = document.querySelector(".scrollToTop");
  if (box) {
    var water = box.querySelector(".water");

    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var percent = Math.min(
        Math.floor((scrollPosition / documentHeight) * 100),
        100
      );
      water.style.transform = "translate(0," + (100 - percent) + "%)";

      if (scrollPosition >= 200) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });

    // Add click event listener to scroll to top
    box.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Preloader functionality
  function removePreloader() {
    document.body.classList.remove("preloader-active");
  }

  document.body.classList.add("preloader-active");
  window.addEventListener('load', function() {
    removePreloader();
  });
});


