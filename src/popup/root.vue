<template>
    <v-app>
      <v-btn small color="primary" @click="tab">Create New Tab</v-btn>
    </v-app>
</template>
<script>
  export default {
    data: () => ({
    }),
    computed: { },
    created () {
      console.log('New tab')
    },
    mounted () { },
    methods: {
      tab () {
        chrome.tabs.create({ url: 'https://www.163.com' })
      }
    }
  }
</script>
<style lang="scss">
  div {
    color: blue
  }
</style>
