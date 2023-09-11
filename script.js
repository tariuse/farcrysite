let links = document.querySelectorAll('.link');
let target;
links.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        target = link.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
});
$('.karusel').slick({
  prevArrow: '<img src="images/karusel/heart.png">',
  nextArrow: '<img src="images/karusel/heart.png">',
});
