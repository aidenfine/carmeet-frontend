export type LoginParamsTypes = {
  email: string;
  password: string;
};

export type RegisterParamsTypes = {
  email: string;
  username: string;
  password_hash: string;
  host_status?: string;
  interests?: string[];
  states?: string[];
};
