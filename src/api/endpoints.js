const API_URL = import.meta.env.VITE_API_BASE_URL

export const ENDPOINTS_SORTED = {
    auth: {
        login:`${API_URL}/login`,
        create: `${API_URL}/users`
    },
    users: {
        all: `${API_URL}/users`,
        byId: (id) => `${API_URL}/users/${id}`
    }

}
export const ENDPOINTS = {
    LOGIN: `${API_URL}/login`,
    GET_ALL_USERS: `${API_URL}/users`,
    GET_USER_BY_ID: `${API_URL}/`,
    CREATE_NEW_USER: `${API_URL}/users`
}
