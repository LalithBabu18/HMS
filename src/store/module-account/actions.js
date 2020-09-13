/* eslint-disable prettier/prettier */
import router from "@/router";

import localforage from "localforage";

import Account from "@/api/account.js";

const accountResourceService = new Account();

// export function checkLoginStatus() {
//     localforage.getItem("my_access_token").then(token => {
//         console.log(token);
//         if (token) {
//             router.push("/Dashboard");
//         }
//     });
// }

export function login({
    commit
}, payload) {
    console.log(`%c In Store Login`, "background: lightgreen; color: black");
    //✅ fetch services from backend using api service
    //✅ commit to store
    //✅ store in indexDB
    //✅ route to homepage

    accountResourceService.login(payload).then(async resp => {
        // console.log(resp.access_token, resp.error);

        if (resp.access_token && !resp.error) {
            commit("m_loginFlag", null, {
                root: true
            });
            localforage.setItem("my_access_token", resp.access_token);
            localforage.setItem("id", resp.userId);



            router.push("/Landing");
        } else {
            commit("m_loginFlag", false);
            alert("please enter correct Username And password")
            await router.push("/");
        }
    });
}