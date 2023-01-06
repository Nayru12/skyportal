import messageHandler from "baselayer/MessageHandler";

import * as API from "../API";
import store from "../store";

const FETCH_SUMMARYS = "skyportal/FETCH_SUMMARYS";
const FETCH_SUMMARYS_OK = "skyportal/FETCH_SUMMARYS_OK";

const REFRESH_SUMMARYS = "skyportal/REFRESH_SUMMARYS";

// const ADD_SUMMARY_USER = "skyportal/ADD_SUMMARY_USER";

// const UPDAT_SUMMARY_USER = "skyportal/UPDATE_SUMMARY_USER";

// const DELETE_SUMMARY_USER = "skyportal/DELETE_SUMMARY_USER";

// function datestringToDate(shiftList) {
//   const newShiftList = [...shiftList];
//   for (let i = 0; i < shiftList.length; i += 1) {
//     newShiftList[i].start_date = new Date(`${shiftList[i].start_date}Z`);
//     newShiftList[i].end_date = new Date(`${shiftList[i].end_date}Z`);
//   }
//   return newShiftList;
// }

// eslint-disable-next-line import/prefer-default-export
export const fetchSummarys = () => API.GET("/api/gcn_summary_historys", FETCH_SUMMARYS);

// export function addShiftUser({ userID, admin, shift_id }) {
//   return API.POST(`/api/shifts/${shift_id}/users`, ADD_SHIFT_USER, {
//     userID,
//     admin,
//     shift_id,
//   });
// }

// export const updateShiftUser = ({
//   userID,
//   admin,
//   needs_replacement,
//   shift_id,
// }) =>
//   API.PATCH(`/api/shifts/${shift_id}/users/${userID}`, UPDATE_SHIFT_USER, {
//     admin,
//     needs_replacement,
//   });

// export function deleteShiftUser({ userID, shift_id }) {
//   return API.DELETE(
//     `/api/shifts/${shift_id}/users/${userID}`,
//     DELETE_SUMMARY_USER,
//     { userID, shift_id }
//   );
// }

// Websocket message handler
messageHandler.add((actionType, payload, dispatch) => {
  if (actionType === REFRESH_SUMMARYS) {
    dispatch(fetchSummarys());
  }
});

// const reducer = (state = { shiftList: [] }, action) => {
//   switch (action.type) {
//     case FETCH_SUMMARYS_OK: {
//       const shiftList = datestringToDate(action.data);
//       return {
//         ...state,
//         shiftList,
//       };
//     }
//     default:
//       return state;
//   }
// };

// store.injectReducer("shifts", reducer);
