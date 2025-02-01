import { text } from "./module";
// import validator from "validator";
import isEmail from "validator/es/lib/isEmail";

import "./style.css";

console.log("this text from module " + text);
// console.log(validator.isEmail("mol6gmail.com"));
console.log(isEmail("mol@gmail.com"));
