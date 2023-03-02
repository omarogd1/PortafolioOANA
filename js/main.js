new fullpage('#fullpage', {
    anchors: ['1Page', '2Page', '3Page', '4Page', '5Page', '6Page', '7Page', '8Page'],
    autoScrolling: true,
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    slidesNavPosition: 'bottom'
});

$(".toggleBtn").on('click', function() {
    $(this).toggleClass('toggleBtnActive');
    $(".menu ul").slideToggle();
});