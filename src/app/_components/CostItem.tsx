interface CostItemProps {
  cost: {
    PersonCategory: string;
    CostDescription: string;
    Cost: number;
    CostCategory: string;
  };
  categoryColors: { [key: string]: string };
}

// display all of this months costs
const CostItem: React.FC<CostItemProps> = ({ cost, categoryColors }) => {
  return (
    <li
      className={`${categoryColors[cost.CostCategory] || "bg-gray-200"} px-5 py-3`}
    >
      <p>
        {cost.PersonCategory} bought {cost.CostDescription} for {cost.Cost}
      </p>
    </li>
  );
};

export default CostItem;
