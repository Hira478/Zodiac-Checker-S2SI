var form = document.getElementById('data-form');
form.onsubmit = function(e) {
    var month = form.monthB.value;
    var day = form.dateB.value;
    e.preventDefault();
    var result = document.getElementById('result');
    let astro_sign = "";

    if (month == "Dec") {
        if (day < 22)
            astro_sign = "Sagittarius";
        else
            astro_sign = "Capricorn";
    } else if (month == "Jan") {
        if (day < 20)
            astro_sign = "Capricorn";
        else
            astro_sign = "Aquarius";
    } else if (month == "Feb") {
        if (day < 19)
            astro_sign = "Aquarius";
        else
            astro_sign = "Pisces";
    } else if (month == "Mar") {
        if (day < 21)
            astro_sign = "Pisces";
        else
            astro_sign = "Aries";
    } else if (month == "Apr") {
        if (day < 20)
            astro_sign = "Aries";
        else
            astro_sign = "Taurus";
    } else if (month == "May") {
        if (day < 21)
            astro_sign = "Taurus";
        else
            astro_sign = "Gemini";
    } else if (month == "Jun") {
        if (day < 21)
            astro_sign = "Gemini";
        else
            astro_sign = "Cancer";
    } else if (month == "Jul") {
        if (day < 23)
            astro_sign = "Cancer";
        else
            astro_sign = "Leo";
    } else if (month == "Aug") {
        if (day < 23)
            astro_sign = "Leo";
        else
            astro_sign = "Virgo";
    } else if (month == "Sep") {
        if (day < 23)
            astro_sign = "Virgo";
        else
            astro_sign = "Libra";
    } else if (month == "Oct") {
        if (day < 23)
            astro_sign = "Libra";
        else
            astro_sign = "Scorpio";
    } else if (month == "Nov") {
        if (day < 22)
            astro_sign = "Scorpio";
        else
            astro_sign = "Sagittarius";
    }

    if (day == 1) {
        day = day + 'st';
    } else if (day == 2) {
        day = day + 'nd';
    } else if (day == 3) {
        day = day + 'rd';
    } else {
        day = day + 'th';
    }
    result.innerHTML = 'My date of birth is ' + month + ' ' + day + "<br>" + "So my zodiac is " + astro_sign;
    form.reset();
}