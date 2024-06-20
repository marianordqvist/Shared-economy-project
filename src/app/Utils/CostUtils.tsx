interface CostDataTypes {
  PersonCategory: string;
  CostCategory: string;
  Cost: number;
  CostDescription: string;
}

// calculate total cost
export const calculateTotal = (data: CostDataTypes[]) => {
  let monthlyTotal = 0;
  const costsArray = data.map((item) => Number(item.Cost));
  costsArray.forEach((cost: number) => {
    monthlyTotal += cost;
  });
  return monthlyTotal;
};

// calculate total per person
export const calculatePersonTotal = (data: CostDataTypes[]) => {
  const personTotalArray: { [key: string]: number } = {};

  data.forEach((costEntry) => {
    const person = costEntry.PersonCategory;
    const costAmount = Number(costEntry.Cost);

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
