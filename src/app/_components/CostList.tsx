// "use client";

import CostItem from "./CostItem";
import { useFetchCosts } from "../hooks/useFetchCosts";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

interface CostInterface {
  CostCategory: string;
  CostDescription: string;
  PersonCategory: string;
  Cost: number;
}

export default function CostList() {
  const { data, isLoading, error } = useFetchCosts();
  const costs: CostInterface[] = data as CostInterface[];

  // each cost category will have a color
  const categoryColors = {
    food: "bg-red-300",
    entertainment: "bg-yellow-200",
    home: "bg-green-200",
    clothing: "bg-emerald-500",
    other: "bg-cyan-300",
  };

  // let user choose type of list
  const [listType, setListType] = useState<boolean>(true);
  const toggleList = () => {
    setListType(!listType);
    console.log(listType);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error when fetching the costs</p>;
  if (data)
    return (
      <>
        <div className="list-container bg-zinc-200 p-5">
          <div className="list-container-top flex h-14 justify-between">
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
            className={`${listType ? `w-full flex-col` : `flex-row`} flex gap-3`}
          >
            {costs.map((cost, index) => (
              <CostItem
                key={index}
                cost={cost}
                categoryColors={categoryColors}
              />
            ))}
          </ul>
        </div>
      </>
    );
}
