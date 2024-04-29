$('.dropdown-item').click(function(){
 let selected=$(this).attr('href')
    let sectionTop =$(selected).offset().top
    console.log(sectionTop)
    $('body,html').animate({
        scrollTop:sectionTop
    },500) 
})