<template>
  <v-row
    v-if="transactions"
    class="d-flex justify-space-between"
    no-gutters
  >
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="transactions"
        item-key="name"
        class="elevation-1"
        :footer-props="footerprops"
        :server-items-length="pages"
        @pagination="paginate"
      >
        <template #top>
          <v-toolbar
            color=""
            flat
          >
            <v-toolbar-title class=" font-weight-medium">
              Group Transactions
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </template>
        <template #item.created="{item}">
          <span>{{ item.transactionDate | dateformat }}</span>
        </template>
        <template #item.sms="{ item }">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                color="button darken-2"
                v-on="on"
              >
                mdi-message-badge
              </v-icon>
            </template>
            <span>{{ item.sms }}</span>
          </v-tooltip>
        </template>
        <template #no-data>
          <span>No organization found ...</span>
        </template>
        <template v-if="false" #footer>
          <v-simple-table style="background-color: #eeeeee;" dark>
            <tbody>
              <tr>
                <td class="font-weight-bold button--text">
                  S.B.B
                </td>
                <td class="black--text">
                  Source Balance Before
                </td>

                <td class="font-weight-bold button--text">
                  S.B.A
                </td>
                <td class="black--text">
                  Source Balance After
                </td>
              </tr>
              <tr style="background-color: #eeeeee ;">
                <td class="font-weight-bold button--text">
                  D.B.B
                </td>
                <td class="black--text">
                  Destination Balance Before
                </td>

                <td class="font-weight-bold button--text">
                  D.B.A
                </td>
                <td class="black--text">
                  Destination Balance After
                </td>
              </tr>
            </tbody>
          </v-simple-table>
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
      transactions: null,
      pages: 0,
      headers: [
        { text: 'MSISDN', value: 'msisdn' },
        { text: 'Source ', value: 'sourceAccount' },
        { text: 'Destination', value: 'destinationAccount' },
        { text: 'Amount', value: 'amount' },
        { text: 'S.B.B ', value: 'sourceBalanceBefore' },
        { text: 'S.B.A ', value: 'sourceBalanceAfter' },
        { text: 'D.B.B ', value: 'destinationBalanceBefore' },
        { text: 'D.B.A ', value: 'destinationBalanceAfter' },
        { text: 'SMS', value: 'sms' },
        { text: 'Created Date', value: 'created' }

      ],
      show: false,
      editedItem: {}
    }
  },
  head () {
    return {
      title: 'transactions'
    }
  },
  created () {
    this.paginate({ page: 0, itemsPerPage: 15 })
  },
  methods: {
    rowclick (v) {
      this.show = true
      this.$router.push(`/transactions/${v.id}`)
      // console.log(v)
    },

    async paginate (it) {
      await this.$api.$get(`/groups/${this.$route.params.id}/transactions`, { params: { page: it.page, size: it.itemsPerPage, sort: 'transate desc' } })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.transactions = response.results
        }).catch((_err) => {
        })
    }
  }

}
</script>
