<template>
  <div class="workCard card">
    <h3>{{ work.company }}</h3>
    <p class="position">
      <i>{{ work.position }}</i>
    </p>
    <p>{{ work.period }}</p>
    <ul>
      <li v-for="(content, i) in work.responsibility" :key="i">
        {{ content }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "WorkCard",
  props: {
    work: Object,
  },
};
</script>
<style scoped>
.workCard {
  text-align: left;
  margin-bottom: 20px;
}
h3,
p {
  margin: 0;
}
</style>
