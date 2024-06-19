import { signInAnonymously } from "firebase/auth";
import { get, ref } from "firebase/database";
import { auth, db } from "../../../firebase.config";
import { filterSnapshot } from "@/utils/firebase/DBUtil";

export const firebaseAnonymousLogin = async () => {
  try {
    const res = await signInAnonymously(auth);

    return res;
  } catch (error) {
    console.log({ error });
  }
};

export const getAPI = async (path) => {
  console.log(" called");

  const dbRef = ref(db, path);
  try {
    const snapshot = await get(dbRef);

    console.log({ snapshot }, "coming");

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getAPIByChild = async (path, childKey, childValue) => {
  console.log("child called", path);
  try {
    const dbRef = ref(db, path);
    const snapshot = await get(dbRef);

    console.log({ snapshot });

    const filteredData = filterSnapshot(snapshot.val(), childKey, childValue);

    if (snapshot.exists()) {
      return filteredData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getApi = async ({ userId }) => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/v1/users?userId=${userId}`
    );

    console.log(response);

    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
