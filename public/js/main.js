// 1
let prenom = prompt('ton prénom?');
// alert(prenom.charAt(0));

// 2
// alert(prenom.charAt(prenom.length-1));

// 3
// alert(prenom.slice(1));

// 4
// let upper = prenom.charAt(1);
// alert(prenom.replace(upper, upper.toUpperCase()))

// 5

// let lettre = parseFloat(prompt('quelle lettre en majuscule'));
// let upper = prenom.charAt(lettre)
// console.log(prenom.replace(upper, upper.toUpperCase()))

// 6
let first = prenom.charAt(0);
let cap = first.toUpperCase();
let last = prenom.slice(1);
let low = last.toLowerCase();
console.log(cap.concat(low));



