В функцию realizeDistance передается дистанция, которую должен проехать человек, вторым параметром передается дистанция, после которой необходимо сделать остановку.
необходимо вывести лог всего пути внутри функции, как в примере.





console.log(realizeDistance(100,150));

Вы проехали 100 метров и доехали до точки назначения.



console.log(realizeDistance(1000,300));

Остановка №1. Вы проехали 300 метров.
Остановка №2. Вы проехали 600 метров.
Остановка №3. Вы проехали 900 метров.
Вы проехали еще 100 метров и доехали до точки назначения.








function realizeDistance(totalDistance,stop){

if(totalDistance<stop){
return `Вы проехали ${totalDistance} метров и доехали до точки назначения.`
}

let busStop=0,wayAccomplished=0,textToReturn='';
for(wayAccomplished=0;wayAccomplished<totalDistance;wayAccomplished +=stop){
if (wayAccomplished == 0) {continue}
busStop = ++busStop;
textToReturn +=`Остановка №${busStop}. Вы проехали ${wayAccomplished} метров.\n`;
}

let substractedDifference = totalDistance - wayAccomplished;

if(substractedDifference<0){
	substractedDifference = substractedDifference+stop;
} 
else if(substractedDifference === 0){
return textToReturn +=`Вы проехали еще 300 метров и доехали до точки назначения.\n`;
}

textToReturn +=`Вы проехали еще ${substractedDifference} метров и доехали до точки назначения.\n`;
return textToReturn;

}
console.log(realizeDistance(1000,300));