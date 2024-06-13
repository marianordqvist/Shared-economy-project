"use client";
import PageContainer from "@/app/_components/PageContainer";
import AddCostForm from "../../_components/AddCostForm";
import CostList from "../../_components/CostList/CostList";
import MemberStats from "@/app/_components/MemberStats/MemberStats";
// import DoublePieChart from "../Components/DoublePieChart/DoublePieChart";

export default function StartPage() {
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
}
