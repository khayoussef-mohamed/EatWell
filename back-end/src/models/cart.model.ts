import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {Food} from "./food.model";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    foods: Food[]

}