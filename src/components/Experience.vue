<template>
  <section class="experience section">
    <section class="head gary-color head-text">
      EXPERIENCE
    </section>
    <section class="content gary-color text-lg">
      <ul>
        <li v-for="(experience, index) in experiences" :key="index">
          <h4>
            <a  :href="experience.projectLink ? experience.projectLink : 'javascript:void(0)'" target="_blank" class="main-color">{{experience.company}}</a>
          </h4>
          <p>
            {{experience.jobTitle}}, {{experience.startTime}} - {{experience.endTime}}
          </p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import experiences  from "@/data/experiences"
export default {
  name: 'Experience',
  data(){
    return {
      experiences
    }
  }
}
</script>
