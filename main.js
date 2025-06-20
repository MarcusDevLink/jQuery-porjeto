$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#button-reset').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class ="overlay-imagens">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem">
                    Ver imagem
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val('');
    });
});