import React, { ReactNode } from "react";
import style from "./MarkdownCards.module.css"

export interface Props{
    children:ReactNode
}
export const NoteCard=({children}:Props)=>{
    return(
        <>
            <aside className={style.note}>
                <span>Note:</span>
                <div className="text_read">
                    {children}
                </div>
            </aside>
        </>
    )
}

export const WarningCard=({children}:Props)=>{
    return(
        <>
            <aside className={style.warning}>
                <span>Warning:</span>
                <div className="text_read">
                    {children}
                </div>
            </aside>
        </>
    )
}

export const ErrorCard=({children}:Props)=>{
    return(
        <>
            <aside className={style.error}>
                <span>Error:</span>
                <div className="text_read">
                    {children}
                </div>
            </aside>
        </>
    )
}