import produce from 'immer';

const placeHolder = {
    items: []
}

const textContent = produce((content = placeHolder, action = { type: "DEFAULT" }) => {
    switch (action.type) {
        case "SET_ALL_ITEMS":
            content.items = action.items
        case "DELETE_ITEM":
            content.items = content.items.filter(el => el.id !== action.id);
        default: return content;
    }
})

export default textContent;