import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "auth/login",
  signup: "auth/register",
  getInfo: "user/info",
  passwordUpdate: "user/update-password"
};

const userApi = {
  signin: async ({ email, password }) => {
    try {
      console.log("send request");
      const response = await publicClient.post(
        userEndpoints.signin,
        { email, password }
      );

      return { response };
    } catch (err) { console.log("err"); return { err }; }
  },
  signup: async ({ firstName, lastName, email, password, confirmPassword }) => {
    try {
      const response = await publicClient.post(
        userEndpoints.signup,
        { firstName, lastName, email, password, confirmPassword }
      );

      return { response };
    } catch (err) { return { err }; }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);

      return { response };
    } catch (err) { return { err }; }
  },
  // passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
  //   try {
  //     const response = await privateClient.put(
  //       userEndpoints.passwordUpdate,
  //       { password, newPassword, confirmNewPassword }
  //     );

  //     return { response };
  //   } catch (err) { return { err }; }
  // }
};

export default userApi;