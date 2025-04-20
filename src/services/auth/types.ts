export type LoginParamsTypes = {
  email: string;
  password: string;
};

export type RegisterParamsTypes = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  applyingForHost?: string;
  interests?: string[];
  states?: string[];
};
