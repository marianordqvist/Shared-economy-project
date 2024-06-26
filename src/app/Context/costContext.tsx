"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Define types
export interface CostInterface {
  id: number;
  cost: number;
  CostDescription: string;
  CostCategory: string;
  PersonCategory: string;
}

export interface CostContextProps {
  costs: CostInterface[];
  addCost: (newCost: CostInterface) => void;
  deleteCost: (id: number) => void;
}

interface CostsProviderProps {
  children: ReactNode;
}

// create context
export const CostsContext = createContext<CostContextProps | undefined>(
  undefined,
);

// fetch from local storage
const fetchCosts = async (): Promise<CostInterface[]> => {
  const savedCosts = JSON.parse(
    localStorage.getItem("costs") || "[]",
  ) as CostInterface[];
  return savedCosts;
};

// add a cost to local storage
const addCostToStorage = async (newCost: CostInterface) => {
  const savedCosts = await fetchCosts();
  savedCosts.push(newCost);
  localStorage.setItem("costs", JSON.stringify(savedCosts));
};

// delete a cost from local storage
const deleteCostFromStorage = async (id: number) => {
  const savedCosts = await fetchCosts();
  const updatedCosts = savedCosts.filter((cost) => cost.id !== id);
  localStorage.setItem("costs", JSON.stringify(updatedCosts));
};

// create provider
export function CostsProvider({ children }: CostsProviderProps) {
  const queryClient = useQueryClient();

  // fetch costs with react query
  const {
    data: costs,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["costs"],
    queryFn: fetchCosts,
  });

  // mutation to add a new cost
  const addCostMutation = useMutation({
    mutationFn: addCostToStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["costs"] });
    },
  });

  // mutation to delete a cost
  const deleteCostMutation = useMutation({
    mutationFn: deleteCostFromStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["costs"] });
    },
  });

  const addCost = (newCost: CostInterface) => {
    addCostMutation.mutate(newCost);
  };

  const deleteCost = (id: number) => {
    deleteCostMutation.mutate(id);
  };

  return (
    <CostsContext.Provider value={{ costs: costs || [], addCost, deleteCost }}>
      {children}
    </CostsContext.Provider>
  );
}

export const useCosts = () => {
  const context = useContext(CostsContext);
  if (!context) {
    throw new Error("useContext must be used within a costsProvider");
  }
  return context;
};

// fetch costs with react query
export const getCosts = () => {
  return useQuery({ queryKey: ["costs"], queryFn: fetchCosts });
};
