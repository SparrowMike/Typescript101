import { User } from "./models/User";

const user = new User({name: 'Jake', age: 20});

user.on('change', () => {});
user.on('change', () => {});
user.on('gasd', () => {});

console.log(user)