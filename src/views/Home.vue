<template>
  <div class="home wrapper">
    <MobileIntro />
    <h2>About Me</h2>
    <p>
      <b>Hello stranger!👋 Nice to meet you.</b>
    </p>
    <p>
      I'm a Frontend Developer with more than one year's experience. Experienced
      in web languages including JavasScript, HTML, and CSS. Familiar with the
      Frontend libraries and frameworks such as React.js, Next.js, and
      Angular.js. Been learning Vue.js recently.
    </p>
    <p>
      During my work, I'm responsible for developing web pages and web
      applications with new design features. I often collaborated with UI
      designers or backend developers on the same projects, but also comfortable
      when working on my own. I also have a certain amount of knowledge about
      SEO, accessibility, and web performance optimization thanks to my previous
      works.
    </p>
    <p>
      For now, I'm studying remotely at <b>Boston University</b> and majoring in
      <b>Computer Information System</b>. Expected to graduate by Sep 2022. I
      really like the diverse and friendly atmosphere of this school. Although I
      no longer live in Boston, I often go visit my friends there from time to
      time.
    </p>
    <p>
      My hometown is in Henan and I'm currently based in <b>Malden, MA</b>. It's
      a really peaceful and beautiful city with lots of fun things to explore.
      Many decent restaurants here, as well. New York Pizza is my favorite!
    </p>
    <img src="../assets/bu_seal.png" alt="bu seal" width="200" height="200" />
  </div>
</template>
<script>
import MobileIntro from "../components/MobileIntro.vue";
export default {
  name: "Home",
  components: {
    MobileIntro,
  },
};
</script>
<style scoped>
.home p {
  text-align: left;
}
</style>
