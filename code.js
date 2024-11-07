function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}
function getTicketPrice(age) {
    if (age <= 12) {
        return "Le prix du billet est de 10 $";
    } else if (age >= 13 && age <= 17) {
        return "Le prix du billet est de 15 $";
    } else if (age >= 18) {
        return "Le prix du billet est de 20 $";
    } else {
        return "Âge non valide";
    }
}
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
