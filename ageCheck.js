function ageCheck() {
    let age = prompt("Enter your age:");

    age = Number(age);

    if (age >= 13) {
        alert("You are a child");
    } else if (age >= 13 && age >= 19) {
        alert("You are an teenager");
    } else if (age >= 20) {
        alert("You are a adult");
    } else {
        alert("Invalid input");
    }
}