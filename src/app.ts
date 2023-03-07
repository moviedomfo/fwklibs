import { DateFunctions, LogFunctions } from '.';
import dayjs from 'dayjs';
require('dayjs/locale/es');
require('dayjs/locale/fr');
require('dayjs/locale/de');

// import 'dayjs/esm/locale/ar';
// const locale_de =  dayjs.locale('de') // use loaded locale globally

const dd = DateFunctions.getDay_dd();
//require('dayjs/locale/en'); // use locale globally

LogFunctions.Log_Blue_Message_Console(
  `-------------------------------------------------------------------------------`,
);

// console.log(DateFunctions.getMonth_MM());
// console.log(` DateFunctions.getDay_dd : ${dd}`);

dayjs.locale('fr');

const dia = dayjs().format('dddd');
console.log(dia);
console.log('---------------------------------------dddd MMMM YYYY ---------------------------------------');
let msg = ` fr : ${dayjs().format('dddd MMMM YYYY')}`;
console.log(msg);

dayjs.locale('es');
msg = ` es : ${dayjs().format('dddd MMMM YYYY')}`;
console.log(msg);

dayjs.locale('de');
msg = ` de : ${dayjs().format('dddd MMMM YYYY')}`;
//msg = ` de : ${dayjs().locale('de').toString()}\n`;
console.log(msg);
LogFunctions.Log_Blue_Message_Console(
  `-------------------------------------------------------------------------------`,
);
