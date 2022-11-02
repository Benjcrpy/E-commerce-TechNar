import { fetchCart, fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initalState = {
user : userInfo,
computerItems: null,
cartShow: false,
cartItems: cartInfo,
};