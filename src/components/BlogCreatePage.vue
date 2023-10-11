<template> 
    <h1 class="text-center text-xl mt-4">Post Blog</h1> 
    <div class="flex justify-center items-center mt-10">
      <div class="w-full max-w-xm">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12">
          <div class="identity-input mb-4">
            <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
              aria-describedby="titleHelp"
              v-model="title"
            />
            <span class="text-xs text-red-700" id="titleHelp"></span>
          </div>
  
          <div class="content-input mb-6">
            <label for="content" class="block text-gray-700 text-sm font-bold mb-2">
                Content
            </label>
            <textarea
              aria-describedby="contentHelp"
              v-model="content"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              placeholder="content"
              type="text"
              style="height: 400px;"

            />
            <span class="text-xs text-red-700" id="contentHelp"></span>
          </div>

          <div class="status-input mb-6">
            <label for="status" class="block text-gray-700 text-sm font-bold mb-2">
                Status Publish
            </label>
            <select
              aria-describedby="statusHelp"
              v-model="status"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
            >
               <option value="yes" selected>Yes</option>
               <option vaelu="no">No</option>
            </select>

            <span class="text-xs text-red-700" id="statusHelp"></span>
          </div>

          <div class="password-input mb-6">
            <label for="publish_date" class="block text-gray-700 text-sm font-bold mb-2">
                Publish Date
            </label>
            <input
              aria-describedby="passwordHelp"
              v-model="publish_date"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="publishDate"
              type="date"
            />
            <span class="text-xs text-red-700" id="passwordHelp"></span>
          </div>
  
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" @click="onCreate"
            >
              Post Blog
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
    name:'BlogCreatePage',
    methods: {
      onCreate() { 
        const data  = { title: this.title, content: this.content, is_publish: this.status, publish_date: this.publish_date };
        api.post("/api/v1/blog", data, {token: '88d9e97efa086184ecc70a58603afc4f'} ).then(
            response => {
                if(response.data.status == 'failed') {
                   alert(response.data.data.validation_mesage)
                } else {
                    alert(response.data.message)
                    this.$router.push('/home'); 
                }
            }
        ).catch(err => {
            alert(err)    
        })
      }  
    }
  }
</script>