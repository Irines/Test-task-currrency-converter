import { validateInput } from './validateInput';

describe('Validate input', () => {
    test('Корректное значение', () => {
        expect(validateInput(42, 41.15)).toBe(true)
    })

    test('Минимальное корректное значение', () => {
      expect(validateInput(37.035, 41.15)).toBe(true)
    })

    test('Максимальное корректное значение', () => {
      expect(validateInput(45.265, 41.15)).toBe(true)
    })

    test('Меньше корректного', () => {
      expect(validateInput(37.000, 41.15)).toBe(false)
    })

    test('Больше корректного', () => {
      expect(validateInput(45.5, 41.15)).toBe(false)
    })
})