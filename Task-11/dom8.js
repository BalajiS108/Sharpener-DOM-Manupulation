// function fun(event) {
//   event.preventDefault();
//   const userName = localStorage.setItem(
//     "userName",
//     event.target.username.value
//   );
//   const user_name = event.target.username.value;
//   console.log("userName", user_name);
//   const email = localStorage.setItem("email", event.target.email.value);
//   const user_email = event.target.email.value;
//   console.log("email", user_email);
//   event.target.username.value = "";
//   event.target.email.value = "";

function funct1(event) {
  event.preventDefault();
  //create object
  const obj = {
    name: event.target.username.value,
    email: event.target.email.value,
  };
  const userDetail = localStorage.setItem("userDetail", JSON.stringify(obj));
}
