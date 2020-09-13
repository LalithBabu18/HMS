<template>
  <div>
    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <center>
          <i @click="button" class="fa fa-arrow-left" aria-hidden="true"></i>

          <a class="navbar-brand ml-5" href="#">Report Management</a>
        </center>
      </nav>
    </div>

    <div>
      <b-card>
        <b-list-group flush>
          <b-list-group-item>
            <button @click="router">Add Report</button>
          </b-list-group-item>
          <b-list-group-item>
            <button @click="router1">Latest Report</button>
          </b-list-group-item>
          <b-list-group-item>
            <button @click="router2">ReportsHistory</button>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <Footer />
  </div>
</template>

<script>
// import Footer from "@/components/Footer";
import router from "@/router";
// import userReports from "@/api/user";
export default {
  // components: { Footer },
  data() {
    return {
      myFacilities: {},
      id: ""
    };
  },
  methods: {
    button() {
      console.log("clicked");

      router.go(-1);
    },
    router() {
      this.$router.push("/SubmitForm/" + this.id);
    },
    router1() {
      this.$router.push("/ResultLatestReport/" + this.id);
    },
    router2() {
      this.$router.push("/ReportsHistory/" + this.id);
    }
  },
  mounted() {
    console.log(this.$route.params.id, "params");
    this.id = this.$route.params.id;

    // userReports.getFacilities().then(resp => {
    //   console.log(resp, "select facilities");

    //   if (!resp.error) {
    //     this.myFacilities = resp;
    //   } else {
    //     console.log("error in getting reportsHistory");
    //   }
    // });
  }
};
</script>

<style>
.fa {
  font-size: 25px;
  color: #fff;
}
</style>
