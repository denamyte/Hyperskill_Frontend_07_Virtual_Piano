function passingExam (myPoints) {
    return new Promise((resolve) => resolve(myPoints >= 90
        && "You are enrolled!" || "Sorry, you haven't passed the Math exam" ));
}
