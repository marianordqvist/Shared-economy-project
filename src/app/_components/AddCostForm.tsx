import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { useCosts, CostInterface } from "../Context/costContext";

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

const AddCostForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CostInterface>();

  const { addCost } = useCosts();

  const onSubmit: SubmitHandler<CostInterface> = (data) => {
    const newCost = {
      Id: Date.now(),
      Sek: data.Sek,
      CostDescription: data.CostDescription,
      CostCategory: data.CostCategory,
      PersonCategory: data.PersonCategory,
    };
    addCost(newCost);
    reset();
  };

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
          {...register("Sek", { required: true, min: 1 })}
          placeholder="sek"
          className="mb-7"
        />

        {errors.Sek ? (
          <p style={{ color: "red" }}>Cost is required (min 1) </p>
        ) : null}

        <label className="font-bold">Description</label>

        <input
          {...register("CostDescription", { max: 50 })}
          placeholder="Description of the cost"
          className="mb-7"
        />

        <PrimaryButton
          buttonText="Add new cost"
          className="text-darkGreen hover:bg-darkGreen bg-green/100 hover:text-green/100"
        />
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
