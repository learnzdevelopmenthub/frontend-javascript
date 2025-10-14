import { greeting } from "./greeting.js";

export function add(a, b) {
    console.log(greeting())
    return a + b
}


export function sub(a, b) {
    return a - b
}


export default {
    apiUrl: "google.com" 
};




