import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { useCosts } from "../Context/costContext";

enum PersonCategory {
  maria = "Maria",
  adam = "Adam",
}

enum CostCategory {
  default = "default",
  food = "food",
  entertainment = "entertainment",
  home = "home",
  clothing = "clothing",
  other = "other",
}

interface CostsInput {
  CostDescription: string;
  CostCategory: CostCategory;
  PersonCategory: PersonCategory;
  Cost: number;
}

const AddCostForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CostsInput>();

  const { addCost } = useCosts();

  const onSubmit: SubmitHandler<CostsInput> = (data) => {
    const newCost = {
      id: Date.now(),
      cost: data.Cost,
      CostDescription: data.CostDescription,
      CostCategory: data.CostCategory,
      PersonCategory: data.PersonCategory,
    };
    addCost(newCost);
    reset();
  };

  // const onSubmit: SubmitHandler<CostsInput> = (data) => {
  //   saveToLocalStorage(data);
  //   console.log(data);
  //   reset();
  // };

  // const saveToLocalStorage = (data: CostsInput) => {
  //   const storedData = localStorage.getItem("costs");
  //   const storedCosts = storedData ? JSON.parse(storedData) : [];
  //   storedCosts.push(data);
  //   localStorage.setItem("costs", JSON.stringify(storedCosts));
  // };

  // Toggle visibility of AddCostForm
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

  const Form = () => {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="cost-input-form m-auto flex w-2/3 flex-col gap-2 align-middle"
      >
        <h2 className="font-bold">Add a new cost</h2>
        <label className="font-bold">Who made this purchase?</label>
        <select
          className="mb-7"
          {...register("PersonCategory", {
            required: "Buyer is required.",
          })}
          defaultValue=""
        >
          <option value="" disabled>
            Name
          </option>
          <option value={PersonCategory.maria}>Maria</option>
          <option value={PersonCategory.adam}>Adam</option>
        </select>

        {errors.PersonCategory ? (
          <p style={{ color: "red" }}>Person is required</p>
        ) : null}

        <label className="font-bold">Choose a category</label>

        <select
          className="mb-7"
          {...register("CostCategory", {
            required: "Category is required.",
          })}
          defaultValue=""
        >
          <option value="" disabled>
            Cost category
          </option>
          <option value={CostCategory.food}>Food</option>
          <option value={CostCategory.entertainment}>Entertainment</option>
          <option value={CostCategory.home}>Home</option>
          <option value={CostCategory.clothing}>Clothing</option>
          <option value={CostCategory.other}>Other</option>
        </select>

        {errors.CostCategory ? (
          <p style={{ color: "red" }}>Category is required </p>
        ) : null}

        <label className="font-bold">Cost: (in sek)</label>
        <input
          type="number"
          {...register("Cost", { required: true, min: 1 })}
          placeholder="Cost"
          className="mb-7"
        />

        {errors.Cost ? (
          <p style={{ color: "red" }}>Cost is required (min 1) </p>
        ) : null}

        <label className="font-bold">Description</label>

        <input
          {...register("CostDescription", { max: 50 })}
          placeholder="Description of the cost"
          className="mb-7"
        />

        <PrimaryButton buttonText="Add new cost" />
      </form>
    );
  };

  return (
    <>
      <div className="form-container mb-10">
        {openButtonVisibility ? (
          <PrimaryButton buttonText="New cost" onClick={handleOpenCostForm} />
        ) : (
          <PrimaryButton
            buttonText="Close form"
            onClick={handleCloseCostForm}
          />
        )}

        {CostFormVisibility ? Form() : null}
      </div>
    </>
  );
};

export default AddCostForm;
