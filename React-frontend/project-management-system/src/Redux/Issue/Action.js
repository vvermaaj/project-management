import * as actionTypes from "./ActionTypes";
import api from "@/config/api";

// action for fetching issue

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
        try {
            const response = await api.get(`api/issues/project/${id}`);
            console.log("fetch issues", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};

// action for fetching issue by id

export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST });
        try {
            const response = await api.get(`api/issues/${id}`);
            console.log("fetch issue by id", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
                error: error.message,
            });
        }
    };
};

// action for updating issue status

export const updateIssueStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
        try {
            const response = await api.put(`/api/issues/${id}/status/${status}`);
            console.log("update issue status", response.data);
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
                error: error.message,
            });
        }
    };
};

// action for creating issue

export const createIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
        try {
            const response = await api.post("/api/issues", issueData);
            
            dispatch({
                type: actionTypes.CREATE_ISSUE_SUCCESS,
                issue: response.data,
            });
            console.log("Issue created successfully ", response.data);
        } catch (error) {
            dispatch({
                type: actionTypes.CREATE_ISSUE_FAILURE,
                error: error.message,
            });
        }
    };
};

// action for deleting issue///this I only made

export const deleteIssue = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
        try {
            await api.delete(`api/issues/${id}`);

            dispatch({
                type: actionTypes.DELETE_ISSUE_SUCCESS,
                issueId: id, // Make sure to pass `issueId`, not `issues`
            });

            console.log("Issue deleted successfully", id);
        } catch (error) {
            dispatch({
                type: actionTypes.DELETE_ISSUE_FAILURE,
                payload: error.message,
            });
        }
    };
};

// action for assigning user to issue

export const assignUserToIssue = ({issueId, userId}) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST });
        try {
            const response = await api.put(`api/issues/${issueId}/assignee/${userId}`);
            console.log("assigned issue --- ", response.data);
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            console.log("error", error)
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error: error.message,
            });
        }
    };
};
