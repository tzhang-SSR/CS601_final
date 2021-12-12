<template>
  <div class="hobby wrapper">
    <h2>Everyone has a hobby, so do I~</h2>
    <div class="card hobbyCard">
      <h3>{{ hobbies[num].title }}</h3>
      <img
        :src="hobbies[num].img"
        :alt="hobbies[num].imgTag"
        width="300"
        height="200"
      />
      <div class="paragraphWrapper">
        <p v-for="(paragraph, index) in hobbies[num].paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="paginationWrapper">
        <button v-on:click="goBack()">🡰</button>
        <p class="pagination">
          <b>{{ num + 1 }}</b
          >/<b>3</b>
        </p>
        <button v-on:click="goForward()">🡲</button>
      </div>
    </div>
    <div class="footer" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      hobbies: [
        {
          title: "Chess",
          paragraphs: [
            "Chess is a ancient board game played that require two players. It's origin can go back to the second half of the 15th century",
            "I've been playing a lot of chess games online recently. I got obsessed with Chess ever since I watched the Netflix show \"Queen's Gambit\". The actress who played Beth Harmon really nailed the performance in terms of calmness and elegance, and the show itself has done a great job in presenting different kinds of chess playing prodigies",
            "Also, chess itself is also very fun to play. It has a really simple rule and easy to begin with. Getting good at it is much harder since it takes a lot of thinking and strategy to win. I'm still at beginner level and often find myself end up at a stalemate. Well, I still enjoy playing it.",
          ],
          img: require("@/assets/chess.jpg"),
          imgTag: "chess play",
        },
        {
          title: "Running",
          paragraphs: [
            "I like to do some work-out in my spare time, and running is one of my favorite sports. Not only because that helps me go to bed sooner, but also a great way to explore the neighborhood on foot. Whenever I got blocked by some problems at work, or simply feel bored at home, I will simply put on my sneakers and go out for a run. It always calms my mind.",
            "I prefer night running especially. Usually, I would run for about 30 minutes around my apartment. It's a great exercise for me after working for an entire day. Sometimes I also put on headphone when running to make it more fun with my favorite playlists.",
          ],
          img: require("@/assets/jogging.jpg"),
          imgTag: "chess play",
        },
        {
          title: "Writing",
          paragraphs: [
            "I once got a chance to learn how to use strapi, a headless CMS tool, for my work and was required to learn how to deploy the codebase to Heroku. The whole process was quite frustrating because of the complicated configuration of these tools. I decided to record my experience just in case I need to do the whole thing again anytime, that's how my first blog gets published.",
            "That experience gives me an idea Since I'm always learning new things as a developer, maybe I could try to summarize those and write them down to share with other people. Besides, while studying at BU, there are many courses that require me to post in the weekly discussion. That also gives me more ideas and also more chances to practice my writing skills.",
            "Currently, I'm writing an article about accessibility, which mainly talks about how exactly do practice accessibility improves the online experience of people with disabilities. Hopefully, it will be ready for view soon.",
          ],
          img: require("@/assets/blogging.jpg"),
          imgTag: "chess play",
        },
      ],
    };
  },
  methods: {
    goBack: function () {
      const temp = this.num - 1 < 0 ? this.num - 1 + 3 : this.num - 1;
      this.num = temp;
    },
    goForward: function () {
      const temp = this.num + 1 >= 3 ? this.num + 1 - 3 : this.num + 1;
      this.num = temp;
    },
  },
};
</script>
<style scoped>
h3 {
  text-align: left;
  font-size: 25px;
}
button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  background: transparent;
  border: 3px solid;
  color: yellowgreen;
}
p {
  text-align: left;
}
.hobbyCard {
  padding-top: 0;
}
.paragraphWrapper {
  min-height: 300px;
}
.paginationWrapper {
  display: flex;
  justify-content: center;
}
.pagination {
  text-align: center;
  bottom: 10px;
  width: 50px;
  font-size: 15px;
  font-style: italic;
}
</style>
