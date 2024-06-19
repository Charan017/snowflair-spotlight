import { DBConstants } from "@/utils/firebase/DBConstants";
import {
  getOpenPositionsPath,
  getProfileDetailsPath,
  getShowCasesPath,
  getUserExperiencesPath,
} from "@/utils/firebase/DBPaths";
import { getAPI, getAPIByChild } from "./apiClient";

const getUserId = () => {
  return "axtiI03dPbOf3RsW1EmyV5cVbRy2";
};

export const getShowCaseThunk = async ({ id }) => {
  const userId = getUserId();
  const path = getShowCasesPath(id);
  const childKey = DBConstants.IS_DELETED;
  const response = await getAPIByChild(path, childKey, false);
  return response;
};

export const getUserExperiencesThunk = async ({ id }) => {
  const userId = getUserId();
  const path = getUserExperiencesPath(id);
  const childKey = DBConstants.IS_DELETED;
  const response = await getAPIByChild(path, childKey, false);
  return response;
};

export const getProfileDetailsThunk = async ({ id }) => {
  const userId = getUserId();
  const path = getProfileDetailsPath(id);
  const response = await getAPI(path);
  return response;
};

export const getOpenPositionsThunk = async ({ id }) => {
  const userId = getUserId();
  const path = getOpenPositionsPath();
  const childKey = DBConstants.CREATED_BY;
  const response = await getAPIByChild(path, childKey, id);

  return response;
};
