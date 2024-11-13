// Constructor function for Ferrari F70 Aperta Toy Car
function ToyCar(model, color, material, scale, brand, price, doors, dimensions, weight, wheels, features, packaging, releaseYear, ageRecommendation) {
    this.model = model;
    this.color = color;
    this.material = material;
    this.scale = scale;
    this.brand = brand;
    this.price = price;
    this.doors = doors;
    this.dimensions = dimensions;
    this.weight = weight;
    this.wheels = wheels;
    this.features = features;
    this.packaging = packaging;
    this.releaseYear = releaseYear;
    this.ageRecommendation = ageRecommendation;
  }
  
 // Create an instance for the Ferrari F70 Aperta Toy Car
  const ferrariF70 = new ToyCar(
    "Ferrari F70 Aperta",
    "Black",
    "Diecast",
    "1:24",
    "BBurago",
    17.99,
    2,
    { length: "7.5 inches", width: "3.5 inches", height: "2.5 inches" },
    0.4,
    4,
    ["Movable parts", "Openable doors"],
    "Standard cardboard box",
    2023,
    "8+"
  );
  
// Display car details on the page
  function displayCarDetails() {
    const carDetails = document.getElementById("carDetails");
    carDetails.innerHTML = `
      <p><strong>Model:</strong> ${ferrariF70.model}</p>
      <p><strong>Color:</strong> ${ferrariF70.color}</p>
      <p><strong>Material:</strong> ${ferrariF70.material}</p>
      <p><strong>Scale:</strong> ${ferrariF70.scale}</p>
      <p><strong>Brand:</strong> ${ferrariF70.brand}</p>
      <p><strong>Price:</strong> $${ferrariF70.price}</p>
      <p><strong>Doors:</strong> ${ferrariF70.doors}</p>
      <p><strong>Dimensions:</strong> Length: ${ferrariF70.dimensions.length}, Width: ${ferrariF70.dimensions.width}, Height: ${ferrariF70.dimensions.height}</p>
      <p><strong>Weight:</strong> ${ferrariF70.weight} kg</p>
      <p><strong>Wheels:</strong> ${ferrariF70.wheels}</p>
      <p><strong>Features:</strong> ${ferrariF70.features.join(", ")}</p>
      <p><strong>Packaging:</strong> ${ferrariF70.packaging}</p>
      <p><strong>Release Year:</strong> ${ferrariF70.releaseYear}</p>
      <p><strong>Age Recommendation:</strong> ${ferrariF70.ageRecommendation}</p>
    `;
  }
  
  // Function to toggle the car's color
  function toggleColor() {
    ferrariF70.color = ferrariF70.color === "Black" ? "Red" : "Black";
    document.getElementById("carModelImage").src = ferrariF70.color === "Black" 
      ? "./image/black.jpg" 
      : "./image/red.jpg";
    displayCarDetails();
  }
  
