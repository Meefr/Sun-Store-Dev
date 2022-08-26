let users;
if (localStorage.users != null) {
  users = JSON.parse(localStorage.users);
} else {
  users = [
    {
      firstName: "Admin",
      lastName: "",
      Email: "admin",
      Password: "123456@Aa",
    },
  ];
}
export { users };
