// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, User } = initSchema(schema);

export {
  Post,
  User
};