import axios from "axios";
import { API_URL } from "./config";

export default async function refreshSession():Promise<boolean>{
    try{
        axios.get(`${API_URL()}/refreshsession`);
        return true;
    }
    catch{
        return false;
    }
}