<template>
  <section class="projects section">
    <section class="head gary-color head-text">
      PROJECTS
    </section>
    <section class="content gary-color text-lg">
      <ul>
        <li v-for="(project, index) in projects" :key="index">
          <h4>
            <a :href="project.link ? project.link : 'javascript:void(0)'" target="_blank" class="main-color">{{project.title}}</a>
          </h4>
          <p>
            {{project.description}}
          </p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import projects  from "@/data/projects"
export default {
  name: 'Projects',
  data(){
    return {
      projects
    }
  }
}
</script>
