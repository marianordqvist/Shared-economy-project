"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Define types
export interface CostInterface {
  Id: number;
  Sek: number;
  CostDescription: string;
  CostCategory: string;
  PersonCategory: string;
}

export interface CostContextInterface {
  costs: CostInterface[];
  addCost: (newCost: CostInterface) => void;
  deleteCost: (Id: number) => void;
}

interface CostsProviderInterface {
  children: ReactNode;
}

// create context
export const CostsContext = createContext<CostContextInterface | undefined>(
  undefined,
);

// fetch from local storage
const fetchCosts = async (): Promise<CostInterface[]> => {
  const savedCosts = JSON.parse(
    localStorage.getItem("storedCosts") || "[]",
  ) as CostInterface[];
  return savedCosts;
};

// add a cost to local storage
const addCostToStorage = async (newCost: CostInterface) => {
  const savedCosts = await fetchCosts();
  savedCosts.push(newCost);
  localStorage.setItem("storedCosts", JSON.stringify(savedCosts));
};

// delete a cost from local storage
const deleteCostFromStorage = async (Id: number) => {
  const savedCosts = await fetchCosts();
  const updatedCosts = savedCosts.filter((cost) => cost.Id !== Id);
  localStorage.setItem("storedCosts", JSON.stringify(updatedCosts));
};

// create provider
export function CostsProvider({ children }: CostsProviderInterface) {
  const queryClient = useQueryClient();

  // fetch costs with react query
  const { data: costs } = useQuery({
    queryKey: ["storedCosts"],
    queryFn: fetchCosts,
  });

  // mutation to add a new cost
  const addCostMutation = useMutation({
    mutationFn: addCostToStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["storedCosts"] });
    },
  });

  // mutation to delete a cost
  const deleteCostMutation = useMutation({
    mutationFn: deleteCostFromStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["storedCosts"] });
    },
  });

  const addCost = (newCost: CostInterface) => {
    addCostMutation.mutate(newCost);
  };

  const deleteCost = (Id: number) => {
    deleteCostMutation.mutate(Id);
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
  return useQuery({ queryKey: ["storedCosts"], queryFn: fetchCosts });
};
