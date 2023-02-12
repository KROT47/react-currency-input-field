export function getNumberCompatibleValue(value: string, decimalSeparator: string): string {
  if (decimalSeparator === '') return value;
  return value.replace(decimalSeparator, '.');
}
