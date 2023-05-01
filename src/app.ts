import {DateFunctions, LogFunctions} from ".";
import dayjs from "dayjs";
import es = require("dayjs/locale/es");
import fr = require("dayjs/locale/fr");
import de = require("dayjs/locale/de");

const dd = DateFunctions.getDay_dd();

LogFunctions.Log_Blue_Message_Console(`-------------------------------------------------------------------------------`);

// console.log(DateFunctions.getMonth_MM());
// console.log(` DateFunctions.getDay_dd : ${dd}`);

dayjs.locale(fr);
const dia = dayjs().format("dddd");
console.log(dia);
console.log("---------------------------------------dddd MMMM YYYY ---------------------------------------");
let msg = ` fr : ${dayjs().format("dddd MMMM YYYY")}`;
console.log(msg);

dayjs.locale(es);
msg = ` es : ${dayjs().format("dddd MMMM YYYY")}`;
console.log(msg);

dayjs.locale(de);
msg = ` de : ${dayjs().format("dddd MMMM YYYY")}`;
//msg = ` de : ${dayjs().locale('de').toString()}\n`;
console.log(msg);
LogFunctions.Log_Blue_Message_Console(`-------------------------------------------------------------------------------`);
