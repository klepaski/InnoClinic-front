import { Role } from './Role';

export class User {
    id: number;
    email: string;
    passwordHash: string;
    refreshToken: string;
    refreshTokenExpiryTime: Date;
    role: Role;
}
