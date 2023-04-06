
<template>
  <v-card v-if="group && member" flat>
    <v-app-bar
      fade-img-on-scroll
      scroll-threshold="500"
    >
      <v-toolbar-title class=" font-weight-medium">
        {{ group.name }}-:-{{ member.name }} {{ member.familyName }}
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
        <tab-member-transactions :member="member" :group="group"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

  <skeleton-table-loader v-else />
</template>
<script>
import TabMemberTransactions from '@/components/tabs/tab_member_transactions.vue'
export default {
  components: {
    'tab-member-transactions': TabMemberTransactions
  },
  data () {
    return {
      group: null,
      member: null,
      tab: null,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      paymentref: null,
      items: ['Transactions']
    }
  },
  head () {
    return {
      title: 'Group'
    }
  },
  created () {
    this._getgroupById()
    this._getMemberById()
  },
  methods: {
    async _getgroupById () {
      await await this.$api
        .$get(`/groups/${this.$route.params.id}`)
        .then((response) => {
          this.group = response
        })
        .catch(() => {
        })
    },
    async _getMemberById () {
      await await this.$api
        .$get(`/members/${this.$route.params.memberid}`)
        .then((response) => {
          this.member = response
        })
        .catch(() => {
        })
    },
   
  }
}
</script>
