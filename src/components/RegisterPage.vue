<template> 
    <h1 class="text-center text-xl mt-4">Register</h1> 
    <div class="flex justify-center items-center mt-10">
      <div class="w-full max-w-xl">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12">
          <div class="identity-input mb-4">
            <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              id="identity"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              aria-describedby="emailHelp"
              v-model="email"
            />
            <span class="text-xs text-red-700" id="emailHelp"></span>
          </div>
  
          <div class="password-input mb-6">
            <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">
                Fullname
            </label>
            <input
              aria-describedby="fullnameHelp"
              v-model="fullname"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              placeholder="fullname"
              type="text"
            />
            <span class="text-xs text-red-700" id="passwordHelp"></span>
          </div>

          <div class="password-input mb-6">
            <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">
                Create Password
            </label>
            <input
              aria-describedby="passwordHelp"
              v-model="password"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*******"
            />
            <span class="text-xs text-red-700" id="passwordHelp"></span>
          </div>
  
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" @click="onRegister"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  
<script setup>
    import api from '../api';


</script>

<script>
export default {
    name:'RegisterPage',
    methods: {
      onRegister() { 
        const data  = { email: this.email, fullname: this.fullname, password: this.password };
        api.post("/api/v1/user", data).then(
            response => {
                if(response.data.status == 'failed') {
                   alert(response.data.data.validation_mesage)
                } else {
                    alert(response.data.message)
                    this.$router.push('home'); 
                }
            }
        ).catch(err => {
            alert(err)    
        })
      }  
    }
  }
  </script>
  
  
  