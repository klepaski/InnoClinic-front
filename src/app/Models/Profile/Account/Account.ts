export class Account {
    id: number;
    userId: number;
    email: string;
    passwordHash: string;
    phoneNumber: string;
    isEmailVerified: boolean;
    photoId: number;
    photoUrl: string;

    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
}
