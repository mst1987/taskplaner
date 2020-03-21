export interface UserData {
  username: string;
  email: string;
  userRight: UserRight;
}

export interface UserRight {
  isAdmin: boolean;
  User: RightTypes;
  Guild: RightTypes;
}

export interface RightTypes {
  isAdmin: boolean;
  read: boolean;
  write: boolean;
  delete: boolean;
}
