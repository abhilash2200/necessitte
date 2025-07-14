
// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }


  $(function() {
    $('.scroll-down').click(function() {
      $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
      return false;
    });
  });



// header link
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href").trim();

      // Remove existing active class (if any)
      link.classList.remove("active");

      // Match current page
      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  });

   
 
    function toggleCard(btn) {
    const card = btn.closest('.service-card');
    const isActive = card.classList.contains('active');

    // Remove active from all
    document.querySelectorAll('.service-card').forEach(c => {
      c.classList.remove('active');
      const icon = c.querySelector('.icon-btn');
      if (icon) icon.textContent = '＋';
    });

    // Activate current card if not already active
    if (!isActive) {
      card.classList.add('active');
      btn.textContent = '−';
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
      const icon = card.querySelector('.icon-btn');
      if (icon) {
        icon.textContent = card.classList.contains('active') ? '−' : '＋';
      }
    });
  });


   window.onscroll = function() {
      scrollFunction()
   };

   function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("go-top");
      } else {
         document.getElementById("go-top");
      }
   }

   function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   }
 


 



