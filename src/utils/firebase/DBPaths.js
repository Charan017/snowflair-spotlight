export const getShowCasesPath = (userID) => {
  return `showcase_images/${userID}`;
};
export const getShowCasePath = (userID, showcaseId) => {
  return `showcase_images/${userID}/${showcaseId}`;
};
export const getUserExperiencesPath = (userID) => {
  return `user_experiences/${userID}`;
};
export const getProfileDetailsPath = (userID) => {
  return `users/${userID}`;
};

export const getOpenPositionsPath = () => {
  return `job_listings`;
};

export const getAddVideoPath = (userID) => {
  return `users/${userID}`;
};

export const getUserExperiencePath = (userID, expirenceID) => {
  return `user_experiences/${userID}/${expirenceID}`;
};
export const getChatRoomPath = () => {
  return `chat_rooms`;
};
export const getChatMessagesPath = (chatId) => {
  return `chat_messages/${chatId}`;
};
export const getMyMeetingsPath = () => {
  return `meeting_slots`;
};
export const getMyMeetingSlotPath = (slotID) => {
  return `meeting_slots/${slotID}`;
};

export const getMyMeetingSlotStatusPath = (slotID) => {
  return `meeting_slots/${slotID}/status`;
};

export const getOpenPositionPath = (jobID) => {
  return `job_listings/${jobID}`;
};
export const getExclusionPath = (userID, exclusionEntryID) => {
  return `exclusion/${userID}/${exclusionEntryID}`;
};

export const getSwipeRecapPath = (userID, swipeRecapEntryID) => {
  return `swipe_recap/${userID}/${swipeRecapEntryID}`;
};

export const getPotentialMatchPath = (potentialMatchEntryID) => {
  return `potential_match/${potentialMatchEntryID}`;
};

export const getChatRoomsPath = (id) => {
  return `/chat_rooms/${id}`;
};

export const getMeetingsSlotPath = (id) => {
  return `/meeting_slots/${id}`;
};

export const getExclusion1Path = (userId, id) => {
  return `/exclusion/${userId}/${id}`;
};

export const getMyMatchPathFromID = (id) => {
  return `/my_match/${id}`;
};

export const getChatMessagePath = (roomId, id) => {
  return `/chat_messages/${roomId}/${id}`;
};

export const getFeedbacksPath = (id) => {
  return `/job_feedbacks/${id}`;
};

export const getMyMatchPath = () => {
  return `/my_match/`;
};

export const getDeviceFCMTokenPath = (userID) => {
  return `/device_tokens/${userID}`;
};

export const getDeviceIDTokenPath = (userID) => {
  return `/id_token/${userID}`;
};

export const getMyMatchBadgeCountPath = (userID) => {
  return `/badge_count/my_match/${userID}`;
};
export const getSubscriptionPurchaseInfo = (userID) => {
  return `/subscriptions/${userID}`;
};
