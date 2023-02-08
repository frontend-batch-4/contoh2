const helloWorld = () => {
  console.log("hello world");
};

const login = (email, password) => {
  const data = {
    login_identity: email,
    password,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/login`, options)
    .then((response) => console.log(response))
    .catch((err) => alert(err));
};

// get error, blocked by cors
const getProfile = (token) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/profile`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export { helloWorld, login, getProfile };
