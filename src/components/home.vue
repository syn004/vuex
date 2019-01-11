<template>
  <div class="hello">
     <h1>仅仅试验vuex</h1>
     <div>数量:{{count}}</div>
     <div @click="add">增加</div>
     <div @click="red">减少</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      count: state => state.count
    }),
  },
  methods: {
    add() {
      this.$store.dispatch('add')
    },
    red() {
      console.log('this', this)
      this.$store.dispatch('red')
    }
  },
  mounted() {
    console.log('222', this.$store)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
