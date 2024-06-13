import { useFetchCosts } from "../hooks/useFetchCosts";

interface CostDataTypes {
  PersonCategory: string;
  CostCategory: string;
  Cost: string;
  CostDescription: string;
}

// calculate total cost
export const calculateTotal = (data: CostDataTypes[]) => {
  let total = 0;
  const costsArray = data.map((item) => Number(item.Cost));
  costsArray.forEach((cost: number) => {
    total += cost;
  });
  return total;
};

// calculate total per person
export const calculatePersonTotal = (data: CostDataTypes[]) => {
  const personTotals: { [key: string]: number } = {};
  data.forEach((cost) => {
    if (!personTotals[cost.PersonCategory]) {
      personTotals[cost.PersonCategory] = 0;
    }
    personTotals[cost.PersonCategory] += Number(cost.Cost);
  });

  return Object.keys(personTotals).map((person) => ({
    person,
    totalCost: personTotals[person],
  }));
};
