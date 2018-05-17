var classA=function () {
    this.name='class A';
}
//var a=new classA();
classA.prototype.print=function () {
    console.log(this.name);
}
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};
var classB=function () {
    this.name='class B';
    this.age=21;
}

inheritsFrom(classB, classA);
classB.prototype.print1=function () {
    classA.prototype.print.call(this);
    console.log(this.age);
}
var classC=function () {
    this.name='class c';
    this.address='sagarpur';
}
inheritsFrom(classC,classB);
classC.prototype.print=function () {
    classB.prototype.print1.call(this);
    console.log(this.address);
}
var c=new classC();
c.print();
c.print1();
