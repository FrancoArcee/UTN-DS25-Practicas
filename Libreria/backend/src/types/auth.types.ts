import { UserData } from './user.types';

// Request para login
export interface LoginRequest {
  email: string;
  password: string;
}

// Response del login
export interface LoginResponse {
  success: boolean;
  data: {
    user: UserData;
    token: string;
  };
}