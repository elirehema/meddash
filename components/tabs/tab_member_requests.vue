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
          <v-chip v-if="item.status != '-1'" small>
            {{ item.status }}
          </v-chip>
        </template>
        <template #top>
          <v-toolbar color="" flat>
            <v-toolbar-title class="text-uppercase">
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
        <template #item.actions="{ item }">
          <v-btn-toggle
            v-if="item.status != '-1' && item.status == 'PENDING'"
            v-model="toggle_exclusive"
            dense
            rounded
          >
            <v-btn small style="background-color: blue !important; text-transform: none !important;" @click="approveRequest(item, 'approved')">
              <v-icon color="white" left>
                mdi-check
              </v-icon>
              Approve
            </v-btn>
            <v-btn small v-if="item.status != '-1' && item.status == 'PENDING'" style="background-color: red !important; text-transform: none !important;" @click="approveRequest(item, 'rejected')">
              <v-icon color="white" left>
                mdi-close
              </v-icon>
              <span>Reject</span>
            </v-btn>
          </v-btn-toggle>
        </template>
        <template #item.type="{ item }">
          <span v-if="item.transactionType != null"> {{ item.transactionType.type }}</span>
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
        { text: 'Confirm Date ', value: 'confirmDate' },
        { text: 'Request Date', value: 'logDate' },
        { text: 'Actions', value: 'actions' }
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
    },
    async approveRequest (val, act) {
      await this.$api
        .$put(`/members/approvals/${val.id}`, null, { params: { action: act } })
        .then(() => {
          this.paginate({ page: 0, itemsPerPage: 15 })
        })
        .catch((_err) => {})
    }
  }
}
</script>
