<template>
  <home-page-component />
</template>

<script>
import MemberHomePageComponent from '@/pages/members/_id.vue'

export default {
  name: 'HomePage',
  components:{
    'home-page-component': MemberHomePageComponent
  },
  data () {
    return {
    }
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
