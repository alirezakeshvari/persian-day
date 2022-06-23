# persian-day

## How to install :

```
npm install persian-day
```

## How to use :

```JS
const persianDay = require("persian-day");

console.log(persianDay.convertDayNumber(7));
```

Output :

```
یکشنبه
```

Or if you want to get some days before or later, it returns correct value.
For example today is Thursday and you want 10 days ago :

```JS
const persianDay = require("persian-day");

let today = new Date().getDay(); // returns 4
console.log(persianDay.convertDayNumber(today - 10));
```

Output :

```
دوشنبه
```
