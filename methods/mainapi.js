import validator from "validator";
import * as loading from "/methods/loading";

const helloWorld = () => {
  console.log("hello world");
};

const login = async (email, password) => {
  // validate input
  if (email === "") {
    return Swal.fire({
      icon: "warning",
      title: "Email belum di isi",
    });
  } else if (!validator.isEmail(email)) {
    return Swal.fire({
      icon: "warning",
      title: "Email tidak benar",
    });
  } else if (password === "") {
    return Swal.fire({
      icon: "warning",
      title: "Password belum di isi",
    });
  }

  loading.show();

  const data = {
    login_identity: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/login`, options)
    .then((response) => response.json())
    .then((response) => {
      if ((response.status === 0) | (response.status === 200)) {
        document.cookie = `jwt=${response.authToken}`;
        window.location.href = "/";
      } else {
        loading.hide();
        Swal.fire({
          icon: "error",
          title: "Login gagal",
          text: "email atau password anda salah!",
        });
      }
    })
    .catch((err) => {
      // di catch tidak menerima error (bug)
      loading.hide();
      Swal.fire({
        icon: "error",
        title: "Login gagal",
        text: "email atau password anda salah!",
      });

      // debug
      console.error(err);
    });
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
