import { Status } from './Status'

export class UpdateOffice {
    id: number;
    photoUrl: string;
    city: string;
    street: string;
    houseNumber: string;
    officeNumber: string;
    registryPhoneNumber: string;
    status: Status;
}