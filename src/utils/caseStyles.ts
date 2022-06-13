export const toKebabCase = (string: string) => {
  return string.toLowerCase().replace(/[\s;]+/g, '-');
};
