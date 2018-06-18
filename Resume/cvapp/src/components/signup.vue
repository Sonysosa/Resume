<template>
  <div class="row">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <p class="head">Create a standout resume in minutes</p>
    <p class="head1">Easily create professional resumes, online portfolios and personal landing pages</p>
     </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div class="card">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 class="card-head">SignUp Now!! </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="text" v-model="name" name="name" placeholder="Full Name" id="name">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="text" v-model="email" name="email" placeholder="Email" id="email">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           <input type="password" v-model="password" name="password" placeholder="Password" id="password">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <label class="checkbox">
            <input type="checkbox" v-on:click="checking">
            <span class="checkmark"></span>
            </label>
          </div>
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <p class="show-password">Show password</p>
          </div>
        </div>
        <div class="row ">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p class="button"  v-on:click="validation" >Signup</p>
           </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p class="footer">Already have an account? <a v-bind:href="url">Login</a></p>
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
      password: '',
      url: 'http://localhost:8081/#/Login'
    }
  },
  methods: {
    checking: function () {
      var x = document.getElementById('password')
      // alert('ahahh')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    validation: function () {
      var e = this.email
      var p = this.password
      // alert('haii')
      this.emailValidation(e)
      this.passwordValidation(p)
      this.checkValidation(e, p)
      this.storeValue(e, p)
    },
    emailValidation: function (e) {
      // alert('email validation')
      var mailformat = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
      if (e.match(mailformat)) {
        return true
      } else {
        alert('Enter a valid email address!')
        return false
      }
    },
    passwordValidation: function (p) {
      // alert('password validation')
      var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
      if (p.match(passformat)) {
        alert('your password correct')
        return true
      } else {
        alert('Password must be at least 8 -16 digits one alphabet one special character.')
        return false
      }
    },
    checkValidation: function (e, p) {
      // alert('check')
      if (this.emailValidation(e) === true && this.passwordValidation(p) === true) {
        this.$router.push({path: '/Login'})
      }
    },
    storeValue: function (e, p) {
      // alert('haii')
      this.$localStorage.set('s', true)
      this.$localStorage.set('ekey', e)
      this.$localStorage.set('pkey', p)
    }
  }
}
</script>
<style>

body {
  background-image: url('../assets/Design.jpeg');
  background-repeat:no-repeat;
  overflow: hidden;
}

.head {
  color: #f70776;
  margin-top: 200px;
  font-family: 'Josefin Slab', serif;
  font-size: 2.7em;
}

.head1 {
  color: #f70776;
  font-family: 'Josefin Slab', serif;
  font-size: 2em;
  text-align: justify;
  margin-left: 20px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin-left: 100px;
  transition: 0.2s;
  width: 60%;
  margin-top: 90px;
  background-color: #fff;
  height: 450px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-head {
  text-align: center;
  font-size: 3em;
  color: black;
  padding-top: 15px;
  font-family: 'Josefin Slab', serif;
}

#name {
  margin-top: 13px;
  margin-left: 12px;
  border: 1px solid #d4d6c8;
  font-size: 1.5em;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 67%;
  font-family: 'Josefin Slab', serif;
}

#email {
  margin-top: 13px;
  margin-left: 12px;
  border: 1px solid #d4d6c8;
  font-size: 1.5em;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 67%;
  font-family: 'Josefin Slab', serif;
}

#password {
  margin-top: 15px;
  margin-left: 12px;
  border: 1px solid #d4d6c8;
  font-size: 1.5em;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 67%;
  font-family: 'Josefin Slab', serif;
}

.button {
  width: 67%;
  background-color: #f70776;
  margin-left: 72px;
  padding-top: 3px;
  margin-top: 10px;
  text-align: center;
  height: 37px;
  color: white;
  font-size: 1.7em;
  cursor: pointer;
  font-family: 'Josefin Slab', serif;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 28px;
  width: 28px;
  background-color: #f1f2f2;
  margin-left: 100px;
  margin-top: 5px;
}

.checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

.checkbox input:checked ~ .checkmark {
  background-color: #f70776;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.show-password {
  margin-top: 15px;
  font-size: 1.3em;
  font-family: 'Libre Baskerville', serif;
  float: left;
  color: black;
}

.footer {
  font-size: 1.2em;
  margin-left: 10px;
  color: black;
  margin-top: 10px;
}
</style>
