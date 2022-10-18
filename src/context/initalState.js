import { fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser()

export const initalState ={
user: userInfo,
};