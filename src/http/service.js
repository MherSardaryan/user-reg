import { $authHost, $host } from ".";

export class Service {
  static async userLogin({ email, password }) {
    const { data } = await $host.post("/login", {
      email,
      password,
    });
    return data;
  }
  static async userRegister({ email, password }) {
    const { data } = await $host.post("/register", {
      email,
      password,
    });
    return data;
  }
  static async createTodo({ title, date }) {
    const { data } = await $authHost.post("/create", {
      title,
      date,
    });
    return data;
  }
  static async updateTodo(formData) {
  
    const { data } = await $authHost.patch("/update", {
      ...formData
    });
    return data;
  }
  static async getTodos() {
    const { data } = await $authHost.get("/get");
    return data;
  }
  static async deleteTodo({ taskID }) {
    const { data } = await $authHost.delete("/delete", {
      data: { taskID },
    });
    return data;
  }
}
