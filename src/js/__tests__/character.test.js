import Character from '../character';

test('testing name is a string', () => {
  expect(() => new Character(123, 'Undead')).toThrow('NAME ERROR: name must be of type "String".');
});

test('testing name contains more than 2 symbols', () => {
  expect(() => new Character('D', 'Daemon')).toThrow('NAME ERROR: name must contain more than 2 symbol.');
});

test('testing name contains more than 10 symbols', () => {
    expect(() => new Character('MangledMary', 'Zombie')).toThrow('NAME ERROR: name must contain less than 10 symbol.');
  });

test('testing type matches is expected', () => {
  expect(() => new Character('Mary', 'Zombies')).toThrow('TYPE ERROR: type is not defined.');
});

