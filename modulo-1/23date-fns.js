import {format, addDays, add, formatDistance, compareAsc, compareDesc, isValid, parse} from "date-fns";
import {pt, es} from "date-fns/locale/index.js";

let today = new Date();
let parsedToday;

console.log(today);

parsedToday = format(today, "'Data': dd/MM/yyyy")
console.log(parsedToday)

parsedToday = format(today, "dd 'de' MM 'de' yyyy")
console.log(parsedToday)

parsedToday = format(today, "dd 'de' MMMM 'de' yyyy")
console.log(parsedToday)

parsedToday = format(today, "PPPP")
console.log(parsedToday)

parsedToday = format(today, "PPPP", {locale: pt})
console.log(parsedToday)

parsedToday = format(today, "PPPP", {locale: es})
console.log(parsedToday)

parsedToday = format(addDays(today, 3), "PPPP")
console.log(parsedToday)

parsedToday = format(add(today, {years:1}), "PPPP")
console.log(parsedToday)

let endDate = new Date(2021, 12, 31);
let diff = formatDistance(today, endDate, {locale: pt});
console.log(`Faltam ${diff} até o Ano Novo!`)

let d1 = new Date('2020-01-01')
let d2 = new Date('2019-01-01')
let d3 = new Date('2021-01-01')
let dates = [d1, d2, d3];

let sortDescDates = dates.sort(compareDesc);
console.log(sortDescDates);
let sortAscDates = dates.sort(compareAsc);
console.log(sortAscDates);
console.log(dates);

let invalidDate = parse('30.02.2020', 'dd.MM.yyyy', new Date());
console.log(isValid(invalidDate));


