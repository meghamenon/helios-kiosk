<template>

<div id="app">
    <div class="d-flex justify-content-center align-items-center container ">  
      <div class="row">
        <form v-if="!submitted">
        <h1>Welcome!</h1>
          <div class="form-group">
              <label for="first" class="control-label">First</label>
              <input type="text" class="form-control" v-model="user.fname" required>
              <label for="last" class="control-label">Last</label>
              <input type="text" class="form-control" v-model="user.lname"required>
              <label for="email" class="control-label">Email</label>
              <input type="text" class="form-control" v-model="user.email"required>
            </div>
            <button class="btn btn-primary" v-on:click.prevent="post">Enter</button>
        </form>
    </div>
  </div>
  <div v-if="submitted">
    <h1>Thank You</h1>
    <button class="btn btn-primary"><a class="again" href="/">Start Again!</a></button>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
        user: {
            fname: "",
            lname: "",
            email: ""
        },
        submitted: false,
      }
    },
    methods: {
      post: function(){
        this.$http.post("https://helios-request-bin.herokuapp.com/1i9kdky1", 
        {
          firstname: this.user.fname,
          lastname: this.user.lname,
          email: this.user.email

        }).then(function(data){
            console.log(data);
            this.submitted = true;
        }).catch(function(err){
          console.log(err);
        })
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
