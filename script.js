class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  get customMessage() {
    return `Hello ${this.name}! Your age is ${this.age}`;
  }

  userBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  set customMessage(name) {
    console.log(`name updated: ${name}`);
    this.name = name;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  displayUserDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${
      this.age
    }, Birth Year: ${this.userBirthYear()}`;
  }
}

class Student extends User {
  constructor(name, email, age, grade) {
    super(name, email, age);
    this.grade = grade;
  }
  displayStudentDetails() {
    return `${super.displayUserDetails()}, Grade: ${this.grade}`;
  }
  set setGrade(grade) {
    if (grade >= 0 && grade <= 100) {
      this.grade.push(grade)

    } else {
      console.log("Invalid grade. Grade should be between 0 and 100.");
    }

  }
  updateGrade(newGrade) {
    this.grade = newGrade;
  }
  get averageGrade() {;
    return this.grade.reduce((total, grade) => total + grade, 0) / this.grade.length;
  }
}

const student1 = new Student("Anshu", "anshu@gmail.com", 20, [85, 90, 80])
