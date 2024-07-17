export default function createInt8TypedArray(lenght, position, value) {
  const buffer = new ArrayBuffer(lenght);
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);
  return dataView;
}
