import { createContext, useState } from "react";
export const DataContext = createContext();

export function DataProvider({children}) {
    const [response, setResponse] = useState({
        crowdedness: 1,
        noise: 1,
        lighting: 1,
        cold_temperature: 1,
        hot_temperature: 1,
        comfort: 1,
        services: 1,
        electrical_outlets: 1

    });

    return(
        <DataContext.Provider value={{
            response, setResponse
        }}>
            {children}
        </DataContext.Provider>
    )



}