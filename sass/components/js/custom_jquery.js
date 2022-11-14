function busca(search) {
    switch (search) {
        case 'camiseta':
            console.log('camiseta encontrada')
            break;

        case 'tenis':
            console.log('tenis encontrado')
            break;

        default:
            console.log('Produto não encontrado')
            break;
    }
}

$('#busca').on('click', function () {

    var valueInputBusca = $(".campo-busca").val();

    busca(valueInputBusca)
});

function closePopup() {
    $('.popup').css('display', 'none');
}

$('#close').on('click', function () {
    closePopup();
})


$('header .busca form').on('submit', function (e) {
    e.preventDefault();
    console.log('formulário submetido')
})

$('.banner-principal').slick();

$('.mais-pedidos-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
});

$('.mini-produto').hover(function () {
    if ($(this).find('img').length > 1) {
        $(this).find('img').css('display', 'none');
        $(this).find('img.img-hover').css('display', 'block');
    }
}, function () {
    if ($(this).find('img').length > 1) {
        $(this).find('img').css('display', 'block');
        $(this).find('img.img-hover').css('display', 'none');
    }
})

$('.newsletter form').on('submit', function(e){
    e.preventDefault();
    var campoEmail = $('.newsletter input[type="text"]').val();

    if(campoEmail.indexOf('@') > -1 && campoEmail.indexOf('.') > -1){
        $(this).addClass('successForm');
        $(this).removeClass('erroForm');
    }else{
        $(this).addClass('erroForm');
        $(this).removeClass('successForm');
    }
})