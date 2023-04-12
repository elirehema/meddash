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
      <template #item.status="{ item }">
      <v-chip v-if="item.status != '-1'" small>{{ item.status }}</v-chip>
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
            <span>{{ item.description }}</span>
          </v-tooltip>
        </template>
        <template #item.type="{ item }">
        <span v-if="item.transactionType != null"> {{  item.transactionType.type }}</span>
        <span v-else class="grey--text"> Not Provided </span>
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
        { text: 'MSISDN', value: 'requestorMsisdn' },
        { text: 'Status ', value: 'status' },
        { text: 'RequestType', value: 'type' },
        { text: 'Description', value: 'desc' },
        { text: 'Member Approvals', value: 'memberApprovalStatus' },
        { text: 'Confirm Date ', value: 'confirmDate' },
        { text: 'Request Date', value: 'logDate' }
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
            sort: 'logdate desc',
            msisdn: this.msisdn,
            gid: this.$route.params.id
          }
        })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.approvals = response.results == null ? [] : response.results
        })
        .catch((_err) => {})
    }
  }
}
</script>
