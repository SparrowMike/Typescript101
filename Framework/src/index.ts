import { User } from "./models/User";

const user = new User({name: 'Jake', age: 20});

user.set({ name: 'Mike' });

console.log(user.get('name'))
console.log(user.get('age'))