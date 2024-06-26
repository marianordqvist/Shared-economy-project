interface CostItemProps {
  cost: {
    PersonCategory: string;
    CostDescription: string;
    cost: number;
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
      className={`${categoryColors[cost.CostCategory] || "bg-zinc-200"} ${listType ? "w-full" : "max-w-40"} pointer-events-none flex flex-col place-content-between rounded-lg px-5 py-3`}
    >
      <div className="upper">
        <p className="person inline-block font-bold">{cost.PersonCategory}</p>{" "}
        bought{" "}
        <p className="description inline-block font-bold">
          {cost.CostDescription}{" "}
        </p>{" "}
        for <div className="cost inline-block font-bold">{cost.cost}</div>
      </div>
      <div className="lower">
        <p className="pt-2 text-xs italic">{cost.CostCategory}</p>
      </div>
    </li>
  );
};

export default CostItem;
