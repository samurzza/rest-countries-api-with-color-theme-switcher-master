import { createContext } from "react";

type SearchContextType = {
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
};

export const MoodContext = createContext<SearchContextType>(null!)
