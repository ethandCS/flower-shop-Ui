import { Flower, Inventory } from "./models/classes";

export const inventory = new Inventory();

// Prepopulate inventory
inventory.addInventory(new Flower("Roses", "2023-12-01", 20));
inventory.addInventory(new Flower("Tulips", "2023-12-02", 15));
inventory.addInventory(new Flower("Lilies", "2023-12-03", 10));
inventory.addInventory(new Flower("Daisies", "2023-12-04", 8)); // Low stock
inventory.addInventory(new Flower("Sunflowers", "2023-12-05", 5)); // Low stock
inventory.addInventory(new Flower("Orchids", "2023-12-06", 25)); // High stock

// Hardcoded product codes mapping
const productCodes = {
  "0001": "Roses",
  "0002": "Tulips",
  "0003": "Lilies",
  "0004": "Daisies",
  "0005": "Sunflowers",
  "0006": "Orchids",
};

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

// Get low-stock items
export const getLowStockItems = (threshold = 10) => {
  return inventory.flowers
    .filter((flower) => flower.countStem() < threshold)
    .map(
      (flower) =>
        `${flower.getFloType()} - ${flower.countStem()} stems (Received: ${flower.getReceivedDate()})`
    );
};

// Generate an order sheet for low-stock items
export const generateOrderSheet = (threshold = 10) => {
  const lowStockItems = getLowStockItems(threshold);
  if (lowStockItems.length === 0) {
    return "No low-stock items to order.";
  }
  return `Order Sheet:\n${lowStockItems.join("\n")}`;
};

// Process a manual order
export const processManualOrder = (productCode, quantity) => {
  // Validate product code
  const type = productCodes[productCode];
  if (!type) {
    return `Error: Product code "${productCode}" is not valid.`;
  }

  // Check if the flower exists in inventory
  const flower = inventory.flowers.find((flower) => flower.getFloType() === type);

  if (!flower) {
    return `Error: Flower type "${type}" not found in inventory.`;
  }

  // Simulate ordering
  return `Order placed for ${quantity} of ${type} (Product Code: ${productCode}).`;
};
