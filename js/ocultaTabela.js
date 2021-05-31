var weekdaysButton = document.getElementById("weekdays-btn");
var weekendButton = document.getElementById("weekend-btn");
var holidayButton = document.getElementById("holiday-btn");

var tabela1 = document.getElementById("dia-semana");
var tabela2 = document.getElementById("fim-semana");
var tabela3 = document.getElementById("feriados");

function weekdaysClicked(){
    tabela2.classList.toggle("hide");
    tabela3.classList.toggle("hide");
}

weekdaysClicked();

/*weekdaysButton.addEventListener("click", function(){
    if(tabela1.style.display === "none"){
        tabela1.style.display = "";
    }else{
        tabela1.style.display = "";
        tabela2.style.display = "none";
        tabela3.style.display = "none";
    }
});

weekendButton.addEventListener("click", function(){
    if(tabela2.style.display === "none"){
        tabela2.style.display = "";
    }else{
        tabela1.style.display = "none";
        tabela2.style.display = "";
        tabela3.style.display = "none";
    }
});

holidayButton.addEventListener("click", function(){
    if(tabela3.style.display === "none"){
        tabela3.style.display = "";
    }else{
        tabela1.style.display = "none";
        tabela2.style.display = "none";
        tabela3.style.display = "";
    }
});*/

weekdaysButton.addEventListener("click", function(){
    if(tabela1.classList == ""){
        tabela2.classList.toggle("hide");
        tabela3.classList.toggle("hide");
    }
    if(tabela1.classList == "hide"){
        tabela1.classList.toggle("hide");
        if(tabela2.classList == ""){
            tabela2.classList.toggle("hide");
        }
        if(tabela3.classList == ""){
            tabela3.classList.toggle("hide");
        }
    }
});

weekendButton.addEventListener("click", function(){
    if(tabela2.classList == ""){
        tabela1.classList.toggle("hide");
        tabela3.classList.toggle("hide");
    }
    if(tabela2.classList == "hide"){
        tabela2.classList.toggle("hide");
        if(tabela1.classList == ""){
            tabela1.classList.toggle("hide");
        }
        if(tabela3.classList == ""){
            tabela3.classList.toggle("hide");
        }
    }
});

holidayButton.addEventListener("click", function(){
    if(tabela3.classList == ""){
        tabela1.classList.toggle("hide");
        tabela2.classList.toggle("hide");
    }
    if(tabela3.classList == "hide"){
        tabela3.classList.toggle("hide");
        if(tabela1.classList == ""){
            tabela1.classList.toggle("hide");
        }
        if(tabela2.classList == ""){
            tabela2.classList.toggle("hide");
        }
    }
});