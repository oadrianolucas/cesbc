import axios from "axios";

const url = "http://localhost:8080/api/v1";

export async function findUser(id) {
  try {
    const res = await axios.get(`${url}/user/${id}`);
    console.log(res);
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
}

export async function searchUsers() {
  try {
    const email = req.params.email;
    const res = await axios.get(`${url}/search/users/:${email}`);
    return res.data.users;
  } catch (error) {
    console.log(error);
  }
}

export async function alterFilter(data) {
  try {
    const res = await axios.post(`${url}/alter/filter/user`, data);
    console.log(data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function allUsers() {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await axios.get(`${url}/total/users`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.users;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter dados do usuário");
  }
}

export async function listUsers(page) {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await axios.get(`${url}/users?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.users;
  } catch (error) {
    console.error(error);
    window.location.href = "/login";
  }
}

export async function createUser(data) {
  try {
    const res = await axios.post(`${url}/signup`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Erro ao criar usuário");
    }
  }
}

export async function login(data) {
  try {
    const res = await axios.post(`${url}/login`, data, {
      withCredentials: true,
    });
    if (res.data && res.data.jwtToken) {
      const jwtToken = res.data.jwtToken;
      localStorage.setItem("jwt", jwtToken);
    }
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      console.log(error);
      throw new Error("Erro ao realizar login usuário.");
    }
  }
}
