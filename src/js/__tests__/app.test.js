import sortArmyByHealth from '../app';

test('тест сортировки по возрастанию здоровья персонажа при несортированном исходном массиве', () => {
  const myArmyArr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при исходном массиве с одинаковым здоровьем', () => {
  const myArmyArr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при несортированном исходном массиве с повторениями персонажей', () => {
  const myArmyArr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 5 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'мечник', health: 5 },
  ];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при сортированном по возрастанию исходном массиве', () => {
  const myArmyArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при сортированном по убыванию исходном массиве', () => {
  const myArmyArr = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при сортированном по возрастанию исходном массиве одинаковых персонажей', () => {
  const myArmyArr = [
    { name: 'маг', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'маг', health: 10 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'маг', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при сортированном по убыванию исходном массиве одинаковых персонажей', () => {
  const myArmyArr = [
    { name: 'маг', health: 10 },
    { name: 'маг', health: 80 },
    { name: 'маг', health: 100 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'маг', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при пустом исходном массиве', () => {
  const myArmyArr = [];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [];
  expect(received).toEqual(expected);
});

test('тест сортировки по возрастанию здоровья персонажа при одномерном исходном массиве', () => {
  const myArmyArr = [
    { name: 'мечник', health: 10 },
  ];
  const received = sortArmyByHealth(myArmyArr);
  const expected = [
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});
