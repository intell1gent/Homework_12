

let weight=+prompt ('Введите массу (кг)');
let height=+prompt ('Введите рост (м)'); 
let index = Math.round ((weight /(height ** 2)) * 10) / 10 ;
console.log(`ИМТ: ${index}`);

if (index <= '16') {
    alert('Значительный дефицит массы тела!');
    }
    if (index >= '16,5' && index <= 18.5 ) {
        alert('Дефицит массы тела!');
        }
        else  if (index >= '18,5') {
            alert('Норма!');
            }
            else   if (index >= '25' && index <= 30 ) {
                alert('Лишний вес!');
            }
            else if (index >= '30' && index <= 35) {
                    alert('Ожирение 1 степени!');
                    }
                else if(index >= 35 && index <= 40){
                    alert(' Ожирение 2 степени');
                } else if(index >= 40 ){
                    alert('Ожирение 3 степени');
                }

   