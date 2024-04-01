tellFortune("Engineer", "Amiel", "Pampanga", 4)+"<br>";
tellFortune("Java Developer", "Paul", "CPI", 2)+"<br>";
tellFortune("Fortune Teller", "Zenaida", "Makati", 1)+"<br";
tellFortune("Commercial Model", "Amiel", "Mandaluyong", 1);


function tellFortune(job, partnerName, place, kids) {
    document.write("You will be a " + job + " in " + place + ". " + "You will be married to " + partnerName + " and will have " + kids + "." + "<br>");
}