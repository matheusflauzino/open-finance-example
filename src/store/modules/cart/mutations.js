import * as constants from "./constants";

const mutations = {
    [constants.ADD_ITEM_CART](state, value) {
        const alreadyExists = state.cart.filter(item => item.id === value.id);
        if (alreadyExists.length > 0) {
            const cart = state.cart.filter(item => item.id !== value.id);
            const amount = alreadyExists[0].amount + 1;
            cart.push({ ...value, amount })
            state.cart = cart;
            return;
        }

        state.cart.push({
            ...value, amount: 1
        });
    }
};

export default mutations;
