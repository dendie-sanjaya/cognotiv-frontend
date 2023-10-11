<script setup>
    import { ref, onMounted } from 'vue';
    import api from '../api';
    const posts = ref([]);

    const fetchDataPosts = async () => {
        await api.get('/api/v1/blog')
        .then(response => {
          posts.value = response.data.data
        });
    }

    onMounted(() => {
        fetchDataPosts();
    });
</script>

<template>
  <div id="home" >
    <h1 class="text-center text-xl mt-4">Home</h1> 
    <h1 class="text-center text-xl mt-4" v-if="posts.length < 1 ">Blog is Empty</h1> 
    
    <main class="container px-8 pt-24 mx-auto lg:px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="px-8 py-6 rounded-md bg-white shadow"  v-for="(post, index) in posts" :key="index">
        <figure>
          <img
            class="object-cover object-center w-full h-40 mb-6 rounded"
            src="http://via.placeholder.com/250x250"
            alt=""
          />
        </figure>
        <h2 class="mb-3 text-lg lg:text-2xl">{{ post.title }}</h2>
        <p class="mb-4 leading-relaxed">
          {{ post.content }}
        </p>
        <p class="mb-4 leading-relaxed">
          {{ post.publish_date }}
        </p>

        <router-link to="/belog/detail?id={{id: post.id}}"  class="inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-400">Read More</router-link>
      </div>
  
           
    </main>  
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
