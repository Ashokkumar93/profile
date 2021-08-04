<template>
  <section class="posts section">
    <section class="head gary-color head-text">
      LATEST POSTS
    </section>
    <section class="content gary-color text-lg">
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <h4>
            <a :href="post.link ? post.link : 'javascript:void(0)'" target="_blank" class="main-color">{{post.title}}</a>
          </h4>
          <p>
            {{post.description}}
          </p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import posts  from "@/data/posts"
export default {
  name: 'Posts',
  data(){
    return {
      posts
    }
  }
}
</script>
