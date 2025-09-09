import React, { ReactNode } from "react";
import './MarkdownCards.css'

export interface Props{
    children:ReactNode
}
export const Note=({children}:Props)=>{
    return(
        <>
            <aside className="note">
                <span>Note:</span>
                <div className="text_read">
                    {children}
                </div>
            </aside>
        </>
    )
}

export const Warning=({children}:Props)=>{
    return(
        <>
            <aside className="warning">
                <span>Warning:</span>
                <div className="text_read">
                    {children}
                </div>
            </aside>
        </>
    )
}

export const Error=({children}:Props)=>{
    return(
        <>
            <aside className="error">
                <span>Error:</span>
                <div className="text_read">
                    {children}
                </div>
            </aside>
        </>
    )
}