import { createContext } from "react";

type CountyContextType = {
  county: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

export const CountyData = createContext<CountyContextType>({
  county: "",
  setCountry: () => {},
});