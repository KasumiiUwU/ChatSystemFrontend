export interface LoginRequest {
    username: string;
    password: string;
}
  
export interface LoginResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export interface RegisterRequest {
    fullName: string;
    phone: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    success: boolean;
    message: string;
} 