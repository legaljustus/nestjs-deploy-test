import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  userId: string;
  @Column()
  @Field(() => String, { description: 'firstname of the user' })
  firstName: string;
  @Column()
  @Field(() => String, { description: 'lastname of the user' })
  lastName: string;
  @Column()
  @Field(() => String, { description: 'email of the user' })
  email: string;
}
