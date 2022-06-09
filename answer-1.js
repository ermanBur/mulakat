let i = 0;
var sum = 0;
// 3 5 6 9
//i 3 e veya 5 e tam bölünebilmeli ve 10 dan küçük olmalı
for(i; i<10; i++){
    if(i%3 == 0 || i%5 == 0){
        console.log(i);
        sum += i;
    }
    console.log('sum is : '+sum);
}
i = 0;
var sum1000 = 0;

for(i; i<1000; i++){
    if(i%3 == 0 || i%5 == 0){
        console.log(i);
        sum1000 += i;
    }
    console.log('sum is : '+sum1000);
}
