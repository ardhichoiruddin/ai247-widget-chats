export function getLastKey(
  obj: Record<string | number, any>
): string | undefined {
  const keys = Object.keys(obj);
  return keys.length > 0 ? keys[keys.length - 1] : undefined;
}

export function getLastValue<T>(
  obj: Record<string | number, T>
): T | undefined {
  const keys = Object.keys(obj);
  if (keys.length === 0) return undefined;

  const lastKey = keys[keys.length - 1];
  return obj[lastKey];
}

export function getLastEntry<T>(
  obj: Record<string | number, T>
): [string, T] | undefined {
  const keys = Object.keys(obj);
  if (keys.length === 0) return undefined;

  const lastKey = keys[keys.length - 1];
  return [lastKey, obj[lastKey]];
}
