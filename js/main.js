$(function() {

    'use strict';

    $('.fakeLoader').fakeLoader({

        timeToHide: 1200, //Time in milliseconds for fakeLoader disappear

        zIndex: "999",//Default zIndex

        spinner: "spinner3",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

        bgColor: "#212121" //Hex, RGB or RGBA colors

    });

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // carousel resume
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10
    });

    // collapse show on resume
    $('.collapse-show').collapse();

    // porfolio filterizr
    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var vScroll = $(this).scrollTop();

        if( vScroll > 100) {
            $(".navbar").addClass("fix");
        }
        else {
            $(".navbar").removeClass("fix");
        }

    });

    // wrap code in IIFE to keep it from global scope
    let links = document.querySelectorAll('a'); // grab all <a> tags that trigger the image gallery
    let imageContainer = document.querySelector('.image-container'); // grab the div that will contain the images
    let imagesCollection = document.querySelectorAll('.image-container img');

  function displayImage(imgs, album) { // function to check the data-album attr and check against the button that was clicked
    imgs.forEach((image) => {
      if(image.dataset.album == album) {
        image.classList.remove('hide');
      } else {
        image.classList.add('hide');
      }
    });
  }


    links.forEach((link) => { // loop through <a> tags and create click event on each
        link.addEventListener('click', (e) => {
            e.preventDefault();

            switch (link.textContent) { // check name of link clicked
                case "Marketing & Branding": // link 1 text

                    displayImage(imagesCollection, 'Marketing & Branding'); //display images from album 1
                    document.querySelector('.one').style.display = '';

                    break;
                case "Social Media": // link 2 text
                      displayImage(imagesCollection, 'Social Media'); //display images from album 2
                      document.querySelector('.one').style.display = 'none';
                    break;
                case "album 3": // link 3 text

                    displayImage(imagesCollection, 'album 3'); //display images from album 3

                    break;

                case "All": // // link 4 text - display all images at once

                        imagesCollection.forEach((image) => {
                          image.classList.remove('none');
                          image.classList.remove('');
                          image.classList.remove('hide');

                   });

                    break;
            }

        });
    });


});
