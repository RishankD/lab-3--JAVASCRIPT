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
  
