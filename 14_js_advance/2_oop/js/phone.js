class Phone{
    //property
    model="iPhone12";
    #_ram=6;
    static storage=120;
    //method
    get ram() {
        return this.#_ram;
    }

    set ram(value) {
        this.#_ram = value;
    }

    showModel(){
        return "MY PHONE MODEL IS "+this.model;
    }
}