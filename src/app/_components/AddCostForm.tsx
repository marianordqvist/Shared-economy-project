import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";

export default function AddCostForm() {
  const onSubmit: SubmitHandler<CostsInput> = (data) => {
    saveToLocalStorage(data);
    console.log(data);
    reset();
  };

  const saveToLocalStorage = (data: CostsInput) => {
    const storedData = localStorage.getItem("costs");
    const storedCosts = storedData ? JSON.parse(storedData) : [];
    storedCosts.push(data);
    localStorage.setItem("costs", JSON.stringify(storedCosts));
  };

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }: UseFormReturn<CostsInput> = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="cost-input-form flex w-1/4 flex-col gap-2 rounded-3xl bg-zinc-200 p-10"
      >
        <h2 className="font-bold">Add a new cost</h2>
        <label className="font-bold">Who made this purchase?</label>
        <select
          className="mb-7"
          {...register("PersonCategory", { required: "Buyer is required." })}
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
          {...register("CostCategory", { required: "Category is required." })}
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
    </>
  );
}
