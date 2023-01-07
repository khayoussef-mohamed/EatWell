import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Cart} from "./cart.model";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    status: string
    @Column()
    cart: Cart
}