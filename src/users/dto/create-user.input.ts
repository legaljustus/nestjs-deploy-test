import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'firstname of the user' })
  firstName: string;
  @Field(() => String, { description: 'lastname of the user' })
  lastName: string;
  @Field(() => String, { description: 'email of the user' })
  email: string;
}
