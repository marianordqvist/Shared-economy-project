import { CostInterface } from "../Context/costContext";

/**
 * The calculateTotal takes in data (an array of objects describing all costs this month).
 * It maps through all items in the array and creates a new array of the costs.
 * It then adds all of the costs, and returns a final total cost.
 *
 * @param {array} - Data (array of cost objects)
 * @returns {number} - the total calculated cost of the month.
 *
 */
// calculate total cost
export const calculateTotal = (data: CostInterface[]) => {
  let monthlyTotal = 0;
  const costsArray = data.map((item) => Number(item.Sek));
  costsArray.forEach((cost: number) => {
    monthlyTotal += cost;
  });
  return monthlyTotal;
};

// calculate total per person
export const calculatePersonTotal = (data: CostInterface[]) => {
  const personTotalArray: { [key: string]: number } = {};

  data.forEach((costEntry) => {
    const person = costEntry.PersonCategory;
    const costAmount = Number(costEntry.Sek);

    if (!personTotalArray[person]) {
      personTotalArray[person] = 0;
    }

    personTotalArray[person] += Number(costAmount);
  });

  return Object.keys(personTotalArray).map((person) => ({
    person,
    totalCost: personTotalArray[person],
  }));
};

// calculate percentage per person
export const calculatePersonPercentage = (
  monthlyTotal: number,
  personTotalArray: { person: string; totalCost: number }[],
) => {
  return personTotalArray.map((personTotal) => ({
    person: personTotal.person,
    percentage: Math.round((personTotal.totalCost / monthlyTotal) * 100),
  }));
};
