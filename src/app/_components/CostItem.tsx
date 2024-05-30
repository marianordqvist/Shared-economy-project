interface CostItem {
  PersonCategory: string;
  CostDescription: string;
  Cost: number;
}

export default function CostItem() {
  const costs = JSON.parse(localStorage.getItem("costs") || "[]") as CostItem[];
  console.log(costs);

  const CostItems = costs
    .reverse()
    .map((cost, index) => (
      <li key={index}>
        {`${cost.PersonCategory}: ${cost.CostDescription} ${cost.Cost} SEK`}
      </li>
    ));

  return <div>{CostItems}</div>;
}
