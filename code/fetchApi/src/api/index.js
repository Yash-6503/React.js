
export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
    });

    return await response.json();
}

export const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
    });
    return await res.json();
}

export const getUserById = async (id) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "GET",
    });

    return await resp.json();
}

export const getProductById = async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "GET",
    });

    return await resp.json();
}


export const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
    });
    return await res.json();
}
