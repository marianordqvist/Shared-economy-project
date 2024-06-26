import CostItem from "./CostItem";
// import { useFetchCosts } from "../../hooks/useFetchCosts";
import { getCosts } from "@/app/Context/costContext";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";

interface CostInterface {
  id: number;
  CostCategory: string;
  CostDescription: string;
  PersonCategory: string;
  cost: number;
}

export default function CostList() {
  const { data, isPending, isError } = getCosts();
  const costs: CostInterface[] = data as CostInterface[];

  // each cost category will have a color
  const categoryColors = {
    food: "bg-pink",
    entertainment: "bg-hotpink",
    home: "bg-green",
    clothing: "bg-blue",
    other: "bg-orange",
  };

  // let user choose type of list
  const [listType, setListType] = useState<boolean>(false);
  const toggleList = () => {
    setListType(!listType);
    console.log(listType);
  };

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error when fetching costs</p>;
  if (data)
    return (
      <>
        <div className="list-container-top mb-5 flex h-14 justify-between">
          <h2>This months shared purchases:</h2>
          <div className="list-container-buttons flex gap-3">
            {/* choose list type */}
            <PrimaryButton
              buttonText={listType ? "show boxes" : "show list"}
              onClick={toggleList}
            />
            <PrimaryButton buttonText="sort" />
          </div>
        </div>
        <ul
          className={`${listType ? `w-full flex-col` : `flex-row flex-wrap justify-items-center`} flex gap-3`}
        >
          {costs.map((cost, index) => (
            <CostItem
              key={index}
              cost={cost}
              categoryColors={categoryColors}
              listType={listType}
            />
          ))}
        </ul>
      </>
    );
}
