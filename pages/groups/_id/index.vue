
<template>
  <v-card v-if="group" flat>
    <v-app-bar
      fade-img-on-scroll
      scroll-threshold="500"
    >
      <v-toolbar-title class=" font-weight-medium">
        {{ group.name }}
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
        <tab-group-members :members="members" @update="_getGroupMembers($event)" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>

  <skeleton-table-loader v-else />
</template>
<script>
import TabGroupMembers from '@/components/tabs/tab_group_members.vue'
export default {
  components: {
    'tab-group-members': TabGroupMembers
  },
  data () {
    return {
      group: null,
      members: [],
      tab: null,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      paymentref: null,
      items: ['Members', 'Transactions']
    }
  },
  head () {
    return {
      title: 'Group'
    }
  },
  computed: {
    formtitle () {
      return this.editedIndex === -1 ? 'Add new service name' : 'Edit Service Name'
    }
  },
  created () {
    this._getgroupById()
    this._getGroupMembers()
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
    async _getGroupMembers () {
      await await this.$api
        .$get(`/groups/${this.$route.params.id}/members`)
        .then((response) => {
          this.members = response
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
