import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [cvData, setCvData] = useState({
    personalDetails: {},
    educationDetails: [],
    projects: [],
    skills: [],
  });

  return (
    <DataContext.Provider value={{ cvData, setCvData }}>
      {children}
    </DataContext.Provider>
  );
}
