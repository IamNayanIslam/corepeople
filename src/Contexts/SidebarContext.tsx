import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { SidebarReducer, type ISidebarState, type SidebarActions } from "../Reducers/SidebarReducer";



export const INITIAL_SIDEBAR_STATE: ISidebarState = {
    isCollapsed: false,
    isMobileOpen: false,
}

interface ContextValues {
    sidebarState: ISidebarState;
    sidebarDispatch: Dispatch<SidebarActions>
}

interface IProps {
    children: ReactNode;
}

export const SidebarContext = createContext<ContextValues>({sidebarState: INITIAL_SIDEBAR_STATE, sidebarDispatch: ()=>{}})

export const SidebarContextProvider = ({children}: IProps) =>{
    const [sidebarState, sidebarDispatch] = useReducer(SidebarReducer, INITIAL_SIDEBAR_STATE);

    const values = {sidebarState, sidebarDispatch};


    return (
        <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
    )
}