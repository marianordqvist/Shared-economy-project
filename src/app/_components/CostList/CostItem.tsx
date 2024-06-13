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
      className={`${categoryColors[cost.CostCategory] || "bg-zinc-200"} ${listType ? "w-full" : "max-w-40"} pointer-events-none rounded-lg px-5 py-3`}
    >
      <p className="person inline-block font-bold">{cost.PersonCategory}</p>{" "}
      bought{" "}
      <p className="description inline-block font-bold">
        {cost.CostDescription}{" "}
      </p>{" "}
      for <div className="cost inline-block font-bold">{cost.Cost}</div>
      <p className="pt-2 text-xs italic">{cost.CostCategory}</p>
    </li>
  );
};

export default CostItem;
