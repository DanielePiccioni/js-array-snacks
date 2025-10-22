/* 
Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array.
*/

//creare un array composto da 10 aautomobili
// ogni oggetto automobile avrà alcune proprietà (marca, modello, alimentazione [benzina , diesel, gpl, elettrico, metano])
const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
]


//dividi le automobili in 3 array separati
const benzinaCars = [];
const dieselCars = [];
const otherCars = [];
//primo array solo le autro a benzina 
/* const benzinaCars = cars.filter(car => car.fuel === "benzina"); */

//nel secondo array solo le auto a diesel

//nel terzo array il resto delle auto

//con il for
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];

  if (car.fuel === 'benzina') {
    benzinaCars.push(car);
  } else if (car.fuel === 'diesel') {
    dieselCars.push(car);
  } else {
    otherCars.push(car);
  }
}

//stampare i risultati in console in modo separato
console.log(benzinaCars);
console.log(dieselCars);
console.log(otherCars);



