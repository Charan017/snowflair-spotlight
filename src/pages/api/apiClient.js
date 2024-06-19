import axios from "axios";

export const getApi = async ({ userId }) => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/v1/users?userId=${userId}`
    );

    return response?.data?.data;
  } catch (error) {
    console.error(error);
  }
};
