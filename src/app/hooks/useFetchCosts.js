import { useQuery } from "@tanstack/react-query";

// fetch from local storage
const fetchLocalStorage = () => {
  return JSON.parse(localStorage.getItem("costs") || "[]");
};

// Future fetch function to fetch from backend API

// const fetchCostsFromBackend = async () => {
//   const response = await fetch('https://your-backend-api.com/costs'); // Replace with your backend API endpoint
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

export const useFetchCosts = () => {
  return useQuery({ queryKey: ["costs"], queryFn: fetchLocalStorage });

  // To switch to backend, use:
  // return useQuery('costs', fetchCostsFromBackend);
};
