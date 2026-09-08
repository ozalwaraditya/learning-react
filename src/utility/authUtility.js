let isAuthenticated = false;
let currentUser = null;

const AUTH_KEY = "demoAuth";

try {
  const storedAuth = sessionStorage.getItem("demoAuth");

  if (storedAuth) {
    const auth = JSON.parse(storedAuth);
    console.log(auth);
  }
} catch (ex) {
  console.error("Failed to get auth state:", ex);
}

function getAuthState() {
  return { isAuthenticated, currentUser };
}

function setAuthState(auth, user = null) {
  isAuthenticated = auth;
  currentUser = user;

  try {
    sessionStorage.setItem(
      AUTH_KEY,
      JSON.stringify({ isAuthenticated, currentUser }),
    );
  } catch (ex) {
    console.error("Failed to save auth state:", ex);
  }
}

function hasRole(role) {
  return currentUser?.role == role;
}

function logout() {
  try {
    sessionStorage.removeItem(AUTH_KEY);

    isAuthenticated = false;
    currentUser = null;
  } catch (ex) {
    console.error("Failed to logout:", ex);
  }
}

export { getAuthState, setAuthState, hasRole, logout };
