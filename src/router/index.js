/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard.vue";
import SubmitForm from "../views/SubmitForm";
import Welcome from "../views/Welcome";
import Landing from "../views/Landing";
import Facilities from "../views/Facilities"
import updateFacilities from "../views/UpdateFacilities"
// import SelectLatestReport from "../views/SelectLatestReport"
import SelectReportHistory from "../views/SelectReportHistory"

import ResultLatestReport from "../views/ResultLatestReport"
import ReportsHistory from "../views/ReportsHistory"
import SelectYourFacilities from "../views/SelectYourFacilities"
import YourFacilities from "../views/YourFacilities"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/Landing",
        name: "Landing",
        component: Landing
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: Login
    // },
    {
        path: "/SelectReportHistory",
        name: "SelectReportHistory",
        component: SelectReportHistory
    },

    {
        path: "/Facilities/:id",
        name: "Facilities",
        component: Facilities
    },
    {
        path: "/Welcome",
        name: "Welcome",
        component: Welcome
    },
    {
        path: "/Dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/updateFacilities",
        name: "updateFacilities",
        component: updateFacilities
    },
    {
        path: "/SubmitForm/:id",
        name: "SubmitForm",
        component: SubmitForm
    },
    {
        path: "/ResultLatestReport/:id",
        name: "ResultLatestReport",
        component: ResultLatestReport
    },
    {
        path: "/YourFacilities/:id",
        name: "YourFacilities",
        component: YourFacilities
    },
    {
        path: "/ReportsHistory/:id",
        name: "ReportsHistory",
        component: ReportsHistory

    },
    {
        path: "/SelectYourFacilities",
        name: "SelectYourFacilities",
        component: SelectYourFacilities
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;