import * as actionTypes from "./actions";
import Axios from "../../resources/api";

export const getDoctors = (pageNo, size) => {
	console.log("get doctors actioncreator");
	return (dispatch) =>
		Axios.post("/admin/doctors/searchlite", {
			match: JSON.stringify({}),
			pageNo: pageNo,
			size: size,
			name: ""
		}).then((result) => {
			console.log("Data got", result.data.data);
			dispatch({
				type: actionTypes.GET_DOCTORS,
				payload: result.data.data,
			});
		}).catch(console.log)
};
export const pagination = (pageNo, size) => {
	console.log("g");
	return (dispatch) =>
		Axios.post("/admin/doctors/searchlite", {
			match: JSON.stringify({}),
			pageNo: pageNo,
			size: size,
		}).then((result) => {
			console.log("Data got", result.data.data);
			dispatch({
				type: actionTypes.PAGE_HANDLER,
				payload: result.data.data,
				pageNo: pageNo,
				size: size,
			});
		});
};
