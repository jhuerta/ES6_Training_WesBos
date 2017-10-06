import { sum,kebabCase} from 'npm:lodash';
import {getTax as tax} from './src/taxes.js'


console.log(kebabCase('hola hola hola  asdf asdasdfs'));
console.log('------------------------------------------------')
console.log(tax(100,0.1 ));
console.log(tax(100));
console.log('------------------------------------------------')