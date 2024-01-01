const pokemonList = [
    { name: 'Bulbasaur', imageUrl: 'images/001.png' },
    { name: 'Ivysaur', imageUrl: 'images/002.png' },
    { name: 'Venusaur', imageUrl: 'images/003.png' },
    { name: 'Charmander', imageUrl: 'images/004.png' },
    { name: 'Charmeleon', imageUrl: 'images/005.png' },
    { name: 'Charizard', imageUrl: 'images/006.png' },
    { name: 'Squirtle', imageUrl: 'images/007.png' },
    { name: 'Wartortle', imageUrl: 'images/008.png' },
    { name: 'Blastoise', imageUrl: 'images/009.png' },
    { name: 'Caterpie', imageUrl: 'images/010.png' },
    { name: 'Metapod', imageUrl: 'images/011.png' },
    { name: 'Butterfree', imageUrl: 'images/012.png' },
    { name: 'Weedle', imageUrl: 'images/013.png' },
    { name: 'Kakuna', imageUrl: 'images/014.png' },
    { name: 'Beedrill', imageUrl: 'images/015.png' },
    { name: 'Pidgey', imageUrl: 'images/016.png' },
    { name: 'Pidgeotto', imageUrl: 'images/017.png' },
    { name: 'Pidgeot', imageUrl: 'images/018.png' },
    { name: 'Rattata', imageUrl: 'images/019.png' },
    { name: 'Raticate', imageUrl: 'images/020.png' },
    { name: 'Spearow', imageUrl: 'images/021.png' },
    { name: 'Fearow', imageUrl: 'images/022.png' },
    { name: 'Ekans', imageUrl: 'images/023.png' },
    { name: 'Arbok', imageUrl: 'images/024.png' },
    { name: 'Pikachu', imageUrl: 'images/025.png' },
    { name: 'Raichu', imageUrl: 'images/026.png' },
    { name: 'Sandshrew', imageUrl: 'images/027.png' },
    { name: 'Sandslash', imageUrl: 'images/028.png' },
    { name: 'Nidoran♀', imageUrl: 'images/029.png' },
    { name: 'Nidorina', imageUrl: 'images/030.png' },
    { name: 'Nidoqueen', imageUrl: 'images/031.png' },
    { name: 'Nidoran♂', imageUrl: 'images/032.png' },
    { name: 'Nidorino', imageUrl: 'images/033.png' },
    { name: 'Nidoking', imageUrl: 'images/034.png' },
    { name: 'Clefairy', imageUrl: 'images/035.png' },
    { name: 'Clefable', imageUrl: 'images/036.png' },
    { name: 'Vulpix', imageUrl: 'images/037.png' },
    { name: 'Ninetales', imageUrl: 'images/038.png' },
    { name: 'Jigglypuff', imageUrl: 'images/039.png' },
    { name: 'Wigglytuff', imageUrl: 'images/040.png' },
    { name: 'Zubat', imageUrl: 'images/041.png' },
    { name: 'Golbat', imageUrl: 'images/042.png' },
    { name: 'Oddish', imageUrl: 'images/043.png' },
    { name: 'Gloom', imageUrl: 'images/044.png' },
    { name: 'Vileplume', imageUrl: 'images/045.png' },
    { name: 'Paras', imageUrl: 'images/046.png' },
    { name: 'Parasect', imageUrl: 'images/047.png' },
    { name: 'Venonat', imageUrl: 'images/048.png' },
    { name: 'Venomoth', imageUrl: 'images/049.png' },
    { name: 'Diglett', imageUrl: 'images/050.png' },
    { name: 'Dugtrio', imageUrl: 'images/051.png' },
    { name: 'Meowth', imageUrl: 'images/052.png' },
    { name: 'Persian', imageUrl: 'images/053.png' },
    { name: 'Psyduck', imageUrl: 'images/054.png' },
    { name: 'Golduck', imageUrl: 'images/055.png' },
    { name: 'Mankey', imageUrl: 'images/056.png' },
    { name: 'Primeape', imageUrl: 'images/057.png' },
    { name: 'Growlithe', imageUrl: 'images/058.png' },
    { name: 'Arcanine', imageUrl: 'images/059.png' },
    { name: 'Poliwag', imageUrl: 'images/060.png' },
    { name: 'Poliwhirl', imageUrl: 'images/061.png' },
    { name: 'Poliwrath', imageUrl: 'images/062.png' },
    { name: 'Abra', imageUrl: 'images/063.png' },
    { name: 'Kadabra', imageUrl: 'images/064.png' },
    { name: 'Alakazam', imageUrl: 'images/065.png' },
    { name: 'Machop', imageUrl: 'images/066.png' },
    { name: 'Machoke', imageUrl: 'images/067.png' },
    { name: 'Machamp', imageUrl: 'images/068.png' },
    { name: 'Bellsprout', imageUrl: 'images/069.png' },
    { name: 'Weepinbell', imageUrl: 'images/070.png' },
    { name: 'Victreebel', imageUrl: 'images/071.png' },
    { name: 'Tentacool', imageUrl: 'images/072.png' },
    { name: 'Tentacruel', imageUrl: 'images/073.png' },
    { name: 'Geodude', imageUrl: 'images/074.png' },
    { name: 'Graveler', imageUrl: 'images/075.png' },
    { name: 'Golem', imageUrl: 'images/076.png' },
    { name: 'Ponyta', imageUrl: 'images/077.png' },
    { name: 'Rapidash', imageUrl: 'images/078.png' },
    { name: 'Slowpoke', imageUrl: 'images/079.png' },
    { name: 'Slowbro', imageUrl: 'images/080.png' },
    { name: 'Magnemite', imageUrl: 'images/081.png' },
    { name: 'Magneton', imageUrl: 'images/082.png' },
    { name: 'Farfetch’d', imageUrl: 'images/083.png' },
    { name: 'Doduo', imageUrl: 'images/084.png' },
    { name: 'Dodrio', imageUrl: 'images/085.png' },
    { name: 'Seel', imageUrl: 'images/086.png' },
    { name: 'Dewgong', imageUrl: 'images/087.png' },
    { name: 'Grimer', imageUrl: 'images/088.png' },
    { name: 'Muk', imageUrl: 'images/089.png' },
    { name: 'Shellder', imageUrl: 'images/090.png' },
    { name: 'Cloyster', imageUrl: 'images/091.png' },
    { name: 'Gastly', imageUrl: 'images/092.png' },
    { name: 'Haunter', imageUrl: 'images/093.png' },
    { name: 'Gengar', imageUrl: 'images/094.png' },
    { name: 'Onix', imageUrl: 'images/095.png' },
    { name: 'Drowzee', imageUrl: 'images/096.png' },
    { name: 'Hypno', imageUrl: 'images/097.png' },
    { name: 'Krabby', imageUrl: 'images/098.png' },
    { name: 'Kingler', imageUrl: 'images/099.png' },
    { name: 'Voltorb', imageUrl: 'images/100.png' },
    { name: 'Electrode', imageUrl: 'images/101.png' },
    { name: 'Exeggcute', imageUrl: 'images/102.png' },
    { name: 'Exeggutor', imageUrl: 'images/103.png' },
    { name: 'Cubone', imageUrl: 'images/104.png' },
    { name: 'Marowak', imageUrl: 'images/105.png' },
    { name: 'Hitmonlee', imageUrl: 'images/106.png' },
    { name: 'Hitmonchan', imageUrl: 'images/107.png' },
    { name: 'Lickitung', imageUrl: 'images/108.png' },
    { name: 'Koffing', imageUrl: 'images/109.png' },
    { name: 'Weezing', imageUrl: 'images/110.png' },
    { name: 'Rhyhorn', imageUrl: 'images/111.png' },
    { name: 'Rhydon', imageUrl: 'images/112.png' },
    { name: 'Chansey', imageUrl: 'images/113.png' },
    { name: 'Tangela', imageUrl: 'images/114.png' },
    { name: 'Kangaskhan', imageUrl: 'images/115.png' },
    { name: 'Horsea', imageUrl: 'images/116.png' },
    { name: 'Seadra', imageUrl: 'images/117.png' },
    { name: 'Goldeen', imageUrl: 'images/118.png' },
    { name: 'Seaking', imageUrl: 'images/119.png' },
    { name: 'Staryu', imageUrl: 'images/120.png' },
    { name: 'Starmie', imageUrl: 'images/121.png' },
    { name: 'Mr. Mime', imageUrl: 'images/122.png' },
    { name: 'Scyther', imageUrl: 'images/123.png' },
    { name: 'Jynx', imageUrl: 'images/124.png' },
    { name: 'Electabuzz', imageUrl: 'images/125.png' },
    { name: 'Magmar', imageUrl: 'images/126.png' },
    { name: 'Pinsir', imageUrl: 'images/127.png' },
    { name: 'Tauros', imageUrl: 'images/128.png' },
    { name: 'Magikarp', imageUrl: 'images/129.png' },
    { name: 'Gyarados', imageUrl: 'images/130.png' },
    { name: 'Lapras', imageUrl: 'images/131.png' },
    { name: 'Ditto', imageUrl: 'images/132.png' },
    { name: 'Eevee', imageUrl: 'images/133.png' },
    { name: 'Vaporeon', imageUrl: 'images/134.png' },
    { name: 'Jolteon', imageUrl: 'images/135.png' },
    { name: 'Flareon', imageUrl: 'images/136.png' },
    { name: 'Porygon', imageUrl: 'images/137.png' },
    { name: 'Omanyte', imageUrl: 'images/138.png' },
    { name: 'Omastar', imageUrl: 'images/139.png' },
    { name: 'Kabuto', imageUrl: 'images/140.png' },
    { name: 'Kabutops', imageUrl: 'images/141.png' },
    { name: 'Aerodactyl', imageUrl: 'images/142.png' },
    { name: 'Snorlax', imageUrl: 'images/143.png' },
    { name: 'Articuno', imageUrl: 'images/144.png' },
    { name: 'Zapdos', imageUrl: 'images/145.png' },
    { name: 'Moltres', imageUrl: 'images/146.png' },
    { name: 'Dratini', imageUrl: 'images/147.png' },
    { name: 'Dragonair', imageUrl: 'images/148.png' },
    { name: 'Dragonite', imageUrl: 'images/149.png' },
    { name: 'Mewtwo', imageUrl: 'images/150.png' },
    { name: 'Mew', imageUrl: 'images/151.png' },
    // Add more Pokemon entries as needed
];

