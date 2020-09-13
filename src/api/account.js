/* eslint-disable prettier/prettier */

export default class Account {
    constructor() {
        // it loads Vue.prototype.$API_BASE_URI bit late, had to setTimeout for it, possible fix
        setTimeout(() => {
            // this.baseUri = Vue.prototype.$API_BASE_URI;
            // console.log(this.baseUri);
        }, 100);
    }

    async login(payload) {
        console.log("about to fetch...");
        const postBody = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = await fetch(
            `http://localhost:8084/api/users/login`,
            postBody
        );
        const data = await response.json();
        // console.log(data);
        return data;
    }
}