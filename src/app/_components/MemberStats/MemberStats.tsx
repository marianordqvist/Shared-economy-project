import React from "react";
import { useFetchCosts } from "@/app/hooks/useFetchCosts";
import { calculateTotal, calculatePersonTotal } from "../../Utils/CostUtils";
import { useState, useEffect } from "react";

const MemberStats = () => {
  const { data, isLoading, error } = useFetchCosts();
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalCostPerPerson, setTotalCostPerPerson] = useState<
    { person: string; totalCost: number }[]
  >([]);

  useEffect(() => {
    if (data) {
      const total = calculateTotal(data);
      const totalPerPerson = calculatePersonTotal(data);
      setTotalCost(total);
      setTotalCostPerPerson(totalPerPerson);
    }
  }, [data]);

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>Error when loading calculations.</p>;

  return (
    <>
      <div>
        <h2>Total cost: {totalCost}</h2>
        <h2>Total cost per person:</h2>
        <ul>
          {totalCostPerPerson.map((item) => (
            <li key={item.person}>
              {item.person}: {item.totalCost}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MemberStats;
