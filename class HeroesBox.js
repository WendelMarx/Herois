
//  Lista do rank

const listRank = [
    { name: `Ferro` },
    { name: `Bronze` },
    { name: `Prata` },
    { name: `Ouro` },
    { name: `Platina` },
    { name: `Ascendente` },
    { name: `Imortal` },
    { name: `Radiante` }
]


//Função para verificar o rank


function requirementsRank(amountOfXp) {

    if (amountOfXp <= 1000) {
        return listRank[0];
    } else if (amountOfXp <= 2000) {
        return listRank[1];
    } else if (amountOfXp <= 5000) {
        return listRank[2];
    } else if (amountOfXp <= 7000) {
        return listRank[3];
    } else if (amountOfXp <= 8000) {
        return listRank[4];
    } else if (amountOfXp <= 9000) {
        return listRank[5];
    } else if (amountOfXp <= 10000) {
        return listRank[6];
    } else if (amountOfXp > 10000) {
        return listRank[7];
    }

}

// Construtor de herois 

class HeroesBox {
    constructor(name, xp = 0) {
        this.name = name;
        this.xp = xp;
        this.rank = requirementsRank(xp);




    } speakRank() {
        console.log(`O Herói de nome ${this.name} está no nível de ${this.rank.name}`);
    }

};

// criando um heroi

const hero1 = new HeroesBox("Lua", 7500);

console.log(hero1);
hero1.speakRank();
