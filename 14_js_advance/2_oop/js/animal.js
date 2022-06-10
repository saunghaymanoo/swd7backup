class Animal{
    type="warm blooded";
    legs=4;
}
class Dog extends Animal{
    skill(){
        console.log("dog can run quickly.");
}
}
class  MaleLone extends Dog{
    name="Mg Male Lone";
    skill(){
        console.log(this.name+" can run fast.");
    }
}
class Cat extends Animal{

}