function populatePokemonNames() {
    const datalist = document.getElementById('pokemonNames');
    pokemonList.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        datalist.appendChild(option);
    });
}

let numPokemon = pokemonList.length;
let currentPokemonIndex = Math.floor(Math.random()*numPokemon);
let score = 0;
let guessed = false;
let guessedCount = 0;

function displayPokemon() {
    currentPokemonIndex = Math.floor(Math.random()*pokemonList.length);
    const pokemonImage = document.getElementById('pokemon-image');

    pokemonImage.src = pokemonList[currentPokemonIndex].imageUrl;
    pokemonImage.style.filter = 'contrast(0%)';
}

function nextPokemon() {
    // Move to the next Pokémon
    guessedCount++;
    if (guessedCount < numPokemon) {
        pokemonList.splice(currentPokemonIndex, 1);
        displayPokemon();
    } else {
        alert(`Game Over! Your final score is ${score}`);
        // Optionally, reset the game or redirect to another page
    }
}

function submitClick(){
    if(guessed) nextPokemon();
    else checkGuess();
    document.getElementById('guess-input').value = '';
    guessed=!guessed;
}

function checkGuess() {
    const userGuess = document.getElementById('guess-input').value.toLowerCase();
    const correctAnswer = pokemonList[currentPokemonIndex].name.toLowerCase();

    if (userGuess === correctAnswer) {
        score++;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = `Wrong! The correct answer is ${correctAnswer}.`;
    }

    // Remove the filter to reveal the color
    const pokemonImage = document.getElementById('pokemon-image');
    pokemonImage.style.filter = 'none';

    document.getElementById('score').textContent = `Score: ${score}`;
}


// Initialize the game
populatePokemonNames();
displayPokemon();