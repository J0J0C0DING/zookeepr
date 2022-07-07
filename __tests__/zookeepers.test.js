const fs = require('fs');

const { filterByQuery, findById, validateZookeeper, createNewZookeeper } = require('../lib/zookeepers');

const { zookeepers } = require('../data/zookeepers.json');

jest.mock('fs');

test('Creates an zookeeper object', () => {
  const animal = createNewZookeeper(
    { name: 'Darlene', id: 'jhgdja3ng2' },

    zookeepers
  );

  expect(animal.name).toBe('Darlene');
  expect(animal.id).toBe('jhgdja3ng2');
});

test('Filters by query', () => {
  const startingZookeepers = [
    {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin',
    },
    {
      id: '3',
      name: 'Isabella',
      age: 67,
      favoriteAnimal: 'bear',
    },
  ];

  const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);

  expect(updatedZookeepers.length).toEqual(1);
});

test('Finds by id', () => {
  const startingZookeepers = [
    {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin',
    },
    {
      id: '3',
      name: 'Isabella',
      age: 67,
      favoriteAnimal: 'bear',
    },
  ];

  const result = findById('3', startingZookeepers);

  expect(result.name).toBe('Isabella');
});

test('Validates age', () => {
  const zookeeper = {
    id: '2',
    name: 'Raksha',
    age: 31,
    favoriteAnimal: 'penguin',
  };

  const invalidZookeeper = {
    id: '3',
    name: 'Isabella',
    age: '67',
    favoriteAnimal: 'bear',
  };

  const result = validateZookeeper(zookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
