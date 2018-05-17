var person={
    first:'ramesh',
    last:'suresh',
    getPerson:function () {
        var fullName=this.first+ " "+ this.last;
        return fullName;
    }
};
var personName= function (snake,hobby) {
    console.log(this.getPerson()+' loves '+snake+' and '+hobby)
};
personName.call(person,'ds','algo');
personName.apply(person,['java','algo'])
