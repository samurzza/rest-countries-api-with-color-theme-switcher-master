import { createContext } from "react";

type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const searshContext = createContext<SearchContextType>(null!)
