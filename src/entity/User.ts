import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column('varchar', {
    length: 100,
  })
  firstName: string | undefined

  @Column('varchar', {
    length: 100,
  })
  lastName: string | undefined
}
