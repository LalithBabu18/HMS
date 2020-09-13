<template>
  <div>
    <div>
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Facilities</a>
      </nav>
    </div>
    <b-card>
      <b-list-group flush>
        <b-list-group-item v-for="post in myFacilities" :key="post.id"
          ><button :value="post.id" @click="getLatestReport(post.id)">
            {{ post.name }}
          </button></b-list-group-item
        >
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import router from "@/router";
import User from "@/api/user.js";
const userReports = new User();
export default {
  name: "SelectReportHistory",
  components: {},
  data() {
    return {
      myFacilities: {}
    };
  },
  mounted() {
    userReports.getFacilities().then(resp => {
      console.log(resp, "hiiiii");

      if (!resp.error) {
        this.myFacilities = resp;
      } else {
        console.log("error in getting reportsHistory");
      }
    });
  },

  methods: {
    getLatestReport(value) {
      console.log(value);

      router.push("/ReportsHistory/" + value);
    }
  }
};
</script>

<style></style>
