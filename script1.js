
// // obejct concept
// const user = {
//   name: "anshu",
//   email: "anshu@gmail.com",
//   age: 22,
//   userBirthYear: function () {
//     return new Date().getFullYear() - user.age;
//   },
// };


//work easy
const createUser = (name, email, age) => {
  const user = {
    name,
    email,
    age,
    userBirthYear: function () {
      return new Date().getFullYear() - user.age;
    },
  };

  return user;
};


const user1 = createUser("anshu","anhu@gmail.com", 20)

const user2 = createUser("ash","anhu@gmail.com",23)


