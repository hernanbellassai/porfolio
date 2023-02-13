//como hacer que un numero no se pueda repetir en un array?
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// ejemplo de uso:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique ); // devuelve ['a', 1, 2, '1']
console.info(unique)

var a = ['a', 1, 'a', 2, '1'];
for(var i = a.length -1; i >=0; i--){
  if(a.indexOf(a[i]) !== i) a.splice(i,1);
}
console.info(a)

function reemplazarDuplicados(value, index, self) { 
    return (self.indexOf(value) === index)?value:'';
}

// ejemplo de uso:
var a = ['a', 1, 'a', 2, '1'];
var b = a.map( reemplazarDuplicados ); // devuelve ['a', 1, 2, '1']
console.info(b)

var a = ['a', 1, 'a', 2, '1'];
for(var i = a.length -1; i >=0; i--){
  if(a.indexOf(a[i]) !== i) a[i] = '';
}
console.info(a)



//Source: https://stackoverflow.com/questions/273597


