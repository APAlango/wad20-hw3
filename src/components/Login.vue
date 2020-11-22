<template>
  <section class="login-page">
      <section id="login-container">
        <div>
          <h1>Welcome to postIt!</h1>
        </div>
        <div>
          <h4>
            <router-link to="/home"><a>Create an Account</a></router-link>
          </h4>
        </div>
        <div>
          <h4>Or</h4>
        </div>
        <div>
          <h3>Please Log In</h3>
          <form @submit.stop.prevent="submit" method="post">
            <div>
              <input type="text" name="email" placeholder="Email">
            </div>
            <div>
              <input type="password" name="password" placeholder="Password">
            </div>
            <div>
              <button class="button" type="submit" name="login">Log In</button>
            </div>
            <div>
              <small>
                <router-link to="/home"><a>Forgot password?</a></router-link>
              </small>
            </div>
          </form>
        </div>
      </section>
    </section>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$router.push("/home");
    }
  }

}
</script>

<style>
.login-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login-container {
    background-image: url(../media/logo.png);
    background-size: 20% auto;
    background-repeat: no-repeat;
    background-position: 15px 15px;
    min-width: 25%;
    padding: 45px 45px;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    text-align: center;
}

#login-container form div > input {
    padding: 8px 16px;
    margin: 4px 0;
}
</style>