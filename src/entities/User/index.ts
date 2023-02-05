import { UserSchema, User } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';

export { userActions, userReducer };
export type { User, UserSchema };
