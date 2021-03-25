
function formatDate(dateBefore) {
    if (dateBefore.length != 10) {
        console.log("date entered incorrectly")
        return(0);
    }
    var month = dateBefore.substr(0, 2);
    var day = dateBefore.substr(3, 2);
    var year = dateBefore.substr(6, 4);

    if (month == 1) {
        month = "January";
    }
    else if (month == 2) {
        month = "Febuary";
    }
    else if (month == 3) {
        month = "March";
    }
    else if (month == 4) {
        month = "April";
    }
    else if (month == 5) {
        month = "May";
    }
    else if (month == 6) {
        month = "June";
    }
    else if (month == 7) {
        month = "July";
    }
    else if (month == 8) {
        month = "August";
    }
    else if (month == 9) {
        month = "September";
    }
    else if (month == 10) {
        month = "October";
    }
    else if (month == 11) {
        month = "November";
    }
    else if (month == 12) {
        month = "December";
    }
    else {
        console.log("not valid month");
        return(1);
    }

    
    console.log(month + " " + day + ", " + year);
    return (month + " " + day + ", " + year)
}

formatDate("12/24/2021");