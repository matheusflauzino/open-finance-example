import * as constants from "./constants";

const mutations = {
    [constants.ADD_ITEM_CART](state, value) {
        state.cart.push(value);
    }
};

export default mutations;
