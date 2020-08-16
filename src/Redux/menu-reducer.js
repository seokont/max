const MODAL_MENU = "MODAL_MENU";
let inicil = {
    statusMenu: false
}

let MenuReducer = (state=inicil, action) => {


    switch (action.type) {
        case MODAL_MENU:
            return {
                ...state,
                statusMenu: action.status

            };
        default:
            return state;

    }
}


export let actionmodalmenu = (status) => ({type: MODAL_MENU, status: status});


export default MenuReducer;