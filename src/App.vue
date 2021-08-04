<template>
  <div id="app">
    <section class="profile section">
      <section class="head">
        <img src="@/assets/profile-img.png" alt="Test User">
      </section>
      <section class="content">
        <section>
          <h1>Test User</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.</p>
          <ul class="links">
            <li><a href="https://twitter.com" target="_blank">TWITTER</a></li>
            <li><a href="https://twitter.com" target="_blank">GITHUB</a></li>
            <li><a href="https://twitter.com" target="_blank">LINKEDIN</a></li>
            <li><a href="https://twitter.com" target="_blank">BLOG</a></li>
          </ul>
        </section>
      </section>
    </section> 
    <section class="about-me section">
      <section class="head gary-color head-text">
        ABOUT ME
      </section>
      <section class="content gary-color text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.
      </section>
    </section>
    <Projects/>
    <Posts/>
    <Experience/>
    <Skills/>
  </div>
</template>

<script>
import Projects from "@/components/Projects"
import Posts from "@/components/Posts"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
export default {
  name: 'App',
  components: {
    Projects,
    Posts,
    Experience,
    Skills
  }
}
</script>
