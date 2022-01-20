<template>
<h1>Web3知乎</h1>
<router-view></router-view>
<QuestionFeed />
</template>

<script>

import QuestionFeed from './view/QuestionFeed.vue'

export default {
  name: 'App',
  components: {
    QuestionFeed
  }
}
</script>

<style>

</style>
