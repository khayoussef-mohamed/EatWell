import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    type: string

    @Column()
    img: string

    @Column()
    name: string

    @Column()
    notation: number

    @Column()
    price: number
}