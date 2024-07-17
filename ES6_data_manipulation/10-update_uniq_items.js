export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceriesMap.forEach((qauntity, item) => {
    if (qauntity === 1) {
      groceriesMap.set(item, 100);
    } else {
      groceriesMap.set(item, qauntity);
    }
  });
  return groceriesMap;
}
