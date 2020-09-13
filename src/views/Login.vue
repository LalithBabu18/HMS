<template>
  <div>
    <div>
      <div v-if="accountFlag">{{ accountFlag }}</div>
      <div class="notification notification--error" v-if="loginFlag == false">
        Now that your login flag is:
        <b>{{ loginFlag }}</b>, please retry to login again
      </div>

      <div
        v-if="accountFlag"
        class="notification notification-success"
      >Now that your account is created, you can log in here.</div>

      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">Login</h1>
            <form action>
              <div class="form-group">
                <label>User Name</label>
                <input
                  typeof="User Name"
                  id="email"
                  type="text"
                  placeholder="email"
                  v-model="email"
                  ref="User Name"
                  required
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  ref="password"
                  v-model="password"
                  required
                  class="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <!-- <button
            @click="login"
            class="btn btn-primary btn-block"
          >
            Login
              </button>-->
            </form>
            <button
              color="primary"
              expand="full"
              @click="login"
              class="btn btn-primary btn-block"
            >Log In</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import account from "@/store/module-account"; // just for explaining

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },
  // created() {
  //   this.$store.dispatch();
  // },
  computed: {
    /* accountFlag() {
      return account.state.accountFlag;
    } */
    ...mapState("account", {
      accountFlag: state => state.accountFlag,
      loginFlag: state => state.loginFlag
    })
  },
  methods: {
    ...mapActions("account", ["login"]),
    login() {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("account/login", payload, { root: true });
    }
  }
};
</script>

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
</style>
