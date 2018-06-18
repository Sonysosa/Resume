<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="card">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 class="card-head">Login Here!! </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="text" v-model="email"  name="email" placeholder="Email" id="email">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="password" v-model="password"  name="password" placeholder="Password" id="password">
          </div>
        </div>
        <div class="row ">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p class="button"  v-on:click="logIn()">Login</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn: function () {
      var eLog = this.email
      var pLog = this.password
      var emailLog = this.$localStorage.get('ekey')
      var passwordLog = this.$localStorage.get('pkey')
      if (eLog === emailLog && pLog === passwordLog) {
        alert('login Successfully')
        this.$router.push({path: '/account'})
      } else {
        alert('Please check Your email and password')
      }
    }
  }
}
</script>
<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin-left: 700px;
  transition: 0.2s;
  width: 30%;
  margin-top: 130px;
  background-color: #fff;
  height: 350px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-head {
  text-align: center;
  font-size: 2em;
  color: #f70776;
  padding-top: 20px;
  font-family: 'Libre Baskerville', serif;
}

#email {
  margin-top: 25px;
  margin-left: 3px;
  border: 1px solid #d4d6c8;
  font-size: 1.5em;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 62%;
  font-family: 'Libre Baskerville', serif;
}

#password {
  margin-top: 25px;
  margin-left: 65px;
  border: 1px solid #d4d6c8;
  font-size: 1.5em;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 62%;
  font-family: 'Libre Baskerville', serif;
}

.button {
  width: 62%;
  background-color: #f70776;
  margin-left: 65px;
  padding-top: 3px;
  margin-top: 25px;
  text-align: center;
  height: 35px;
  color: white;
  font-size: 1.3em;
  cursor: pointer;
  font-family: 'Libre Baskerville', serif;
}
</style>
