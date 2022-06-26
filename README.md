# Day Converter

## install :

```
npm install persian-day
```

## How to use :

```JS
const { convertDayNumber } = require("persian-day");

console.log(convertDayNumber(7));
```

Output :

```
یکشنبه
```

Or if you want to get some days before or later, it returns correct value.
For example today is Thursday and you want 10 days ago :

```JS
let today = new Date().getDay(); // returns 4
console.log(convertDayNumber(today - 10));
```

Output :

```
دوشنبه
```

Day name converter has been added in `v1.1.0` version.

Example :

```JS
const { convertDayName } = require("persian-day");

let day = "Saturday"; // or "Sat"
console.log(convertDayName(day));
```

Output :

```
شنبه
```
