$('.slides').slick({
  centerMode: true,
  centerPadding: '230px',
  slidesToShow: 1,
  nextArrow:
  '<img class="slider-arrows slider-arrows__next" src="img/slider/right.svg">',
  prevArrow:
  '<img class="slider-arrows slider-arrows__prev" src="img/slider/left.svg">',
  responsive: [
    {
      breakpoint: 1921,
      settings: {
        centerPadding: '230px'
      }
    },
    {
      breakpoint: 1681,
      settings: {
        centerPadding: '160px'
      }
    },
    {
      breakpoint: 1601,
      settings: {
        centerPadding: '130px'
      }
    },
    {
      breakpoint: 1441,
      settings: {
        centerPadding: '80px'
      }
    },
    {
      breakpoint: 1361,
      settings: {
      centerMode: false
      }
    },
  ]
});


$('.developer-slides').slick({
  slidesToShow: 1,
  dots: true,
  dotsClass: "developer-dots",
});


$('.dynamic-cards').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  dotsClass: "dynamic-dots",
  variableWidth: true,
});