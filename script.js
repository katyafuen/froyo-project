const flavors = prompt("Enter a list of comma-separated froyo flavors:");
console.log("User input:", flavors); // See what the user entered
const flavorsArray = flavors.split(",");

const chosenFlavors = {};

for (const flavor of flavorsArray) {
  const cleanedFlavor = flavor.trim().toLowerCase();
  console.log("Processing flavor:", cleanedFlavor); // See each flavor

  if (!(cleanedFlavor in chosenFlavors)) {
    chosenFlavors[cleanedFlavor] = 0;
  }
  chosenFlavors[cleanedFlavor]++;
}

console.log("Order Summary:");
for (const [flavor, count] of Object.entries(chosenFlavors)) {
  console.log(`${flavor}: ${count}`);
}
