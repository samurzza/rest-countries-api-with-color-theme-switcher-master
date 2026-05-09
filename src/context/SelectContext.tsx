import { createContext } from "react";

type selectContextType = {
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectContext = createContext<selectContextType>(null!)
