let iPhone12={
    model:"iPhone12",
    storage:120,
    color:["black","red","silver"],
    isWaterProof:true,
    ram:6,
    showStorage:()=>iPhone12.model+" has "+iPhone12.storage+" GB.",
                    promotion(){
                        return this.model+" has "+this.ram+" GB RAM and "+this.storage+"GB Storage and available in.";
                    }
}