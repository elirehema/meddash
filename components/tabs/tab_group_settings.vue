<template>
  <v-simple-table v-if="settings">
    <template #default>
      <tbody>
        <tr
          v-for="setting in settings"
          :key="setting.title"
        >
          <td class="font-weight-medium">{{ setting.title }}</td>
          <td class="font-weight-medium" v-html="setting.value" />
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <skeleton-table-loader v-else />
</template>
<script>
export default {
  data () {
    return {
      settings: null

    }
  },
  computed: {
  
  },
  created () {
    this.getgroupSettings()
  },
  methods: {
    async getgroupSettings () {
      await this.$api.$get(`/groups/${this.$route.params.id}/settings`)
        .then((response) => {
          this.settings = response
        }).catch((_err) => {
        })
    }
  }
}
</script>
