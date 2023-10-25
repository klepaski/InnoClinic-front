import { Role } from './Role';

export class RegisterRequest {
    email: string;
    password: string;
    role: Role;
    phoneNumber: string;
}