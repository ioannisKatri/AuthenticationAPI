interface UserPayload {
    id: string;
    email: string;
}

// Utilizing declaration merging
declare namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
}