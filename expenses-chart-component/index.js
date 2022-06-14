import Data from './data.json' assert {type: 'json'};


let labels = [];
let amount = [];
for (const i in Data) {
    labels.push(Data[i].day);
    amount.push(Data[i].amount);
};


let day = new Date().getDay() - 1;
if (day < 0) {day += 7;}
let bgColor = Array(7).fill('hsl(10, 79%, 65%)');
bgColor[day] = 'hsl(186, 34%, 60%)';


const data = {
    labels: labels,
    datasets: [{
        label: '',
        data: amount,
        backgroundColor: bgColor,
        borderSkipped: false,
        borderRadius: 5
    }]
};


const config = {
    type: 'bar',
    data: data,

    options: {
        plugins: {
            legend: {display: false},
            tooltip: {
                backgroundColor: 'hsl(25, 47%, 15%)'
            }
        },
        scales: {
            x: {grid: {
                display: false,
                borderColor: 'white'}},
            y: {display: false}
        }
    },

    defaults: {
        color: 'hsl(28, 10%, 53%)',
        font: {
            family: '"DM Sans", sans-serif',
            size: 13,
            color: 'hsl(28, 10%, 53%)'
        }
    }
};


const spending = new Chart(document.getElementById('chart'), config);



let total = 0;
for (const i in amount) {
    total += amount[i];
}