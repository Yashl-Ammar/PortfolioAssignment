document.addEventListener("DOMContentLoaded", function(event) { 
    let column = 0;
    let row = 0;

    const dayList = [];
    const timeList = [];

    let addDayBtn = document.getElementById("day-add-btn");
    let mainTable = document.getElementsByClassName("main-table");
    let addTimeBtn = document.getElementById("time-add-btn");
    let addAgendaBtn =  document.getElementById("agenda-add-btn");

    addDayBtn.addEventListener("click", function() {
        let addDayInput = document.getElementById("add-day-input");
        let dayInput = document.getElementById("day-input");

        let day = addDayInput.value;
        dayList.push(day);
        row++;


        let newRow = document.createElement('tr');
        newRow.id = "r" + row;
        let initialCol = document.createElement('td');
        initialCol.id = "c" + row + "0";
        initialCol.innerText = day;
        newRow.append(initialCol);
        

        for(let i = 1 ; i <= timeList.length ; i++){
            let newCol = document.createElement('td');
            newCol.id = "c" + row + i;
            newRow.append(newCol);
        }
        let newOption = document.createElement('option');
        newOption.innerText = day;
        dayInput.append(newOption);
        mainTable[0].append(newRow);
    })


    addTimeBtn.addEventListener("click", () => {
        let timeInput = document.getElementById("add-time-input");
        let timeselect = document.getElementById("time-input");

        let firstRow = document.getElementById("r0");

        let time = timeInput.value;
        timeList.push(time);
        column++;

        let id= "c0" + column;

        let newCol = document.createElement('th');
        newCol.id = id;
        newCol.innerText = time;

        let newOption = document.createElement('option');
        newOption.innerText = time;
        timeselect.append(newOption);
        firstRow.append(newCol);

        for(let i = 1 ; i <= dayList.length ; i++){
            let newRow = document.createElement('td');
            
            newRow.id = "c" + i + column;
            let nextRow = document.getElementById('r'+i);
            nextRow.append(newRow);
        }

    })

    addAgendaBtn.addEventListener("click" , () => { 
        let dayInput = document.getElementById("day-input");
        let timeInput = document.getElementById("time-input");
        let agendaInput = document.getElementById("agenda-input");
        let day = dayInput.value;
        let time = timeInput.value;
        let agenda = agendaInput.value;

        console.log(time);

        let col = -1; 
        let row = -1;

        for(let i = 0 ; i < dayList.length ; i++){
            if(dayList[i] === day){
                row = i+1;
                break;
            } 
        }

        for(let i = 0 ; i < timeList.length ; i++){
            if(timeList[i] === time){
                col = i+1;
                break;
            } 
        }
        console.log(dayList);
        console.log(timeList);
        console.log(col + "::" + row);

        if(row != -1 && col != -1){
            let concernedTd = document.getElementById("c"+row+col);
            let getP = document.getElementById("p"+row+col);
            console.log(getP);
            if(getP === null){
                concernedTd.innerHTML = "<p id=\"p"+ row + col +"\">"+agenda+"</p>";
                let img = document.createElement('img');
                img.src = "images/icons8-delete-trash-24.png";
                img.id = "i" + row + col;
                img.classList.add('del-btn')
                concernedTd.append(img);
            }
        }

        let allDelBtn = document.getElementsByClassName('del-btn');

        Array.from(allDelBtn).forEach(function(element) {
            element.addEventListener("click" , () => {
                let imgid = element.id;
                imgid = imgid.substring(1);
                let delTd = document.getElementById("c"+imgid);
                delTd.innerHTML = "";
            })
        });
    })



});

