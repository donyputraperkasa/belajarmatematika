export interface Teacher {
    name: string;
    university: string;
    domicile: string;
    experience: string;
    description: string;
    image?: string;
    bgColor: string;
    role?: string;
    social?: {
        instagram?: string;
        tiktok?: string;
        linkedin?: string;
    };
    lastEducation?: string;
    certification?: string;
}