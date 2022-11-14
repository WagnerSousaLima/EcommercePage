var MZ_next_level = {
    init: function () {
        MZ_next_level.slickLayoutBannerPrincipal();
        MZ_next_level.buscaPrincipalAction();
        MZ_next_level.closePopupAction();
        MZ_next_level.slickLayoutMaisPedidos();
        MZ_next_level.hoverProductImage();
        MZ_next_level.submitNewsletterForm();
    },

    slickLayoutBannerPrincipal: function () {
        $('.banner-principal').slick();
    },

    buscaPrincipal: function (search) {
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
    },

    buscaPrincipalAction: function () {
        $('header .busca form').on('submit', function (e) {
            e.preventDefault();
        })

        $('#busca').on('click', function () {

            var valueInputBusca = $(".campo-busca").val();

            MZ_next_level.buscaPrincipal(valueInputBusca)
        });
    },

    closePopup: function () {
        $('.popup').css('display', 'none');
    },

    closePopupAction: function () {
        $('#close').on('click', function () {
            MZ_next_level.closePopup();
        })
    },

    slickLayoutMaisPedidos: function () {
        $('.mais-pedidos-items').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1
        });
    },

    hoverProductImage: function () {
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
    },

    submitNewsletterForm: function () {
        $('.newsletter form').on('submit', function (e) {
            e.preventDefault();
            var campoEmail = $('.newsletter input[type="text"]').val();

            if (campoEmail.indexOf('@') > -1 && campoEmail.indexOf('.') > -1) {
                $(this).addClass('successForm');
                $(this).removeClass('erroForm');
            } else {
                $(this).addClass('erroForm');
                $(this).removeClass('successForm');
            }
        })
    }
}

MZ_next_level.init();