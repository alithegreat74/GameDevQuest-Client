import axios from "axios";
import { API_URL } from "./config";

export default async function refreshSession():Promise<boolean>{
    try{
        await axios.get(`${API_URL()}/refreshsession`, {withCredentials:true});
        return true;
    }
    catch(e:any){
        console.log(e);
        return false;
    }
}