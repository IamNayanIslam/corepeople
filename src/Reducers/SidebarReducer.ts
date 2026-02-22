export interface ISidebarState {
    isCollapsed: boolean;
    isMobileOpen: boolean;
}

export type SidebarActions = | {type: "TOGGLE_IS_COLLAPSED"}
| {type: "TOGGLE_IS_MOBILE_OPEN"}

export const SidebarReducer = (state: ISidebarState, action:SidebarActions) => {
    switch (action.type) {
        case "TOGGLE_IS_COLLAPSED":
            return {
                ...state, isCollapsed: !state.isCollapsed
            }
        case "TOGGLE_IS_MOBILE_OPEN":
            return {
                ...state, isMobileOpen: !state.isMobileOpen
            }
    
        default:
            return state;
    }
}