const TOKEN_KEY = 'token';

function getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
    sessionStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
    sessionStorage.removeItem(TOKEN_KEY);
}

function decodeToken(token) {
    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const json = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(json);
    } catch {
        return null;
    }
}

function isTokenValid() {
    const token = getToken();
    if (!token) return false;
    const payload = decodeToken(token);
    if (!payload || !payload.exp) return false;
    return payload.exp * 1000 > Date.now();
}

function getRoles() {
    const payload = decodeToken(getToken() || '');
    return (payload && payload.roles) || [];
}

function redirectByRole() {
    window.location.href = getRoles().includes('admin') ? '/admin/dashboard' : '/dashboard';
}

function logout() {
    clearToken();
    window.location.href = '/signIn';
}

// Protege una página: valida token y roles. Si el token expira con la página abierta, cierra sesión.
function requireAuth(allowedRoles = []) {
    if (!isTokenValid()) {
        logout();
        return false;
    }

    if (allowedRoles.length > 0 && !getRoles().some(r => allowedRoles.includes(r))) {
        window.location.href = '/403';
        return false;
    }

    const exp = decodeToken(getToken()).exp * 1000;
    setTimeout(logout, exp - Date.now());
    return true;
}

// fetch que agrega el token y maneja errores
async function apiFetch(url, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(url, { ...options, headers });

    if (res.status === 401 && token) {
        logout();
        throw new Error('Sesión expirada');
    }

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Error en la solicitud');
    return data;
}