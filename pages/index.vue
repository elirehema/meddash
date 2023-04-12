
<template>
  <div v-if="isauthenticated">
    <v-card v-if="member" flat>
      <v-app-bar
        fade-img-on-scroll
        scroll-threshold="500"
        dark
        color="primary"
      >
        <v-toolbar-title class=" font-weight-medium">
          MEMBER: {{ member.name }} {{ member.familyName }}
        </v-toolbar-title>

        <v-spacer />

        <template #extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow" />

            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat>
            <v-card-text />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <tab-member-groups :groups="groups" :member="member" />
        </v-tab-item>
        <v-tab-item>
          <tab-member-transactions :member="member" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <skeleton-table-loader v-else />
  </div>
  <div v-else @click="$store.dispatch('_logoutsession')">
    <img
      lazy-src="https://picsum.photos/id/11/10/6"
      height="500"
      src="https://cdni-cf.bugaboo.tv/dm/sz-md/i/images/2020/05/15/who_are_you_logo_1589524415_1485.png"
    >
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TabMemberGroups from '@/components/tabs/tab_member_groups.vue'
import TabMemberTransactions from '@/components/tabs/tab_member_transactions.vue'
export default {
  components: {
    'tab-member-groups': TabMemberGroups,
    'tab-member-transactions': TabMemberTransactions
  },
  data () {
    return {
      member: null,
      groups: null,
      tab: null,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      paymentref: null,
      items: ['Groups', 'Transactions']
    }
  },
  head () {
    return {
      title: 'Member'
    }
  },
  computed: {
    ...mapGetters({
      isauthenticated: 'isAuthenticated'
    }),
    formtitle () {
      return this.editedIndex === -1 ? 'Add new service name' : 'Edit Service Name'
    }
  },
  created () {
    this._getgMemberById()
    this._getMemberGroups()
  },
  methods: {
    async _getgMemberById () {
      await await this.$api
        .$get(`/members/${this.msisdn}`)
        .then((response) => {
          this.member = response
        })
        .catch(() => {
        })
    },
    async _getMemberGroups () {
      await await this.$api
        .$get(`/members/${this.msisdn}/groups`)
        .then((response) => {
          this.groups = response == null ? [] : response
        })
        .catch(() => {
        })
    },
    _closebakdialog () {
      this.bankdialog = false
    }
  }
}
</script>
