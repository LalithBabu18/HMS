<template>
  <div>
    <!-- <Header /> -->
    <div>
     <nav class="navbar fixed-top navbar-dark bg-success">
     <center> <b-icon
          @click="button"
          icon=" arrow-left-circle-fill"
          width="1.5em"
          height="1.5em"
          class="bg-light mr-10"
        ></b-icon>
      
        <a class="navbar-brand ml-5" href="#">Facilities</a>
      </center>
    </nav>
   </div>
    <div id="app" v-for="post in myReports" :key="post.id">
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg mx-10 my-10">
        <div>
          <p class="text-black-600">
            Total Patients :
            <span class="float-right">{{ post.totalPatients }}</span>
          </p>
          <p class="text-black-600">
            Empty Beds :
            <span class="float-right">{{ post.emptyBeds }}</span>
          </p>
          <p class="text-black-600">
            Available ICU Beds:
            <span class="float-right">{{ post.availableIcuBeds }}</span>
          </p>
          <p class="text-black-600">
            Available ICU Ventilators:
            <span class="float-right">{{ post.availableVentillators }}</span>
          </p>
          <p class="text-black-600">
            Discharged:
            <span class="float-right">{{ post.discharged }}</span>
          </p>
          <p class="text-black-600">
            Admitted:
            <span class="float-right">{{ post.admitted }}</span>
          </p>
          <p class="text-black-600">
            Next Day Discharged Expected:
            <span class="float-right">{{ post.nextDayDischargeExpected }}</span>
          </p>
          <p class="text-black-600">
            Total Patients Dialled:
            <span class="float-right">{{ post.totalPatientsDialled }}</span>
          </p>
          <p class="text-black-600">
            Not Connected:
            <span class="float-right">{{ post.notConnected }}</span>
          </p>
          <p class="text-black-600">
            Total Patients Answered:
            <span class="float-right">{{ post.totalPatientsAnswered }}</span>
          </p>
          <p class="text-black-600">
            Critical:
            <span class="float-right">{{ post.critical }}</span>
          </p>
          <p class="text-black-600">
            Non critical:
            <span class="float-right">{{ post.nonCritical }}</span>
          </p>
          <p class="text-black-600">
            Other Responses:
            <span class="float-right">{{ post.otherResponses }}</span>
          </p>
          <p class="text-black-600">
            No Complaints:
            <span class="float-right">{{ post.noComplaints }}</span>
          </p>
          <p class="text-black-600">
            Remarks:
            <span class="float-right">{{ post.remarks }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import localforage from "localforage";
import router from "@/router";

export default {
    name: "YourFacilities",
     data() {
    return {
      myReports: {}
    };
  },
  methods:{
  button(){
    router.go(-1)
  }
},
     async mounted(){
      console.log(this.$route.params.id)
        const auth_token = await localforage.getItem("my_access_token");
        const postBody = {
            method: "GET",
            headers: {
                Authorization: auth_token
            }
        };
        const response = await fetch(
            `http://localhost:8084/api/reports/facilities/${this.$route.params.id}`,postBody );
console.log(response);

        const data = await response.json();
        console.log(data,"reportFacilities");
        
         if (data) {
        this.myReports = data;
      } else {
        console.log("error in getting latest reports");
      }
      }
}
</script>

<style>
.navbar-brand {
  margin-left: 0;
}
</style