export {}

declare global{
    namespace NOdeJS {
        interface ProcessEnv {
            PORT: number;
            ENV: string;
            DATABASE_URL: string;
            DATABASE_PASSWORD: string
        }
    }
}