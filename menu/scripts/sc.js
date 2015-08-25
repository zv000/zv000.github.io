$('#vegOn').click(function() {
    $fish = $('.fish').parent().parent().detach();

    $('.meat1,.meat2,.meat3,.meat4,.meat5,.meat6').after("<li class='tofu'>豆腐</li>");
    $meat7 = $('.meat7').detach();
    $meat8 = $('.meat8').detach();
    $meat9 = $('.meat9').detach();

    $('.meat1').replaceWith("<li class='porto1'>龍葵菇</li>");
    $('.meat2').replaceWith("<li class='porto2'>龍葵菇</li>");
    $('.meat3').replaceWith("<li class='porto3'>龍葵菇</li>");
    $('.meat4').replaceWith("<li class='porto4'>龍葵菇</li>");
    $('.meat5').replaceWith("<li class='porto5'>龍葵菇</li>");
    $('.meat6').replaceWith("<li class='porto6'>龍葵菇</li>");

    $('.porto1,.porto2,.porto3,.porto4,.porto5,.porto6').parent().parent().addClass('veg_leaf');
    $('.egg').parent().parent().addClass('veg_egg');

});


$('#restoreMe').click(function() {
    $('.porto1,.porto2,.porto3,.porto4,.porto5,.porto6').parent().parent().removeClass('veg_leaf');
    $('.egg').parent().parent().removeClass('veg_egg');
    $('.menu_entrees li').first().before($fish);
    
    $('.porto1').replaceWith("<li class='meat1'>牛肉塊</li>");
    $('.porto2').replaceWith("<li class='meat2'>義式臘腸</li>");
    $('.porto3').replaceWith("<li class='meat3'>蝦子</li>");
    $('.porto4').replaceWith("<li class='meat4'>牛絞肉</li>");
    $('.porto5').replaceWith("<li class='meat5'>豬里脊排</li>");
    $('.porto6').replaceWith("<li class='meat6'>里肌肉排</li>");

    $('.meat3').after($meat7);
    $('.meat7').after($meat8);
    $('.meat4').after($meat9);
    $('.tofu').remove();

});
