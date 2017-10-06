import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { otherApiKey, theUrl as superURL, sayHi as saluda} from './src/config'

/*--------------*/
import User,{createUrl, gravatar} from './src/user';
/*--------------*/

console.log('--------------------------------------------------');
const user = new User('Juan Huerta','juan@gmail.com','www.juan.com');
console.log(user);
console.log('--------------------------------------------------');

const profile = createUrl(user.name);
console.log(profile);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
const avatar = gravatar(user.name);
console.log(avatar);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');


const ages = [1,9909,564,234,234,2,435,345,3,234,3,4,2,3,1,1,1,34,234,54,234,234];

console.log(uniq(ages));
console.log(otherApiKey);
console.log(superURL);

console.log(saluda('aaaa'));