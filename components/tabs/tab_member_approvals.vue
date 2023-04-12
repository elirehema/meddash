<template>
  <v-row v-if="approvals" class="d-flex justify-space-between" no-gutters>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="approvals"
        item-key="name"
        class="elevation-1"
        :footer-props="footerprops"
        :server-items-length="pages"
        @pagination="paginate"
      >
      <template #item.role="{ item }">
      <v-chip v-if="item.requestorRole != '-1'" small>{{ item.requestorRole }}</v-chip>
      </template>
        <template #top>
          <v-toolbar color="" flat>
            <v-toolbar-title class="font-weight-mediumm text-uppercase">
              Approvals
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </template>
        <template #item.desc="{ item }">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon v-bind="attrs" color="green lighten-2" v-on="on">
                mdi-information
              </v-icon>
            </template>
            <span>{{ item.requestDescription }}</span>
          </v-tooltip>
        </template>
        <template #no-data>
          <span>No transaction found ...</span>
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
      approvals: null,
      pages: 0,
      headers: [
        { text: 'Requestor MSISDN', value: 'requestorMsisdn' },
        { text: 'Role ', value: 'role' },
        { text: 'Description', value: 'desc' },
        { text: 'Member Approvals', value: 'memberApprovalStatus' },
        { text: 'Counts ', value: 'requestCount' },
        { text: 'Request Date', value: 'requestedDate' }
      ],
      show: false,
      editedItem: {}
    }
  },
  head () {
    return {
      title: 'approvals'
    }
  },
  created () {
    this.paginate({ page: 0, itemsPerPage: 15 })
  },
  methods: {
    rowclick (v) {
      this.show = true
      this.$router.push(`/approvals/${v.id}`)
      // console.log(v)
    },

    async paginate (it) {
      await this.$api
        .$get('/members/approvals', {
          params: {
            page: it.page,
            size: it.itemsPerPage,
            sort: 'request_timestamp desc',
            msisdn: this.msisdn,
            gid: this.$route.params.id
          }
        })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.approvals = response.results
        })
        .catch((_err) => {})
    }
  }
}
</script>
