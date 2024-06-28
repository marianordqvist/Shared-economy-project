import {
  CostsContext,
  CostInterface,
  CostContextInterface,
} from "@/app/Context/costContext";
import PrimaryButton from "../PrimaryButton";
import { useContext } from "react";

// define types
interface CostItemInterface {
  cost: CostInterface;
  categoryColors: { [key: string]: string };
  deleteColors: { [key: string]: string };
  listType: boolean;
}

// display all of this months costs
const CostItem = ({
  cost,
  categoryColors,
  listType,
  deleteColors,
}: CostItemInterface) => {
  const { deleteCost } = useContext(CostsContext) as CostContextInterface;

  const handleDeleteCost = () => {
    deleteCost(cost.Id);
    console.log("clicked");
  };

  return (
    <>
      <li
        className={`${categoryColors[cost.CostCategory] || "bg-zinc-200"} ${listType ? "w-full" : "max-w-48"} flex flex-col place-content-between rounded-lg px-5 py-3`}
      >
        <div className="upper relative flex flex-row">
          <div className="text">
            <p className="person inline-block font-bold">
              {cost.PersonCategory}
            </p>{" "}
            bought{" "}
            <p className="description inline-block font-bold">
              {cost.CostDescription}{" "}
            </p>{" "}
            for <div className="cost inline-block font-bold">{cost.Sek}</div>
          </div>
          <PrimaryButton
            buttonText="x"
            className={` hover:text-black ${deleteColors[cost.CostCategory]} text-s absolute -right-6 -top-4 min-w-fit cursor-pointer rounded bg-transparent font-extrabold hover:bg-transparent`}
            onClick={handleDeleteCost}
          />
        </div>
        <div className="lower">
          <p className="pt-2 text-xs italic">{cost.CostCategory}</p>
        </div>
      </li>
    </>
  );
};

export default CostItem;
