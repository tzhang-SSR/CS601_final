<template>
  <div class="about wrapper">
    <h2>Q&A: What have I learned?</h2>
    <div class="card">
      <div class="qnaWrapper">
        <p class="qnaTitle">Q:</p>
        <p><b>First of all, show us what you learned?</b></p>
      </div>
      <div class="qnaWrapper">
        <p class="qnaTitle">A:</p>
        <p>
          This is this really cool website called "random fox" which provides random fox images. That's the best
          discovery I have made in this class thanks to Prof.Jen. I made a little game right here which you can
          simply press the button below to get a new fox image.
        </p>
      </div>
      <div class="qnaWrapper imageWrapper">
        <button id="getFox" v-on:click="getFox()">Get a Fox 🦊</button>
        <img :src="this.foxURL" alt="fox image" width="300" />
      </div>
    </div>
    <div class="card" v-for="(QnA, index) in QnAs" :key="index">
      <div class="qnaWrapper">
        <p class="qnaTitle">Q:</p>
        <p>
          <b>{{ QnA.question }}</b>
        </p>
      </div>
      <div class="qnaWrapper">
        <p class="qnaTitle">A:</p>
        <div>
          <p v-for="(answer, i) in QnA.answers" :key="i">
            {{ answer }}
          </p>
        </div>
      </div>
    </div>
    <div class="footer" />
  </div>
</template>
<style scoped>
p {
  margin: 0;
}
.qnaTitle {
  font-weight: bold;
  font-style: italic;
}
.qnaWrapper {
  display: flex;
  text-align: left;
}
.qnaWrapper p {
  margin-left: 10px;
  margin-bottom: 20px;
}
.qnaWrapper.imageWrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
#getFox {
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  background: orange;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      QnAs: [
        {
          question:
            "Have you learned anything about HTML, CSS, and JavaScript?",
          answers: [
            "To be honest, I have experience in using these basic web languages prior to this course, so I wasn't expecting anything new. However, I did get a chance to review what I have learned and found some knowledge points that I missed.",
            "For example, I didn't know the definition of inline HTML element until this class, which includes but not limited to: <a>, <img/>, and <button>. Besides, I also got to know the difference between for...of loop and for..in loop, which are both popular iterator methods, but for...in iterate through indices, and for..of iterate through the iterator elements.",
          ],
        },
        {
          question:
            "What are some other things you have gained from this course?",
          answers: [
            "This class provides me a lot of chances to participate in the weekly discussion and communicate with other students. This kind of interaction helped me gain many new ideas from the same concept. ",
            "I remember some students provide a series of website layouts when talking about CSS responsiveness. That was eye-opening and beneficial for developers like me who lack design ideas. I particularly like the part where everybody listed awesome websites that build with JavaScript, which just showed me the unlimited possibilities of web design. ",
          ],
        },
        {
          question: "What about Vue.js?",
          answers: [
            "Yes, Vue! I always wanted to learn Vue. In fact, I tried to use Vue in one of my internships before, but that experience was not so pleasant. Probably because I was asked to integrate with some advanced module, and the structure of Vue just seems to be very confusing. ",
            "I'm glad to have another chance to visit this old friend and have a thorough understanding of it this time. To my surprise, it wasn't that complicated. I found out there are lots of similarities between Vue and React. Like they are both component-based javascript frameworks, and also use Virtual DOM. As a matter of fact, I'm building this website using Vue, and I'm planning to dive deeper into this field in the future.",
          ],
        },
      ],
      statusCodes: [
        "100",
        "101",
        "102",
        "200",
        "201",
        "202",
        "203",
        "204",
        "206",
        "207",
        "300",
        "301",
        "302",
        "303",
        "304",
        "305",
        "307",
        "308",
        "400",
        "401",
        "402",
        "403",
        "404",
        "405",
        "406",
        "407",
        "408",
        "409",
        "410",
        "411",
        "412",
        "413",
        "414",
        "415",
        "416",
        "417",
        "418",
        "420",
        "421",
        "422",
        "423",
        "424",
        "425",
        "426",
        "429",
        "431",
        "444",
        "450",
        "451",
        "497",
        "498",
        "499",
        "500",
        "501",
        "502",
        "503",
        "504",
        "506",
        "507",
        "508",
        "509",
        "510",
        "511",
        "521",
        "523",
        "525",
        "599",
      ],
      foxURL: "",
    };
  },
  mounted() {
    this.getFox();
  },
  methods: {
    getFox: async function () {
      const URL = `https://randomfox.ca/floof/`;
      const res = await fetch(URL, { method: "GET", mode: "cors" });
      const rep = await res.json();
      this.foxURL = rep.image;
      console.log(this.foxURL);
    },
  },
};
</script>

