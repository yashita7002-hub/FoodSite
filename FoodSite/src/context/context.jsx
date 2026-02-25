import { createContext, useContext, useState } from "react";
import { food_items } from "../food";
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);

  return (
    <div>
    <SearchContext.Provider value={{ input, setInput,cate,setCate }}>
      {children}
    </SearchContext.Provider>
     </div>
  );
};

export const useSearch = () => {
  return (useContext(SearchContext));
};