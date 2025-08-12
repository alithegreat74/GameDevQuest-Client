export const API_URL = ()=> {
    if(!process.env.NEXT_PUBLIC_API_URL)
        throw new Error("NEXT PUBLIC API IS NOT SET");
    return process.env.NEXT_PUBLIC_API_URL;
};