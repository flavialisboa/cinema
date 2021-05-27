function ativaScroolSuave(selector){
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr("href");

       $('html, body').animate({
           scrollTop: $(target).offset().top
       }, 1000)
    });
}

ativaScroolSuave("a[href*=filme1]");
ativaScroolSuave("a[href*=filme2]");
ativaScroolSuave("a[href*=filme3]");
ativaScroolSuave("a[href*=filme4]");
ativaScroolSuave("a[href*=filme5]");
ativaScroolSuave("a[href*=filme6]");
ativaScroolSuave("a[href*=filme7]");
ativaScroolSuave("a[href*=filme8]");
ativaScroolSuave("a[href*=filme9]");
ativaScroolSuave("a[href*=filme10]");
ativaScroolSuave("a[href*=filme11]");
ativaScroolSuave("a[href*=filme12]");
ativaScroolSuave("a[href*=logo]");
