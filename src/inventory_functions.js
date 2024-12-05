import { Flower, Inventory } from "./models/classes";


export const inventory = new Inventory();

// Prepopulate inventory
inventory.addInventory(new Flower("Roses", "2023-12-01", 20));
inventory.addInventory(new Flower("Tulips", "2023-12-02", 15));
inventory.addInventory(new Flower("Lilies", "2023-12-03", 10));

// Helper to get inventory list
export const getInventoryList = () => {
  return inventory.trackInventory().join("\n");
};

// Add inventory
export const addInventoryItem = (type, receivedDate, numberOfStems) => {
  inventory.addInventory(new Flower(type, receivedDate, numberOfStems));
};

// Delete inventory
export const deleteInventoryItem = (type) => {
  inventory.deleteInventory(type);
};
