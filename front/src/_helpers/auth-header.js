export function authHeader () {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user')) || {}

  if (user && user.token) {
    const authHeader = user.token ? { Authorization: 'Bearer ' + user.token } : {}
    return {
      headers: {
        ...authHeader,
        'Content-Type': 'application/json'
      }
    }
  } else {
    return {}
  }
}
