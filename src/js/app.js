export default function sortArmyByHealth(armyArray) {
  const armyArraySorted = armyArray.slice();
  armyArraySorted.sort((a, b) => b.health - a.health);
  return armyArraySorted;
}
