import {Food} from "../models";
import foodJson from "./food.json"

export const foodMocks:
    ({ id: number; type: string; img: string; name: string; notation: number; price: number; "name:"?: undefined; }
        | { id: number; type: string; img: string; "name:": string; notation: number; price: number; name?: undefined; })[] = foodJson;