$(function(){

  $('.faq__link-box').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('faq__link-box--active')) {
        $(this).removeClass('faq__link-box--active')
        $(this).children('.faq__text').slideUp()
    } else {
        $('.faq__link-box').removeClass('faq__link-box--active')
        $('.faq__text').slideUp()
        $(this).addClass('faq__link-box--active')
        $(this).children('.faq__text').slideDown()
    }
})
});