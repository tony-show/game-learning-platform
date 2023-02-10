import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('class')).toBe('class')
  })

  test('with additional class', () => {
    const expected = 'class class_2 class_3'
    expect(classNames('class', {}, ['class_2', 'class_3'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'class class_2 class_3 hover scrollable'
    expect(classNames(
      'class',
      {
        hover: true,
        scrollable: true,
      },
      ['class_2', 'class_3'],
    )).toBe(expected)
  })

  test('with mods false', () => {
    const expected = 'class class_2 class_3 hover'
    expect(classNames(
      'class',
      {
        hover: true,
        scrollable: false,
      },
      ['class_2', 'class_3'],
    )).toBe(expected)
  })

  test('with mods undefined', () => {
    const expected = 'class class_2 class_3 hover'
    expect(classNames(
      'class',
      {
        hover: true,
        scrollable: undefined,
      },
      ['class_2', 'class_3'],
    )).toBe(expected)
  })
})
