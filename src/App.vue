<template>
  <div id="nav">
    <img
      src="./assets/profile.jpg"
      alt="profile of teng zhang"
      width="200"
      height="200"
      class="mobileHidden"
    />
    <h1 class="mobileHidden">Teng Zhang</h1>
    <p class="mobileHidden">Frontend Developer | React | JavaScript</p>
    <img
      id="cross"
      class="mobileOnly"
      src="./assets/cross.png"
      alt="close navbar"
      width="50"
      height="50"
      v-on:click="closeNav()"
    />
    <ul class="link-wrapper">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="{ path: link.value }">
          {{ link.label }}
        </router-link>
      </li>
    </ul>
    <div class="social">
      <a href="https://github.com/tzhang-SSR" target="_blank">
      <img
        src="./assets/github.png"
        alt="github logo"
        width="50"
        height="50"
      />
      </a>
      <a href="https://www.linkedin.com/in/tzhang-teng/" target="_blank">
        <img
          src="./assets/linkedin.png"
          alt="linkedin logo"
          height="55"
          width="55"
        />
      </a>
    </div>
  </div>
  <div id="content">
    <div class="menuIcon mobileOnly" v-on:click="openNav()">☰</div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        { label: "Home", value: "/" },
        { label: "Works", value: "/work" },
        { label: "Hobby", value: "/hobby" },
        { label: "Contact", value: "/contact" },
        { label: "CS601", value: "/about" },
      ],
    };
  },
  methods: {
    openNav: function () {
      const nav = document.getElementById("nav");
      nav.style.display = "block";
    },
    closeNav: function () {
      const nav = document.getElementById("nav");
      nav.style.display = "none";
    },
  },
};
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
}

#nav {
  width: 40vw;
  padding: 0 10px;
  height: 100vh;
  background: greenyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 3px solid;
  transition: 0.5s;
  position: relative;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

img {
  max-width: 100%;
}

a:hover {
  text-decoration: underline;
}

.mobileOnly {
  display: none;
}
#nav img {
  border-radius: 100px;
}

a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
.social{
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

#content {
  overflow-y: auto;
  display: flex;
  justify-content: center;
  width: 60vw;
  background: rgba(192, 192, 192, 0.1);
  position: relative;
}
.menuIcon {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  border: 3px solid;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}
.menuIcon:hover {
  font-weight: bold;
}
#cross {
  cursor: pointer;
  margin: 0 auto;
}
.wrapper {
  width: 80%;
  padding-top: 10px;
  padding-bottom: 100px;
}
.link-wrapper {
  display: flex;
  flex-direction: column;
}
.link-wrapper a {
  font-weight: 300;
}
li {
  font-style: italic;
  text-align: left;
  margin-bottom: 10px;
}
.card {
  border: 3px solid;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
}
.footer {
  height: 100px;
}
@media only screen and (max-width: 700px) {
  .mobileOnly {
    display: block;
  }
  .mobileHidden {
    display: none;
  }
  #nav {
    padding: 0;
    padding-top: 20px;
    justify-content: flex-start;
    position: fixed;
    max-width: 150px;
    z-index: 10;
    display: none;
  }
  #content {
    padding-top: 25px;
    width: 100vw;
  }
  #nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .link-wrapper li {
    padding: 10px;
    border-bottom: 3px solid;
  }
  .link-wrapper a {
    font-size: 28px;
    font-weight: 300;
  }
}
</style>
