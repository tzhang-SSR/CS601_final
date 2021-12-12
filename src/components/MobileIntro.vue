<template>
  <div id="mobileIntro" class="mobileOnly">
    <img
      src="../assets/profile.jpg"
      alt="profile of teng zhang"
      width="200"
      height="200"
    />
    <h1>Teng Zhang</h1>
    <p>Frontend Developer | React | JavaScript</p>
  </div>
</template>
<script>
export default {
  name: "MobileIntro",
};
</script>
<style scoped>
#mobileIntro {
    padding: 20px 30px;
    background: greenyellow;
    border-radius: 5px;
}
img {
    border-radius: 100px;
}
</style>