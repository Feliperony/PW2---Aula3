var n1 = 10;
var n2 = 5;
//let n3 : number = 7
//let media = function (nota1 + nota2 + nota3) /3
var fMedia = function (nota1, nota2, nota3) {
    if (nota3 === void 0) { nota3 = 7; }
    return (nota1 + nota2 + nota3) / 3;
};
console.log("A media \u00E9 : " + fMedia(n1, n2));
