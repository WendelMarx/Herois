
//  Lista do rank

const ranks = [
    { name: `Ferro`, xp: 0, wins: 0 },
    { name: `Bronze`, xp: 1000, wins: 10 },
    { name: `Prata`, xp: 2000, wins: 20 },
    { name: `Ouro`, xp: 5000, wins: 50 },
    { name: `Platina`, xp: 7000, wins: 80 },
    { name: `Ascendente`, xp: 8000, wins: 90 },
    { name: `Imortal`, xp: 9000, wins: 100 },
    { name: `Radiante`, xp: 10000, wins: 200 }
];


//Função para verificar o rank do competitivo

function requirementsCompetitive(victories) {
    let currentRankCompetitive = ranks[0];
    for (let i = 0; i < ranks.length; i++) {
        if (victories >= ranks[i].wins) {
            currentRankCompetitive = ranks[i].name;
        }
    }
    return currentRankCompetitive;
};

//Função para verificar o rank

function getXpRank(xp) {
    let currentRank = ranks[0];
    for (let i = 0; i < ranks.length; i++) {
        if (xp >= ranks[i].xp) {
            currentRank = ranks[i].name;
        }
    }
    return currentRank;
};



// Construtor de herois 

class Heroes {
    constructor(name, xp = 0, victories = 0) {
        this.name = name;
        this.xp = xp;
        this.victories = victories;
        this.rank = getXpRank(xp);
        this.rankCompetitive = requirementsCompetitive(victories);
    }

    speakRank() {
        console.log(`O Herói de nome ${this.name} está no nível de ${this.rank}`);
    };
    speakRankCompetitive() {
        console.log(`O Herói tem ${this.victories} vitórias e está no nível competitivo: ${this.rankCompetitive}`);
    }


};

// criando um heroi

const hero1 = new Heroes("Lua", 7500, 30);

console.log(hero1); // Mostra o herois com todas as caracteristicas
hero1.speakRank(); // Fala o rank pelo xp 
hero1.speakRankCompetitive() // Fala o rank pela quantidade de vitorias

