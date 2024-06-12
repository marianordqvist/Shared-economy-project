interface CostItemProps {
  cost: {
    PersonCategory: string;
    CostDescription: string;
    Cost: number;
    CostCategory: string;
  };
  categoryColors: { [key: string]: string };
  listType: boolean;
}

// display all of this months costs
const CostItem: React.FC<CostItemProps> = ({
  cost,
  categoryColors,
  listType,
}) => {
  return (
    <li
      className={`${categoryColors[cost.CostCategory] || "bg-zinc-200"} ${listType ? "w-full" : "min-w-40 max-w-40"} rounded-lg px-5 py-3`}
    >
      <p className="person inline-block font-bold">{cost.PersonCategory}</p>{" "}
      bought{" "}
      <p className="description inline-block font-bold">
        {cost.CostDescription}{" "}
      </p>{" "}
      for <div className="cost inline-block font-bold">{cost.Cost}</div>
    </li>
  );
};

export default CostItem;
