import axios from "axios";
import { useQuery } from "@tanstack/react-query"; 


const getAllRecipes = async () => {
    const { data } = await axios.get(
      "https://api-receitas-pi.vercel.app/receitas/todas"
    );
    return data;
  };

  export const useGetgetAllRecipes = () => {
    return useQuery({
      queryKey: ["get_all_recipes"],
      queryFn: () => getAllRecipes(),
    });
  };

