import theme from "./../theme.json"

export const msgAction = msg => {
    return {
        type: "msg",
        payload: msg
    }
}

export const themeAction = theme => {
    return {
        type: "theme",
        payload: theme
    }
}

export const userLoginAction = (payload, silent) => {
    return {
        type: "login",
        payload: payload,
        silent: silent
    }
}

export const userLogoutAction = payload => {
    return {
        type: "logout",
        payload: payload
    }
}

let defaultState = { role_createur: false, theme: theme, msg: "" }
export const appReducer = (state = defaultState, action) => {
    if (action.type === "login") {
        let msg = ""
        if (!action.silent)
            msg = action.payload
                ? "Connexion effectuée avec succès"
                : "Erreur lors de la connexion"
        return { ...state, role_createur: action.payload, msg: msg }
    }

    if (action.type === "logout") {
        let msg = action.payload
            ? "Déconnexion effectuée avec succès"
            : "Erreur lors de la déconnexion"
        return { ...state, role_createur: false, msg: msg }
    }

    if (action.type === "msg") return { ...state, msg: action.payload }

    if (action.type === "theme")
        return { ...state, theme: { ...state.theme, ...action.payload } }

    return state
}
