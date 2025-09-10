class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = null;
  }

  showDetails() {
    console.log(`
    Carro:
    Marca: ${this.brand}
    Modelo: ${this.model}
    Ano: ${this.year}
    Motor: ${this.engine}
    Cor: ${this.color}
    GPS: ${this.gps ? "Sim" : "Não"}
    `);
  }
}


// Builder
class CarBuilder {
  constructor() {
    this.car = new Car();
  }
  
  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setGps(gps) {
    this.car.gps = gps;
    return this;
  }

  build() {
    return this.car;
  }
}

// Director
class CarDirector {
  constructor(builder) {
    this.builder = builder;
  }

  buildEconomyCar() {
    return this.builder
      .setBrand("Fiat")
      .setModel("Mobi")
      .setYear(2022)
      .setEngine("1.0 Flex")
      .setColor("Branco")
      .setGps(false)
      .build();
  }

  buildSportCar() {
    return this.builder
      .setBrand("Audi")
      .setModel("R8")
      .setYear(2020)
      .setEngine("5.2 V10")
      .setColor("Preto")
      .setGps(true)
      .build();
  }

  buildSuv() {
    return this.builder
      .setBrand("Ferrari")
      .setModel("Purossangue")
      .setYear(2024)
      .setEngine("6.5 V12")
      .setColor("Vermelho")
      .setGps(true)
      .build();
  }
}

const builder = new CarBuilder();

const director = new CarDirector(builder);

const economyCar = director.buildEconomyCar();
economyCar.showDetails();

const sportCar = director.buildSportCar();
sportCar.showDetails();

const suvCar = director.buildSuv();
suvCar.showDetails();
