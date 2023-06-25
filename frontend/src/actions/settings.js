import { UPDATE_SETTINGS } from  '../constants/types';

export const changeSettings = (language, country, currency) => (dispatch) => {
    console.log("Language changed");
    dispatch({
        type: UPDATE_SETTINGS,
        payload: { language, country, currency },
    });
    localStorage.setItem(
        "settings",
        JSON.stringify({ language, country, currency })
    );
};
