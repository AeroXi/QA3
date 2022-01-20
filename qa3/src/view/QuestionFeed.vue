<template>
  <router-link to="/question/:id" v-for="question in questions" :key="question.id"><p>{{ question.question }}</p></router-link>
</template>

<script>
export default {
  name: "QuestionFeed",
  data() {
    return {
        questions: []
    };
    
  },
  mounted() {
    this.questions = require("./questions.json");
  },
};
</script>

<style></style>
