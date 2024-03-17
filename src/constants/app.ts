export const CARD_NUMBER = {
  INPUT_COUNT: 4,
  MAX_LENGTH: 4,
  VISIBLE_COUNT: 2,
  LAST_INPUT_INDEX: 3
}

export const CARD_DATE = {
  INPUT_COUNT: 2,
  MAX_LENGTH: 2
}

export const CARD_PASSWORD = {
  INPUT_COUNT: 4,
  MAX_LENGTH: 1,
  LAST_INPUT_INDEX: 3
}

export const PAYMENT_STEPS = [
  'add card',
  'completed add card',
  'card list'
] as const
