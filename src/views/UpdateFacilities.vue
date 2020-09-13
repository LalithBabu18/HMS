<template>
  <div>
    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <center>
          <b-icon
            @click="button"
            icon=" arrow-left-circle-fill"
            width="1.5em"
            height="1.5em"
            class="bg-light mr-10"
          ></b-icon>

          <a class="navbar-brand ml-5" href="#"> Facilities</a>
        </center>
      </nav>
    </div>
    <b-card>
      <b-list-group flush>
        <b-list-group-item v-for="post in myFacilities" :key="post.id"
          ><button :value="post.id" @click="updateFacility(post.id)">
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
  name: "updateFacilities",
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
    button() {
      router.go(-1);
    },
    updateFacility(value) {
      console.log(this.myFacilities.id);

      router.push("/SubmitForm/" + value);
    }
  }
};
</script>

<style></style>
