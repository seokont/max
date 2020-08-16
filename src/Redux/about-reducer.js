const SLIDER_PERSON_NEXT = "SLIDER_PERSON_NEXT";
const SLIDER_PERSON_PREV = "SLIDER_PERSON_PREV";

let inicil = {

    persona: [
        {
            id: 1,
            name: 'Joanna Gabs',
            avatar: 'g1',
            description: 'Grapherex is an end-to-end encrypted messenger really perfect',
            link: 'Rewad more'
        },
        {
            id: 2,
            name: 'John Lee',
            avatar: 'g2',
            description: 'Perfect following tests of a new instant messaging platfor',
            link: 'Rewad more'
        },
        {
            id: 3,
            name: 'Stiven Jonsen',
            avatar: 'g3',
            description: 'Though lacking features including voice messaging and chat heads',
            link: 'Rewad more'
        }

    ]
}

let AboutReducer = (state = inicil, action) => {


    switch (action.type) {
        case SLIDER_PERSON_NEXT:
            if (action.status == true){
                return {
                    ...state,
                    persona:[state.persona[2],state.persona[1],state.persona[0],]

                }
            };

        case SLIDER_PERSON_PREV:
            if (action.status == true){
                return {
                    ...state,
                    persona:[state.persona[2],state.persona[1],state.persona[0],]

                }
            };

        default:
            return state;

    }
}


export let actionAboutSlider = (status) => ({type: SLIDER_PERSON_NEXT, status: status});
export let actionAboutSliderPrev = (status) => ({type: SLIDER_PERSON_PREV, status: status});


export default AboutReducer;