$(document).ready(function() {
    $('#btnChangeColor').click(function() {
        // Geração de novas cores aleatórias
        function randomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Alterar a cor de cada box com a transição definida no CSS
        $('.box').each(function() {
            var newColor = randomColor(); // Nova cor aleatória
            $(this).css('background-color', newColor); // Aplicar nova cor
        });
    });
});
