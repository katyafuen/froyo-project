const flavors = prompt("Enter a list of comma-separated froyo flavors:");
console.log("User input:", flavors); // See what the user entered
const flavorsArray = flavors.split(",");

// Create an empty object to store ANY flavor counts
const chosenFlavors = {};

for (const flavor of flavorsArray) {
  const cleanedFlavor = flavor.trim().toLowerCase();
  console.log("Processing flavor:", cleanedFlavor); // See each flavor
  // If this flavor hasn't been seen before, initialize it to 0
  if (!(cleanedFlavor in chosenFlavors)) {
    chosenFlavors[cleanedFlavor] = 0;
  }
  // Increment the count for this flavor
  chosenFlavors[cleanedFlavor]++;
}

console.log("Order Summary:");
for (const [flavor, count] of Object.entries(chosenFlavors)) {
  console.log(`${flavor}: ${count}`);
}
