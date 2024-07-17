export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  const updatedMAp = new Map();
  groceriesMap.forEach((qauntity, item) => {
    if (qauntity === 1) {
      updatedMAp.set(item, 100);
    } else {
      updatedMAp.set(item, qauntity);
    }
  });
  return updatedMAp;
}
