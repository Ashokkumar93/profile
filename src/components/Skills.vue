<template>
  <section class="skills section">
    <section class="head gary-color head-text">
      SKILLS
    </section>
    <section class="content gary-color text-lg">
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          <h4 class="main-color">
            {{skill.title}}
          </h4>
          <p>
            <template v-for="(languagesAndFramework, index) in skill.languagesAndFrameworks">
              {{languagesAndFramework}}{{skill.languagesAndFrameworks.length != index+1 ? ', ': ''}}
            </template>
          </p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import skills  from "@/data/skills"
export default {
  name: 'Skills',
  data(){
    return {
      skills
    }
  }
}
</script>
