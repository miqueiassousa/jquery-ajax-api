$(document).ready(function() {

    // Mostrar conteúdo
    $('#mostrar').click(function() {
        $('#conteudo').fadeIn();
    });

    // Esconder conteúdo
    $('#esconder').click(function() {
        $('#conteudo').fadeOut();
    });

    // Mudar cor do título
    $('#mudar-cor').click(function() {
        $('h1').css('color', 'purple');
    });

    // Adicionar elemento ao DOM
    $('#adicionar-elemento').click(function() {
        $('#conteudo').append('<p>Elemento adicional foi adicionado ao DOM!</p>');
    });

    // Aplicar animação de zoom
    $('#anima-zoom').click(function() {
        $('#conteudo').toggleClass('zoom-in');
    });

    // Carregar dados da API (contato com nome, telefone, endereço e foto)
    $('#carregar').click(function() {
        $('#dados-api').empty(); // Limpar conteúdo anterior

        $.get('https://randomuser.me/api/', function(data) {
            const user = data.results[0]; // Pega o primeiro usuário da resposta

            // Exibe os dados do usuário: nome, telefone, endereço e foto
            $('#dados-api').append(`
                <div class="contact-card">
                    <img src="${user.picture.large}" alt="Foto do usuário" class="user-photo">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p><strong>Telefone:</strong> ${user.phone}</p>
                    <p><strong>Endereço:</strong> ${user.location.street.name}, ${user.location.city} - ${user.location.state}, ${user.location.country}</p>
                </div>
            `);
        });
    });

    // Limpar conteúdo da API
    $('#limpar').click(function() {
        $('#dados-api').empty(); // Limpa apenas a área onde os dados da API foram carregados
    });

    // Ajustar o tamanho da fonte
    $('#ajustar-fonte').click(function() {
        let tamanhoFonte = prompt('Digite o tamanho da fonte (em px):');
        if (tamanhoFonte) {
            $('p').css('font-size', tamanhoFonte + 'px');
        }
    });

    // Alternar modo escuro
    $('#modo-escuro').click(function() {
        $('body').toggleClass('dark-mode');
        $('.container').toggleClass('dark-mode');
        $('button').toggleClass('dark-mode');
    });

    // Deslizar conteúdo
    $('#deslizar').click(function() {
        $('#conteudo').slideToggle();
    });

    // Animação no título
    $('#animar-titulo').click(function() {
        $('h1').animate({
            fontSize: '3rem',
            color: '#FF6347'
        }, 1000, function() {
            // Após a animação, retorna ao tamanho original
            $(this).animate({
                fontSize: '2rem',
                color: '#00796b'
            }, 1000);
        });
    });
    // Exemplo de AJAX (nova funcionalidade)
    $("#ajax-exemplo").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/1",
            method: "GET",
            success: function (data) {
                var userData = `
                    <h4>${data.name}</h4>
                    <p>Email: ${data.email}</p>
                    <p>Telefone: ${data.phone}</p>
                `;
                $("#dados-api").html(userData);
            },
            error: function () {
                alert("Erro ao carregar dados da API!");
            }
        });
    });

});
