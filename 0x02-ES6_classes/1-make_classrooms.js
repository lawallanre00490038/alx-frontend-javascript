import ClassRoom from "./0-classroom.js";
const initializeRooms = () => {
  const first = new ClassRoom(19);
  const second = new ClassRoom(20);
  const third = new ClassRoom(34);
  const arr = [first, second, third];

  return (arr);
}
export default initializeRooms;
