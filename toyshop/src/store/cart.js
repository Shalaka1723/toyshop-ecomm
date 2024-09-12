import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const {pName, quantity, price} = action.payload;
            const indexPname = (state.items).findIndex(item => item.pName === pName);
            if(indexPname >= 0){
                state.items[indexPname].quantity += quantity;
            }else{
                state.items.push({pName, quantity, price});
            }
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;