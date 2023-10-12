<script setup>
    import { ref, onMounted } from 'vue';
    import {useRoute} from "vue-router";
    import api from '../api';
    const posts = ref([]);
    const comments = ref([]);   

    const fetchDataPosts = async () => {
        const route = useRoute();
        const id = route.params.id;
        await api.get('/api/v1/blog/'+id)
        .then(response => {
          posts.value = response.data.data
        });
 
        await api.get('/api/v1/blogcomment/'+id)
        .then(response => {
           comments.value = response.data.data
        });
    }

    onMounted(() => {
        fetchDataPosts();
    });
</script>

<template>
  <div id="blogDetail" >
    <h1 class="text-center text-xl mt-4">Blog Detail</h1> 
    <main class="container px-8 pt-24 mx-auto lg:px-4  md:grid-cols-3 gap-4">
      <div class="px-8 py-6 rounded-md bg-white shadow"  >
        <figure>
          <img
            class="object-cover object-center w-full h-40 mb-6 rounded"
            src="http://via.placeholder.com/250x250"
            alt=""
          />
        </figure>
        <h2 class="mb-3 text-lg lg:text-2xl">{{ posts.title }}</h2>
        <p class="mb-4 leading-relaxed">
            {{ posts.content }}
        </p>
        <p class="mb-4 leading-relaxed">
            {{ posts.publish_date }}
        </p>
      </div>    
    </main> 
     
    <main class="container px-8 pt-24 mx-auto lg:px-4 grid ">
      <h2 class="mb-3 text-lg lg:text-2xl">Comment</h2>
      <div class="x-8 py-6 rounded-md bg-white shadow"  v-for="(comment, index) in comments" :key="index">
        <h2 class="mb-3 text-lg lg:text-2xl">{{ comment.fullname }}  :: {{ comment.created_at }}</h2>
        <p class="mb-4 leading-relaxed">
          {{ comment.comment }}
        </p>
      </div> 
    </main> 

    <main class="container px-8 pt-24 mx-auto lg:px-4  md:grid-cols-3 gap-4">
        <div class="content-input mb-6">
            <label for="content" class="block text-gray-700 text-sm font-bold mb-2">
                <h2 class="mb-3 text-lg lg:text-2xl">Comment</h2>
            </label>
            <textarea
                aria-describedby="commentHelp"
                v-model="content"
                class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                placeholder="comment"
                type="text"
                style="height: 100px;"
            />
            <span class="text-xs text-red-700" id="contentHelp"></span>
        </div>  
        <div class="flex items-center justify-between">
            <button
              class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" @click="onSendComment"
            >
              Send Comment
            </button>
        </div>
    </main>     
  </div>
</template>

<script>
export default {
  name: 'BlogDetailPage',
}
</script>
