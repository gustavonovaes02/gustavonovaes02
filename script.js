document.getElementById('gerarNumero').addEventListener('click', function() {
    var animais = ['Avestruz', 'Águia', 'Burro', 'Borboleta', 'Cachorro', 'Cabra', 'Carneiro', 'Camelo', 'Cobra', 'Coelho', 'Cavalo', 'Elefante', 'Galo', 'Gato', 'Jacaré', 'Leão', 'Macaco', 'Porco', 'Pavão', 'Peru', 'Touro', 'Tigre', 'Urso', 'Veado', 'Vaca'];
    var dezena = Math.floor(Math.random() * 100);
    var animal = animais[Math.floor(dezena / 4)];
    document.getElementById('resultado').innerText = 'Seu número da sorte é: ' + dezena + ' - ' + animal;
});
