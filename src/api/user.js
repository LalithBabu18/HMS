/* eslint-disable prettier/prettier */
import Vue from "vue";
import localforage from "localforage";

export default class User {
    constructor() {
        setTimeout(() => {
            this.baseUri = Vue.prototype.$API_BASE_URI;
        }, 100);
    }

    // async getReportHistory() {
    //     const auth_token = await localforage.getItem("my_access_token");
    //     const postBody = {
    //         method: "GET",
    //         headers: {
    //             Authorization: auth_token
    //         }
    //     };
    //     const response = await fetch(
    //         `http://localhost:8084/api/facilities/${}/reportHistory`,
    //         postBody
    //     );

    //     const data = await response.json();
    //     console.log(data, "response History")
    //     return data;
    // }
    async getFacilities() {
        const auth_token = await localforage.getItem("my_access_token");
        const postBody = {
            method: "GET",
            headers: {
                Authorization: auth_token
            }
        };
        const response = await fetch(
            `http://localhost:8084/api/users/me/facilities`,
            postBody
        );

        const data = await response.json();
        console.log(data, "response History")
        return data;
    }
    async reportGraph() {
        let data = []
        const auth_token = await localforage.getItem("my_access_token");
        const postBody = {
            method: "GET",
            headers: {
                Authorization: auth_token
            }
        };
        const response = await fetch(
            `http://localhost:8084/api/users/me/reports`,
            postBody
        );
        console.log(response);

        data = await response.json();
        console.log(data, "totalreportHistory");
        return data

    }

    validateEmail(email) {
        var emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(emailFormat)) {
            //if (email.substring(0, email.lastIndexOf('@')).includes('.')) return true;
            return true;
        }
        return false;
    }

}