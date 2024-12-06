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
  
    // Track inventory details
    trackInventory() {
      return this.flowers.map(
        (flower) =>
          `${flower.getFloType()} - ${flower.countStem()} stems (Received: ${flower.getReceivedDate()})`
      );
    }
  
    // Add flower to inventory
    addInventory(flower) {
      this.flowers.push(flower);
    }
  
    // Delete flower by type
    deleteInventory(type) {
      this.flowers = this.flowers.filter((flower) => flower.getFloType() !== type);
    }
  
    // Get total count of stems
    getTotalCount() {
      return this.flowers.reduce((total, flower) => total + flower.countStem(), 0);
    }
  
    // Get low stock items based on threshold
    getLowStock(threshold = 10) {
      return this.flowers
        .filter((flower) => flower.countStem() < threshold)
        .map((flower) => `${flower.getFloType()} - ${flower.countStem()} stems`);
    }
  }
  