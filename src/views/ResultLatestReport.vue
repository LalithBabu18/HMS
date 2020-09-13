<template>
  <div>
    <!-- <Header /> -->

    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <center>
          <i @click="button" class="fa fa-arrow-left" aria-hidden="true"></i>

          <a class="navbar-brand ml-5" href="#">Latest Report</a>
        </center>
      </nav>
    </div>
    <div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg mx-10 my-10">
        <div>
          <p class="text-black-600">
            Report Date :
            <span class="float-right">{{ myFacilities.reportDate }}</span>
          </p>
          <p class="text-black-600">
            Total Patients :
            <span class="float-right">{{ myFacilities.totalPatients }}</span>
          </p>
          <p class="text-black-600">
            Empty Beds :
            <span class="float-right">{{ myFacilities.emptyBeds }}</span>
          </p>
          <!-- <p class="text-black-600">
            Available ICU Beds:
            <span class="float-right">{{ myFacilities.availableIcuBeds }}</span>
          </p>
          <p class="text-black-600">
            Available ICU Ventilators:
            <span class="float-right">{{ myFacilities.availableVentillators }}</span>
          </p>-->
          <p class="text-black-600">
            Discharged:
            <span class="float-right">{{ myFacilities.discharged }}</span>
          </p>
          <p class="text-black-600">
            Admitted:
            <span class="float-right">{{ myFacilities.admitted }}</span>
          </p>
          <p class="text-black-600">
            Tomorrow Discharged Expected:
            <span class="float-right">{{
              myFacilities.expectedDischargeTom
            }}</span>
          </p>
          <!-- <p class="text-black-600">
            Total Patients Dialled:
            <span class="float-right">{{ myFacilities.totalPatientsDialled }}</span>
          </p>
          <p class="text-black-600">
            Not Connected:
            <span class="float-right">{{ myFacilities.notConnected }}</span>
          </p>
          <p class="text-black-600">
            Total Patients Answered:
        
            <span class="float-right">{{ myFacilities.callSummary.answered }}</span>
          </p>
          <p class="text-black-600">
            Critical:
            <span class="float-right">{{ myFacilities.responseSummary.critical }}</span>
          </p>
          <p class="text-black-600">
            Non critical:
            <span class="float-right">{{ myFacilities.responseSummary.nonCritical }}</span>
          </p>
          <p class="text-black-600">
            Other Responses:
            <span class="float-right">{{ myFacilities.responseSummary.otherResponses }}</span>
          </p>
          <p class="text-black-600">
            No Complaints:
            <span class="float-right">{{ myFacilities.responseSummary.noComplaints }}</span>
          </p>-->

          <p class="text-black-600">
            Remarks:
            <span class="float-right">{{ myFacilities.remarks }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import localforage from "localforage";
import router from "@/router";

import moment from "moment";

export default {
  name: "ResultLatestReport",
  data() {
    return {
      myFacilities: {}
    };
  },
  async mounted() {
    console.log(this.$route.params.id);
    const auth_token = await localforage.getItem("my_access_token");
    const postBody = {
      method: "GET",
      headers: {
        Authorization: auth_token
      }
    };
    const response = await fetch(
      `http://localhost:8084/api/facilities/${this.$route.params.id}/latestReport`,
      postBody
    );
    console.log(response);

    const data = await response.json();
    console.log(data, "LatestReport");

    if (data) {
      data.reportDate = moment(data.reportDate).format("YYYY-MM-DD");

      this.myFacilities = data;
    } else {
      console.log("error in getting latest reports");
    }
  },
  methods: {
    button() {
      router.go(-1);
    }
  }
};
</script>
