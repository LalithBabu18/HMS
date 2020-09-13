<template>
  <div>
    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <center>
          <i @click="button" class="fa fa-arrow-left" aria-hidden="true"></i>

          <a class="navbar-brand ml-5" href="#">Entry Facilities</a>
        </center>
      </nav>
    </div>
    <!-- <h1>Date:{{date}}</h1> -->

    <div class="flex flex-wrap row ml-4 mr-4 mt-5 mb-5">
      <form class="w-full max-w-md">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="date">Date</label>
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="date"
              v-model="Submit.date"
              type="date"
              value
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="totalPatients"
            >Total Patients</label>
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="totalPatients"
              v-model="Submit.totalPatients"
              type="number"
              value
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="emptyBeds">Empty Beds</label>
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="emptyBeds"
              type="number"
              v-model="Submit.emptyBeds"
              placeholder
            />
          </div>
        </div>
        <!-- <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="availableIcuBeds"
              >Available ICU Beds</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="availableIcuBeds"
              v-model="Submit.availableIcuBeds"
              type="number"
              placeholder
            />
          </div>
        </div>-->
        <!-- <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="availableVentillators"
              >Available Ventillators</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="availableVentilators"
              v-model="Submit.availableVentillators"
              type="number"
              placeholder
            />
          </div>
        </div>-->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="discharged">Discharged</label>
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="discharged"
              v-model="Submit.discharged"
              type="number"
              placeholder
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="admitted">Admitted</label>
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="admitted"
              type="number"
              v-model="Submit.admitted"
              placeholder
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="nextDayDischargedExpected"
            >Expected Discharge Tomorrow</label>
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="nextDayDischargedExpected"
              type="number"
              v-model="Submit.expectedDischargeTom"
              placeholder
            />
          </div>
        </div>
        <!-- <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="totalPatientsDialled"
              >Total Patients Dialled</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="totalPatientsDialled"
              type="number"
              v-model="Submit.totalPatientsDialled"
              placeholder
            />
          </div>
        </div>-->
        <!-- <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="notConnected"
              >Not Conneted</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="notConnected"
              type="number"
              v-model="Submit.notConnected"
              placeholder
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="totalPatientsAnswered"
              >Total Patients Answered</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="totalPatientsAnswered"
              type="number"
              v-model="Submit.totalPatientsAnswered"
              placeholder
            />
          </div>
        </div>-->

        <!-- <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="critical"
              >Critical</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="critical"
              v-model="Submit.critical"
              type="number"
              placeholder
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="nonCritical"
              >Non Critical</label
            >
        </div>-->
        <!-- <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="nonCritical"
              v-model="Submit.nonCritical"
              type="number"
              placeholder
            />
        </div>-->
        <!-- </div> -->
        <!-- <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="otherResponses"
              >Other Responses</label
            >
        </div>-->
        <!-- <div class="md:w-2/3">
            <input-
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="otherResponses"
              v-model="Submit.otherResponses"
              type="number"
              placeholder
            />
          </div>
        </div>-->
        <!-- <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="noComplaints"
              >No Complaints</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="noComplaints"
              v-model="Submit.noComplaints"
              type="number"
              placeholder
            />
          </div>
        </div>-->
        <div class="md:w-2/3">
          <span class="block text-gray-700 text-sm font-bold mb-2">is Antigen Testing Done</span>
          <label class="radio-inline">
            <input type="radio" name="optradio" @click="fbutton(true)" checked />True
          </label>
          <label class="radio-inline" style="margin-left:30px">
            <input type="radio" name="optradio" @click="fbutton(false)" />False
          </label>
        </div>
        <!-- <span>{{isAntigenTestingDone}}</span> -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="remarks">Remarks</label>
          </div>
          <div class="md:w-2/3">
            <input
              class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="Remarks"
              v-model="Submit.remarks"
              type="text"
              placeholder
            />
          </div>
        </div>

        <button
          class="shadow float-right mx-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          @click="submitForm"
        >Submit</button>
        <!-- <button
          class="shadow float-right bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          @click="cancelForm"
        >
          Cancel
        </button>-->
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
// var moment = require('moment')
import moment from "moment";
import localforage from "localforage";
export default {
  name: "SubmitForm",
  components: {},
  data() {
    return {
      Submit: {
        totalPatients: "",
        emptyBeds: "",
        // availableIcuBeds: "",
        // availableVentillators: "",
        discharged: "",
        admitted: "",
        expectedDischargeTom: "",
        // totalPatientsDialled: "",
        // notConnected: "",
        // totalPatientsAnswered: "",
        // critical: "",
        // nonCritical: "",
        // otherResponses: "",
        // noComplaints: "",
        isAntigenTestingDone: false,
        remarks: "",
        date: new Date()
      },
      date: ""
    };
  },
  // async mounted() {
  //   this.date = moment(this.Submit.date).format("YYYY-MM-DD");
  //   console.log(this.$route.params.id);
  //   const auth_token = await localforage.getItem("my_access_token");
  //   const postBody = {
  //     method: "GET",
  //     headers: {
  //       Authorization: auth_token
  //     }
  //   };
  //   const response = await fetch(
  //     `http://localhost:8084/api/facilities/${this.$route.params.id}/latestReport`,
  //     postBody
  //   );

  //   const data = await response.json();
  //   console.log(data, "response History");
  //   this.Submit.totalPatients = data.totalPatients;
  //   this.Submit.emptyBeds = data.emptyBeds;
  //   // this.Submit.availableIcuBeds = data.availableIcuBeds
  //   // this.Submit.availableVentillators = data.availableVentillators
  //   this.Submit.discharged = data.discharged;
  //   this.Submit.admitted = data.admitted;
  //   this.Submit.expectedDischargeTom = data.expectedDischargeTom;
  //   // this.Submit.totalPatientsDialled = data.totalPatientsDialled
  //   // this.Submit.notConnected = data.notConnected
  //   // this.Submit.totalPatientsAnswered = data.totalPatientsAnswered
  //   // this.Submit.critical = data.responseSummary.critical
  //   // this.Submit.nonCritical = data.responseSummary.nonCritical
  //   // this.Submit.otherResponses = data.responseSummary.otherResponses
  //   // this.Submit.noComplaints = data.responseSummary.noComplaints
  //   this.Submit.remarks = data.remarks;
  // },
  methods: {
    button() {
      router.go(-1);
    },
    fbutton(value) {
      this.isAntigenTestingDone = value;
      console.log(value);
    },

    async submitForm() {
      let newForm = {
        totalPatients: this.Submit.totalPatients,
        emptyBeds: this.Submit.emptyBeds,
        // availableIcuBeds: this.Submit.availableIcuBeds,
        // availableVentillators: this.Submit.availableVentillators,
        discharged: this.Submit.discharged,
        admitted: this.Submit.admitted,
        expectedDischargeTom: this.Submit.expectedDischargeTom,
        // totalPatientsDialled: this.Submit.totalPatientsDialled,
        // notConnected: this.Submit.notConnected,
        // totalPatientsAnswered: this.Submit.totalPatientsAnswered,
        // critical: this.Submit.critical,
        // nonCritical: this.Submit.nonCritical,
        // otherResponses: this.Submit.otherResponses,
        // noComplaints: this.Submit.noComplaints,
        remarks: this.Submit.remarks,
        isAntigenTestingDone: this.isAntigenTestingDone,

        reportDate: moment(this.Submit.date).format("YYYY-MM-DDThh:mm:ss.SSSZ")
      };
      //   let date=  moment(this.Submit.date).format("YYYY-MM-DD hh:mm");
      this.date = moment(this.Submit.date).format("YYYY-MM-DD");
      // console.log(newDate);
      if (
        newForm.totalPatients != "" &&
        newForm.emptyBeds != "" &&
        newForm.discharged != "" &&
        newForm.admitted != "" &&
        newForm.expectedDischargeTom != "" &&
        newForm.isAntigenTestingDone != "" &&
        newForm.reportDate != "" &&
        this.date
      ) {
        const auth_token = await localforage.getItem("my_access_token");
        let token = String(auth_token);

        const postBody = {
          method: "POST",
          body: JSON.stringify(newForm),
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
        };

        console.log(postBody);
        const response = await fetch(
          `http://localhost:8084/api/facilities/${this.$route.params.id}/latestReport`,
          postBody
        );
        console.log(response, "updated");

        const data = await response.json();
        if (!data.error) {
          alert("Report added");
          router.push("/Landing");
        }
      } else {
        alert("Please enter all details");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navbar-brand {
  margin-left: 35%;
}
.fa {
  font-size: 25px;
  color: #fff;
}
</style>
