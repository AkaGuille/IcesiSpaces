import { useContext } from "react";
import { DataContext } from "../context/userData";

export function useResponse() {
    const {response, setResponse} = useContext(DataContext)

    return{
        response, setResponse
    }
}