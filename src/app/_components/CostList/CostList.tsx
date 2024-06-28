import CostItem from "./CostItem";
import {
  getCosts,
  CostInterface,
  CostsContext,
} from "@/app/Context/costContext";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";

export default function CostList() {
  const { data, isPending, isError } = getCosts();
  console.log(data);
  // rename "data" to displayedCosts
  const displayedCosts: CostInterface[] = data as CostInterface[];

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
  };

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error when fetching costs</p>;
  if (displayedCosts)
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
          {displayedCosts.map((cost, index) => (
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
