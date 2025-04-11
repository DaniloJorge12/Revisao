//Declarando variaveis dos pokemons
let Pikachu = 80
let Charmander = 80

//Controle do jogo
let rodada = 1

//Enquanto estiverem vivos, o game continua
while (Pikachu > 0 && Charmander > 0){
    console.log (`🔁 Rodada ${rodada}`)

    //Gerar golpes aleatorios
    const ataquePikachu = Math.floor(Math.random() * 26)
    const ataqueCharmander = Math.floor(Math.random() * 19)

    //Aplicar os golpes
    Pikachu -= ataqueCharmander
    Charmander -= ataquePikachu

    // Exibir info de ataque
    console.log(`⚡ Pikachu usou Choque do Trovão e causou ${ataquePikachu} de dano!`);
    console.log(`🔥 Charmander usou Chama Ardente e causou ${ataqueCharmander} de dano!`);

    // Mostrar a energia restante
    console.log(`❤️ Energia do Pikachu: ${Pikachu > 0 ? Pikachu : 0}`);
    console.log(`🔥 Energia do Charmander: ${Charmander > 0 ? Charmander: 0}`);
    console.log("-----------------------------");

    // Ir para próxima rodada
    rodada++;
}

//Calcular os resultados
if (Pikachu <= 0 && Charmander <=0){
    console.log("🤝 Empate! Ambos cairam na luta!")
}else if (Pikachu > Charmander){
    console.log("🏆 Pikachu venceu e ganhou uma caixa de bombom!")
}else {
    console.log("🏆 Charmander venceu a bataha e ganhou um bis!")
}
