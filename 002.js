Дан массив возрастов в семье, вернуть массив с возрастом самого младшего, старшего и разницу между самым старшим и младшим,  Если ребенку 9 месяцев считаем как 0, 
желательно не использовать встроенные функции как sort и т. п. 

function differenceInAges(ages){
}

console.log(differenceInAges([82, 15, 6, 38, 35])); // 6, 82, 76
console.log(differenceInAges([57, 99, 14, 32])); // 14, 99, 85






function differenceInAges(ages){
let min,max;
	for(let key of ages){
  key = Math.floor(key)
  min < key ? min = min : min = key;
  max > key ? max = max : max = key;
	}
return [min, max, max-min]
}
console.log(differenceInAges([82, 15, 6, 38, 35])); // 6, 82, 76
console.log(differenceInAges([57, 99, 14, 32])); // 14, 99, 85