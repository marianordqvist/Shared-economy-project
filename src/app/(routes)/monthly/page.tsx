"use client";
import { useState } from "react";
import AddCostForm from "../../_components/AddCostForm";
import CostList from "../../_components/CostList";
import PrimaryButton from "@/app/_components/PrimaryButton";
// import DoublePieChart from "../Components/DoublePieChart/DoublePieChart";

export default function StartPage() {
  const [CostFormVisibility, setCostFormVisibility] = useState(false);
  const [openButtonVisibility, setOpenButtonVisibility] = useState(true);

  function handleOpenCostForm() {
    setCostFormVisibility(true);
    setOpenButtonVisibility(false);
  }

  function handleCloseCostForm() {
    setCostFormVisibility(false);
    setOpenButtonVisibility(true);
  }

  return (
    <>
      <div className="monthly-page-container p-14">
        {/* COSTFORM SECTION */}
        {openButtonVisibility ? (
          <PrimaryButton buttonText="New cost" onClick={handleOpenCostForm} />
        ) : (
          <PrimaryButton
            buttonText="Close form"
            onClick={handleCloseCostForm}
          />
        )}

        {CostFormVisibility ? <AddCostForm /> : null}

        {/* VIEW OF PURCHASES */}
        <section className="">
          <CostList />
        </section>
        {/* <DoublePieChart /> */}
      </div>
    </>
  );
}
