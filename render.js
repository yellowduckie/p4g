
function buildElem(days) {
    var elem = "";
    for (day of days) {
        elem += `<div class="day">`
        elem += `<h2 id="${day.value}">${day.month} ${day.day}</h2>`;
    
        for (section of day.sections) {
            if (section.title != "") {
                elem += `<h3>${section.title}</h3>`
            }
    
            elem += `<div class="section">`
            for (subsection of section.subsections) {
                elem += `<div class="subsection">`;
                if (subsection.title != "") {
                    elem += `<h4>${subsection.title}</h4>`
                }
                elem += `<p>${subsection.content}</p>`
                elem += `</div>`;
            }
            elem += `</div>`;
        }
    
        elem += `</div>`;
        
    }

    return elem;
}


function goToDay() {
    var m = document.getElementById("select_month").value;
    var d = document.getElementById("select_day").value;
    var dayElem = document.getElementById("day_" + m + "_" + d);

    if (dayElem) {
        dayElem.scrollIntoView();
    } else {
        alert("Day does not exist.");
    }
}