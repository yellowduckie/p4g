const dayValue = {
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12,
    "January": 1,
    "February": 2,
    "March": 3
};

class Day {
    constructor(month, day) {
        this.month = month;
        this.day = day;
        this.value = "day_" + dayValue[month] + "_" + day;
        this.sections = [];
    }
}

class Section {
    constructor(title = "???") {
        this.title = title;
        this.subsections = [];
    }
}

class Subsection {
    constructor(title = "") {
        this.title = title;
        this.content = "";
    }
}

function parseText() {
    var textLine = text.split("\n");
    var days = [];
    var d = -1;
    var s = -1;
    var u = -1;

    for (line of textLine) {
        
        // Check for new day
        if (line.startsWith("%")) {
            var date = line.substr(1).split(" ");
            d++;
            s = -1;
            u = -1;
            days.push(new Day(date[0], date[1].replace(/\D/g,'')));
        }

        // Check for new section
        else if (line.startsWith("@")) {
            days[d].sections.push(new Section(line.substr(1)));
            s++;
            u = -1;
        }

        // Check for new subsection
        else if (line.startsWith("$")) {
            // If no section title, push a titleless one
            if (s == -1) {
                days[d].sections.push(new Section());
                s++;
                u = -1;
            }

            days[d].sections[s].subsections.push(new Subsection(line.substr(1)));
            u++;
        }

        // Else, should be content
        else {
            // If no section title, push a titleless one
            if (s == -1) {
                days[d].sections.push(new Section());
                s++;
                u = -1;
            }
            
            // If no subsection title, push a titleless one
            if (u == -1) {
                days[d].sections[s].subsections.push(new Subsection());
                u++;
            }

            days[d].sections[s].subsections[u].content += line + "<br />";
        }

    }

    return days;
}

