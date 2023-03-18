function funct1(event) {
  event.preventDefault();
  //create object
  const obj = {
    name: event.target.username.value,
    email: event.target.email.value,
  };
  const key = event.target.username.value;
  const userDetail = localStorage.setItem(key, JSON.stringify(obj));
}
