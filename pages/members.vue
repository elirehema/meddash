<template>
  <v-data-table
    v-if="members"
    :headers="headers"
    :items="members"
    item-key="name"
    class="elevation-1"
    :footer-props="footerprops"
    :server-items-length="pages"
    @pagination="paginate"
  >
    <template #top>
      <v-toolbar flat>
        <v-toolbar-title class=" font-weight-medium">
          Group Members
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </template>
    <template #item.created="{item}">
      <span>{{ item.createdDate | dateformat }}</span>
    </template>
    <template #item.name="{item}">
      <span>{{ item.name.split(" ")[0] + " "+ item.familyName.split(" ")[0] }}</span>
    </template>
    <template #item.status="{ item }">
      <v-icon v-if="item.status == 'ACTIVE'" small>
        mdi-checkbox-marked-circle
      </v-icon>
      <v-icon v-else small>
        mdi-close-circle
      </v-icon>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script>
export default {
  data () {
    return {
      members: null,
      pages: 0,
      headers: [
        { text: 'Name ', value: 'name' },
        { text: 'Account #', value: 'account' },
        { text: 'Status ', value: 'status' },
        { text: 'Deposits ', value: 'deposits' },
        { text: 'Dividends ', value: 'dividend' },
        { text: 'Penalty', value: 'penalty' },
        { text: 'Withdraws', value: 'withdraws' },
        { text: 'Dividends ', value: 'dividend' },
        { text: 'Social Fund', value: 'socialfund' },
        { text: 'S.F Withdraws', value: 'socialfundWithdraws' },
        { text: 'Created Date', value: 'created' }
      ]
    }
  },
  head () {
    return {
      title: 'Members'
    }
  },
  created () {
    this.paginate({ page: 0, itemsPerPage: 15 })
  },
  methods: {
    async paginate (it) {
      await this.$api.$get('/members', { params: { page: it.page, size: it.itemsPerPage, sort: 'memberid desc' } })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.members = response.results
        }).catch((_err) => {
        })
    }
  }

}
</script>
