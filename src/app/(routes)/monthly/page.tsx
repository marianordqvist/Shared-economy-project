"use client";
import { useState } from "react";
import AddCostForm from "../../_components/AddCostForm";
import CostList from "../../_components/CostList/CostList";
import PrimaryButton from "@/app/_components/PrimaryButton";
// import DoublePieChart from "../Components/DoublePieChart/DoublePieChart";

export default function StartPage() {
  return (
    <>
      <div className="monthly-page-container mx-auto my-0 max-w-[1000px] p-10">
        {/* COSTFORM SECTION */}
        <AddCostForm />
        {/* VIEW OF PURCHASES */}
        <section className="">
          <CostList />
        </section>
        {/* <DoublePieChart /> */}
      </div>
    </>
  );
}
