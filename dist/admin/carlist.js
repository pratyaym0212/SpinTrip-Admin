import { Box } from '@adminjs/design-system';
import axios from 'axios';

const CarsList = async () => {
  const carsBox = document.createElement('div');
  const carsList = document.createElement('ul');
  carsBox.appendChild(carsList);

  try {
    const response = await axios.get('/api/cars'); // Update with your API endpoint
    const cars = response.data;

    cars.forEach((car) => {
      const carItem = document.createElement('li');
      carItem.textContent = car.name;
      carsList.appendChild(carItem);
    });
  } catch (error) {
    console.error('Error fetching cars:', error.message);
  }

  const box = Box();
  box.appendChild(carsBox);

  return box;
};

export default CarsList;