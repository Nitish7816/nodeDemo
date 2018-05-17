function Person(firstName,lastName,age) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    console.log(this.firstName,this.lastName,this.age)
}

Person.prototype={
    id:123,
    address:'sagarpur',
    info:function () {
        return 'id='+this.id + 'address='+ this.address;
    },
        name:function () {
        return this.firstName+" "+ this.lastName;
    }
}
Person.prototype.phone=987654;
Person.prototype.sal=1111;
Person.prototype.detail=function () {
    return this.phone+'==='+ this.sal;
}
var obj=new Person('nitish','kumar',25);


console.log(obj.name());


console.log(obj.id);

console.log(obj.detail());
console.log(obj.firstName);
console.log(obj.phone);
