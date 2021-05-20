export interface CreateUserDto {
    id: string;
    email: string;
    password: string;
    permissionLevel?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: number;
    age?: number;
    club?: string;
    height?: DoubleRange,
    weight?:DoubleRange,
    video?:Blob
}