import React from "react";
import PageContainer from "./PageContainer";
import AddCostForm from "./AddCostForm";
import CostList from "./CostList/CostList";
import MemberStats from "./MemberStats/MemberStats";

const NewMonth = () => {
  return (
    <>
      <div className="monthly-page-container mx-auto my-0 max-w-[1000px] p-10">
        {/* COSTFORM SECTION */}
        <PageContainer content={<AddCostForm />} />

        {/* LIST OF PURCHASES SECTION */}
        <PageContainer content={<CostList />} />
        {/* MEMBERSTATS SECTION */}
        <PageContainer content={<MemberStats />} />
        {/* <DoublePieChart /> */}
      </div>
    </>
  );
};

export default NewMonth;
