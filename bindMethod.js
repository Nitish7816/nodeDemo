var pokemon={
    first:'nitish',
    last:'kumar',
    getPokemon:function () {
        var fullName= this.first + " "+ this.last;
        return fullName;
    }
};
var pokemanName=function (snack,hobby) {
    console.log(this.getPokemon()+' you are selected');
    console.log(this.getPokemon() + ' loves ' + snack + ' and ' + hobby);
};
var logPokemon=pokemanName.bind(pokemon);
logPokemon('ds','algo');
