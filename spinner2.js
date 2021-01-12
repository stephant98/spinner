const arrayOfR = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\n']
let delay = 0;

for(let i = 0; i < arrayOfR.length; i++) {
   setTimeout(() => {
    process.stdout.write(arrayOfR[i]);
   }, delay)
   delay += 200
}


