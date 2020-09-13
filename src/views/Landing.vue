<template>
  <div>
    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <center>
          <a class="navbar-brand ml-12" href="#">Welcome To DCF</a>
        </center>
      </nav>
    </div>
    <b-card>
      <b-list-group flush>
        <b-list-group-item
          ><router-link class="dec" to="/SelectYourFacilities"
            >YourFacilities</router-link
          ></b-list-group-item
        >
        <b-list-group-item
          ><router-link class="dec" to="/Dashboard"
            >Dashboard</router-link
          ></b-list-group-item
        >
        <!-- <b-list-group-item
          ><router-link class="dec" to="/Welcome"
            >ReportsHistory</router-link
          ></b-list-group-item
        > -->
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {}
};
</script>

<style>
.navbar-brand {
  padding-left: 20px;
}
.dec {
  text-decoration: none;
}
</style>
