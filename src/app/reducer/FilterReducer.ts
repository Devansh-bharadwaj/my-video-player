export function filterReducer(state: any, action: any) {
    console.log(state)
    switch (action.type) {
        case 'SEARCH':
            return action.items;
        case 'FILTER_ITEMS':
            if (action.filterValue === "All") {
                return state;
            } else {
                // console.log(action?.allVideos)
                return state?.filter(
                    (video: any) => video?.category?.toLowerCase() === action.filterValue.toLowerCase()
                );
            }
        default:
            throw new Error("Unhandled action type in filterReducer");
    }
}
