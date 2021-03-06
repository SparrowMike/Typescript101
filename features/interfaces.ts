// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean
// };

interface Reportable {
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `Name: ${this.name}`
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar:40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
};

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken? ${vehicle.broken}`)
// }
// printVehicle(oldCivic)

const printSummary = (item: Reportable): void => {
  console.log(item.summary());  
};

printSummary(oldCivic);
printSummary(drink);