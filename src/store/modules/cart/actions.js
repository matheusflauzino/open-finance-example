import * as constants from "./constants";

const actions = {
    addItemToCart({ commit }, item) {
        commit(constants.ADD_ITEM_CART, item)
    }
};

export default actions;
