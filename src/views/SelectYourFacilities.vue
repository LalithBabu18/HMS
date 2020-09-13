<template>
  <div>
    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <center>
          <i @click="button" class="fa fa-arrow-left" aria-hidden="true"></i>

          <a class="navbar-brand ml-5" href="#">Select Facilities</a>
        </center>
      </nav>
    </div>

    <div>
      <div>
        <!-- <nav class="navbar fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Facilities</a>
        </nav>-->
      </div>
      <b-card>
        <b-list-group flush>
          <b-list-group-item v-for="post in myFacilities" :key="post.id">
            <button :value="post.id" @click="viewFacility(post.id)">{{ post.name }}</button>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import User from "@/api/user.js";
const userReports = new User();
export default {
  name: "SelectYourFacilities",
  components: {},
  data() {
    return {
      myFacilities: {},
      value: ""
    };
  },
  mounted() {
    userReports.getFacilities().then(resp => {
      console.log(resp, "select facilities");

      if (!resp.error) {
        this.myFacilities = resp;
      } else {
        console.log("error in getting reportsHistory");
      }
    });
  },

  methods: {
    viewFacility(value) {
      console.log(this.myFacilities.id);
      this.value = value;
      console.log(value);

      router.push("/Facilities/" + value);
    },
    button() {
      router.go(-1);
    }
  }
};
</script>

<style>
.fa {
  font-size: 25px;
  color: #fff;
}
</style>
