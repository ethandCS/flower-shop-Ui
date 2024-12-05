export class Flower {
    constructor(type, receivedDate, numberOfStems) {
      this.type = type;
      this.receivedDate = receivedDate;
      this.numberOfStems = numberOfStems;
    }
  
    getFloType() {
      return this.type;
    }
  
    getReceivedDate() {
      return this.receivedDate;
    }
  
    countStem() {
      return this.numberOfStems;
    }
  }
  
  export class Inventory {
    constructor() {
      this.flowers = [];
    }
  
    trackInventory() {
      return this.flowers.map(
        (flower) =>
          `${flower.getFloType()} - ${flower.countStem()} stems (Received: ${flower.getReceivedDate()})`
      );
    }
  
    addInventory(flower) {
      this.flowers.push(flower);
    }
  
    deleteInventory(type) {
      this.flowers = this.flowers.filter((flower) => flower.getFloType() !== type);
    }
  
    getTotalCount() {
      return this.flowers.reduce((total, flower) => total + flower.countStem(), 0);
    }
  }
  