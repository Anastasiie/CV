class Car {
  constructor(brand, model, year, mileage, maxSpeed, fuelConsumption) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.maxSpeed = maxSpeed;
      this.fuelConsumption = fuelConsumption;
  }

  compareWith(otherCar) {
      const comparison = {
          year: this.year < otherCar.year ? this : otherCar,
          mileage: this.mileage > otherCar.mileage ? this : otherCar,
          maxSpeed: this.maxSpeed < otherCar.maxSpeed ? this : otherCar,
          fuelConsumption: this.fuelConsumption < otherCar.fuelConsumption ? this : otherCar
      };

      return comparison;
  }
}

const car1 = new Car('Toyota', 'Camry', 2018, 50000, 220, 7.5);
const car2 = new Car('Honda', 'Civic', 2019, 40000, 210, 7.0);
const car3 = new Car('Ford', 'Focus', 2020, 30000, 200, 6.5);
const car4 = new Car('BMW', '3 Series', 2017, 60000, 240, 8.0);

const carElements = document.querySelectorAll('.car');
const comparisonResults = document.getElementById('comparison-results');
let selectedCars = [];

function compareCars(car1, car2) {
  const comparison = {
      year: car1.year > car2.year ? '<strong>новіша</strong>' : car1.year < car2.year ? '<strong>старіша</strong>' : '',
      mileage: car1.mileage < car2.mileage ? 'має <strong>менший</strong> пробіг' : car1.mileage > car2.mileage ? 'має <strong>більший пробіг</strong>' : '',
      maxSpeed: car1.maxSpeed > car2.maxSpeed ? 'має <strong>більшу максимальну швидкість</strong>' : car1.maxSpeed < car2.maxSpeed ? 'має <strong>меншу максимальну швидкість</strong>' : '',
      fuelConsumption: car1.fuelConsumption < car2.fuelConsumption ? 'витрачає <strong>менше пального на 100 км</strong>' : car1.fuelConsumption > car2.fuelConsumption ? 'витрачає <strong>більше пального на 100 км</strong>' : ''
  };

  return comparison;
}

carElements.forEach(carElement => {
  carElement.addEventListener('click', function() {
      if (selectedCars.length === 2) {
          carElements.forEach(el => el.classList.remove('selected'));
          selectedCars = [];
          comparisonResults.innerHTML = ''; // Очищаємо блок результатів
      }

      if (this.classList.contains('selected')) {
          this.classList.remove('selected');
          const index = selectedCars.indexOf(this);
          if (index !== -1) selectedCars.splice(index, 1);
      } else {
          if (selectedCars.length < 2) {
              this.classList.add('selected');
              selectedCars.push(this);
          }
      }

      if (selectedCars.length === 2) {
          const selectedCar1 = eval(selectedCars[0].dataset.car);
          const selectedCar2 = eval(selectedCars[1].dataset.car);
          const comparison = compareCars(selectedCar1, selectedCar2);

          if (comparison) {
              //let comparisonResultsHTML ;  '<h2>Результати порівняння: <br> ${carName1} та ${carName2}</h2><p>';
              let comparisonResultsHTML = `<h2>Результати порівняння: <br><h3>${selectedCar1.brand} ${selectedCar1.model} та ${selectedCar2.brand} ${selectedCar2.model}</h3></h2> `;

              let betterCar = '';

              // Виводимо результати порівняння з назвами машин
              for (const key in comparison) {
                  if (comparison[key]) {
                      const carName1 = comparison[key] === 'новіша' || comparison[key] === 'старіша' ? selectedCar1.brand + ' ' + selectedCar1.model : selectedCar1.brand + ' ' + selectedCar1.model;
                      const carName2 = comparison[key] === 'новіша' || comparison[key] === 'старіша' ? selectedCar2.brand + ' ' + selectedCar2.model : selectedCar2.brand + ' ' + selectedCar2.model;

                      const characteristicName = {
                          year: 'Рік випуску',
                          mileage: 'Пробіг',
                          maxSpeed: 'Максимальна швидкість',
                          fuelConsumption: 'Витрати пального на 100 км'
                      };

                      // comparisonResultsHTML += `${carName1} та ${carName2}<br>`;
                      comparisonResultsHTML += `${characteristicName[key]} : ${carName1} ${comparison[key]} ніж ${carName2}<br>`;
                      if (comparison[key] === 'новіша' || comparison[key] === 'має менший пробіг' || comparison[key] === 'має більшу максимальну швидкість' || comparison[key] === 'витрачає менше пального на 100 км') {
                          betterCar = carName1;
                      } else {
                          betterCar = carName2;
                      }
                  }
              }

              comparisonResultsHTML += `<br><strong>${betterCar}</strong> має більше кращих характеристик<br>`;
              comparisonResultsHTML += '</p>';
              comparisonResults.innerHTML = comparisonResultsHTML;
          } else {
              comparisonResults.innerHTML = '<p>Автомобілів для порівняння не знайдено.</p>';
          }
      }
  });
});
