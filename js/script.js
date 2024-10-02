/*##########################   PRELOADER  ########################### */
window.addEventListener("load", function() {
    // Wait for 3 seconds (3000 ms) before hiding the preloader
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block"; // Show content after preloader
    }, 2000); // 3 seconds delay
});
 /*##########################   HEADER  ########################### */
 document.addEventListener('DOMContentLoaded', function() {
    const topHeader = document.querySelector('.top-header');
    const mainHeader = document.querySelector('.main-header');
    const topHeaderHeight = topHeader.offsetHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition > windowHeight * 0.03) { 
            topHeader.classList.add('hidden');
            mainHeader.classList.add('sticky');
        } else {
            topHeader.classList.remove('hidden');
            mainHeader.classList.remove('sticky');
        }
    });
     // -----------         toggle-button          -----------
  document.getElementById('toggleButton').addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('visible');
  });

    // -----------         dropdown          -----------
  const pagesDropdown = document.querySelector('.dropdown');
  const dropdownContent = pagesDropdown.querySelector('.dropdown-content');
      pagesDropdown.addEventListener('click', function(event) {
      dropdownContent.classList.toggle('show');
  });
    // -----------        prevent content to close dropdown          -----------
  document.querySelectorAll('.dropdown-content li').forEach(item => {
      item.addEventListener('click', function(event) {
          event.stopPropagation();
      });
  });
    // -----------         dropdown2          -----------
  document.querySelectorAll('.dropdown2').forEach(dropdown => {
      dropdown.addEventListener('click', function(event) {
          const dropdownContent = this.querySelector('.dropdown-content-2');
          const parentDropdownContent = this.closest('.dropdown-content');
          
          if (dropdownContent.classList.contains('allow')) {
              dropdownContent.classList.remove('allow');
              parentDropdownContent.style.paddingBottom = '';
              dropdownContent.style.display = 'none'; // Hide the submenu
          } else {
            dropdownContent.classList.add('allow');
            const screenWidth = window.innerWidth;
            parentDropdownContent.style.paddingBottom = '43%';
            dropdownContent.style.display = 'block'; // Show the submenu
          }
          
      });
  });
});

// Get the modal and overlay elements
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const overlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

// Show the modal, overlay, and disable scrolling when the login button is clicked
loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

// Hide the modal, overlay, and enable scrolling when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

// Hide the modal, overlay, and enable scrolling when clicking outside of the modal
overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});


// Get the modal and overlay elements
const regBtn = document.getElementById('regBtn');
const modalreg = document.getElementById('loginModalReg');
const overlayreg = document.getElementById('modalOverlayReg');
const closeModalreg = document.getElementById('closeModalReg');

// Show the modal, overlay, and disable scrolling when the login button is clicked
regBtn.addEventListener('click', () => {
    modalreg.style.display = 'block';
    overlayreg.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

// Hide the modal, overlay, and enable scrolling when the close button is clicked
closeModalreg.addEventListener('click', () => {
    modalreg.style.display = 'none';
    overlayreg.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

// Hide the modal, overlay, and enable scrolling when clicking outside of the modal
overlayreg.addEventListener('click', () => {
    modalreg.style.display = 'none';
    overlayreg.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});


 /*##########################   SLIDER  ########################### */
 let slideIndex = 0;
 showSlides();
 
 function showSlides() {
     const slides = document.querySelectorAll('.slide');
     const dots = document.querySelectorAll('.dot');
 
     slides.forEach(slide => slide.style.display = 'none');
     dots.forEach(dot => dot.classList.remove('active'));
 
     slideIndex++;
     if (slideIndex > slides.length) slideIndex = 1;
 
     slides[slideIndex - 1].style.display = 'block';
     dots[slideIndex - 1].classList.add('active');
 
     setTimeout(showSlides, 7500); 
 }
 
 document.querySelector('.prev').addEventListener('click', () => {
     slideIndex -= 2;
     if (slideIndex < 0) slideIndex = slides.length - 1;
     showSlides();
 });
 
 document.querySelector('.next').addEventListener('click', () => {
     showSlides();
 });
 
 document.querySelectorAll('.dot').forEach((dot, index) => {
     dot.addEventListener('click', () => {
         slideIndex = index;
         showSlides();
     });
 });
 


/*##########################   FANCY-BOX  ########################### */
Fancybox.bind('[data-fancybox]', {
    Toolbar: false,
    closeButton: true,
  });


