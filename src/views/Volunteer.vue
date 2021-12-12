<template>
  <div class="volunteer wrapper">
    <div class="titleWrapper">
      <h2>
        <router-link to="/work">Work Experience</router-link>
        <span class="divider"> | </span>
        <router-link to="/volunteer">Volunteer</router-link>
      </h2>
    </div>
    <WorkCard v-for="(work, index) in works" :key="index" :work="work" />
  </div>
</template>
<script>
import WorkCard from "@/components/WorkCard.vue";
export default {
  name: "Volunteer",
  components: {
    WorkCard,
  },
  data() {
    return {
      works: [
        {
          company: "Three Monkeys Communication",
          position: "Front End Software Developer",
          period: "May - Aug 2020",
          responsibility: [
            "Developed a brand new look for 3MC’s website homepage  and other web pages rapidly with quality ensured",
            "Finished the design of  3MC’s SaaS product “Mizaru” according to WCAG 2.1 standards with constant adjustments based on feedback from target users of the deaf-blind community",
            "Identified key areas for improvement and implemented changes instantly to improve user experience throughout the development process",
          ],
        },
        {
          company: "Gleentown Education",
          position: "Web Developer",
          period: "Jan - Apr 2019",
          responsibility: [
            "Increased GE’s website visitors by 10% through improving the UI design with web languages and Elementor",
            "Helped over 20 GE volunteers complete their online training programs by developing GE’s own LMS with JavaScript and WordPress extensions",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
h3,
p {
  margin: 0;
}
.titleWrapper {
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: center;
}
@media only screen and (max-width: 1200px) {
  h2{
    display: flex;
    flex-direction: column;
  }
  a.router-link-exact-active {
    border-top: 3px solid;
  }
  .divider{
    display: none;
  }
}
</style>
