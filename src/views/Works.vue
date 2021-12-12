<template>
  <div class="work wrapper">
    <div class="titleWrapper">
      <h2>
        <router-link to="/work">Work Experience</router-link>
        <span class="divider"> | </span>
        <router-link to="/volunteer">Volunteer</router-link>
      </h2>
    </div>
    <WorkCard v-for="(work, index) in works" :key="index" :work="work" />
    <div class="footer" />
  </div>
  
</template>
<script>
import WorkCard from "@/components/WorkCard.vue";
export default {
  name: "Works",
  components: {
    WorkCard,
  },
  data() {
    return {
      works: [
        {
          company: "App Annie",
          position: "Front End Intern",
          period: "Jul 2021 - Present",
          responsibility: [
            "Added strong accessibility features to the design system components of App Annie according to WCAG 2.1 Level A and Level AA standards",
            "Improved stability of AA products by working on the migration and deprecation of web page components, along with essential bug fixes",
            "Developed AA's own Microsoft Excel Add-In with JavaScript to improve customer's experience in using and accessing AA datasets",
          ],
        },
        {
          company: "CAC Auto Group",
          position: "H5 Developer",
          period: "Jun - Aug 2021",
          responsibility: [
            "Developed a new management tool for CAC Sales representatives by creating the Sales Commission section of the dashboard in Angular and Docker, which allow them to check and manage detailed commission data",
            "Enabled the higher-level Sales representatives to allocate commissions to subordinates online by creating  the complete user flow of the commission allocation model with backend developers",
          ],
        },
        {
          company: "Corelant",
          position: "Front End Developer",
          period: "May - Jul 2021",
          responsibility: [
            "Added login authentication features and form validation methods to Corelant's website using React Context and Formrik",
            "Further improved the website functionality by implementing the complete user flow of the ‘Forgot password' function including sending user emails through SMTP services and updating new passwords from the frontend page",
            "Developed highly customized blog page templates through using headless CMS on the website",
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
    align-items: center;
  }
  a.router-link-exact-active {
    border-bottom: 3px solid;
  }
  .divider{
    display: none;
  }
}
</style>
