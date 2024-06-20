import React from "react";
import { useFetchCosts } from "@/app/hooks/useFetchCosts";
import {
  calculateTotal,
  calculatePersonTotal,
  calculatePersonPercentage,
} from "../../Utils/CostUtils";
import { useState, useEffect } from "react";

const MemberStats = () => {
  const { data, isLoading, error } = useFetchCosts();
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalCostPerPerson, setTotalCostPerPerson] = useState<
    { person: string; totalCost: number }[]
  >([]);
  const [percentagePerPerson, setPercentagePerPerson] = useState<
    {
      person: string;
      percentage: number;
    }[]
  >([]);

  useEffect(() => {
    if (data) {
      const total = calculateTotal(data);
      const totalPerPerson = calculatePersonTotal(data);
      const percentagePerPerson = calculatePersonPercentage(
        total,
        totalPerPerson,
      );
      setTotalCost(total);
      setTotalCostPerPerson(totalPerPerson);
      setPercentagePerPerson(percentagePerPerson);
    }
  }, [data]);

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <div>
        <h2 className="mb-4">Member stats</h2>
        {/* total cost */}
        <div className="mb-10">
          <h3>Total cost: {totalCost} SEK</h3>
        </div>
        {/* total cost per person */}
        <div className="mb-10">
          <ul>
            {totalCostPerPerson.map((item) => (
              <li key={item.person} className="mb-3">
                <div className="inline-block font-bold">{item.person}</div>
                <br />
                pays{" "}
                <div className="inline-block font-bold">
                  {item.totalCost}
                </div>{" "}
                sek
              </li>
            ))}
          </ul>
        </div>
        {/* percentage per person */}
        <div className="mb-5">
          <ul>
            {percentagePerPerson.map((item) => (
              <li key={item.person} className="mb-3">
                <div className="inline-block font-bold">{item.person}</div>
                <br />
                pays{" "}
                <div className="inline-block font-bold">
                  {item.percentage} %
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MemberStats;
