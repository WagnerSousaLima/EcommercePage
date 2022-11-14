function busca(search){
    switch (search) {
        case 'camiseta':
            alert('camiseta encontrada')
            break;

        case 'tenis':
            alert('tenis encontrado')
            break;
    
        default:
            alert('Produto não encontrado')
            break;
    }
}

document.getElementById('busca').onclick = function(){

    var valueInputBusca = document.getElementsByClassName("campo-busca")[0].value;

    busca(valueInputBusca)
}

function closePopup(){
    document.getElementsByClassName('popup')[0].style.display = 'none';
}

document.getElementById('close').onclick = function(){
    closePopup();
}