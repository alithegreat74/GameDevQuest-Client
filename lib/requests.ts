import axios, { AxiosRequestConfig } from "axios";
import refreshSession from "./refreshSession";
import Swal from "sweetalert2";

export async function get<T = any>(url: string, showErrorPopup: boolean): Promise<T | null> {
    try {
        const response = await axios.get(url, { withCredentials: true});
        return response.data;
    }
    catch (e: any) {
        if (e.response?.status === 401) {
            const refreshed = await refreshSession();
            console.log(`refreshed: ${refreshed}`)
            if (refreshed) {
                try {
                    const response = await axios.get(url, {
                        withCredentials: true
                    });
                    return response.data;
                }
                catch (e: any) {
                    Swal.fire({
                        title: 'Error while getting data from server',
                        text: 'Oops. There was a problem while connecting to the server',
                        icon: "error",
                        confirmButtonText: 'Ok'
                    })
                    return null;
                }
            }
            Swal.fire({
                title: 'Login has expired',
                text: 'Your login session has expired we need you to login again',
                icon: "warning",
                confirmButtonText: 'OK',
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then((result)=>{
                if(!result.isConfirmed)
                    return;
                window.location.href = '/login';
            })
            return null;
        }
        if (!showErrorPopup)
            return null;

        Swal.fire({
            title: 'Error while getting data from server',
            text: 'Oops. There was a problem while connecting to the server',
            icon: "error",
            confirmButtonText: 'Ok'
        })

        return null;
    }
}

export async function post<TResponse = any, URequest=any>(url: string, payload: URequest, showErrorPopup:boolean): Promise<TResponse|null>{
    try {
        const response = await axios.post(url, payload, { withCredentials: true});
        return response.data;
    }
    catch (e: any) {
        if (e.response?.status === 401) {
            const refreshed = await refreshSession();
            if (refreshed) {
                try {
                    const response = await axios.get(url, {
                        withCredentials: true
                    });
                    return response.data;
                }
                catch (e: any) {
                    Swal.fire({
                        title: 'Error while getting data from server',
                        text: 'Oops. There was a problem while connecting to the server',
                        icon: "error",
                        confirmButtonText: 'Ok'
                    })
                    return null;
                }
            }
            Swal.fire({
                title: 'Login has expired',
                text: 'Your login session has expired we need you to login again',
                icon: "warning",
                confirmButtonText: 'OK',
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then((result)=>{
                if(!result.isConfirmed)
                    return;
                window.location.href = '/login';
            })
        }
        if (!showErrorPopup)
            return null;
        Swal.fire({
            title: 'Error while getting data from server',
            text: 'Oops. There was a problem while connecting to the server',
            icon: "error",
            confirmButtonText: 'Ok'
        })
        return null;
    }
}