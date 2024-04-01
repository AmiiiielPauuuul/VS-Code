studentAverage(80,77,88,95,68);

function studentAverage (a,b,c,d,e) {
    average = (a + b + c + d + e)/5

    if (average <60) {
        grade = 'F';
    } else if (average <70) {
        grade = 'D';
    } else if (average <80) {
        grade = 'C';
    } else if (average <90) {
        grade ='B';
    } else {
        grade = 'A';
    }
        

    return document.write("Average grade: " + average + "<br>" + "Grade: " + grade);
}