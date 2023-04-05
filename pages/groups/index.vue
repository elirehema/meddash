<template>
  <v-row
    v-if="groups"
    class="d-flex justify-space-between"
    no-gutters
  >
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="groups"
        item-key="name"
        class="elevation-1"
        :footer-props="footerprops"
        :server-items-length="pages"
        @click:row="rowclick"
        @pagination="paginate"
      >
        <template #top>
          <v-toolbar
            color=""
            flat
          >
            <v-toolbar-title class=" font-weight-medium">
              Groups
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </template>
        <template #item.created="{item}">
          <span>{{ item.createdDate | dateformat }}</span>
        </template>
        <template #item.status="{ item }">
          <v-chip :color="item.status == 'ACTIVE' ? 'success':''">
            <v-avatar v-if="item.status == 'ACTIVE'" left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            {{ item.status.toLowerCase() }}
          </v-chip>
        </template>
        <template #no-data>
          <span>No organization found ...</span>
        </template>
      </v-data-table>
    </v-col>
  </v-row>

  <skeleton-table-loader v-else />
</template>
<script>
export default {
  data () {
    return {
      groups: null,
      pages: 0,
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Group Type ', value: 'groupType' },
        { text: 'Location', value: 'location' },
        { text: 'Members', value: 'members' },
        { text: 'Status ', value: 'status' },
        { text: 'Created Date', value: 'created' }
      ],
      show: false,
      editedItem: {}
    }
  },
  head () {
    return {
      title: 'Groups'
    }
  },
  created () {
    this.paginate({ page: 0, itemsPerPage: 15 })
  },
  methods: {
    rowclick (v) {
      this.show = true
      this.$router.push(`/groups/${v.id}`)
      // console.log(v)
    },

    async paginate (it) {
      await this.$api.$get('/groups', { params: { page: it.page, size: it.itemsPerPage, sort: 'groupid desc' } })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.groups = response.results
        }).catch((_err) => {
        })
    }
  }

}
</script>
