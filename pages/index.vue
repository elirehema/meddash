
<template>
    <v-card v-if="appointments" flat>
      <v-app-bar
        fade-img-on-scroll
        scroll-threshold="500"
        dark
        color="primary"
      >
        <v-toolbar-title class=" font-weight-medium">
          WELCOME
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
          <tab-doctor-appoitments :appointments="appointments"  />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <skeleton-table-loader v-else />

</template>
<script>
import { mapGetters } from 'vuex'
import TabDoctorAppointments from '@/components/tabs/tab_appointments.vue'
export default {
  components: {
    'tab-doctor-appoitments': TabDoctorAppointments,
  },
  data () {
    return {
      appointments: null,
      tab: null,
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
      paymentref: null,
      items: ['Appointments']
    }
  },
  head () {
    return {
      title: 'Appointments'
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
    this._getMemberGroups()
  },
  methods: {
    async _getMemberGroups () {
      await await this.$api
        .$get(`/appointments`)
        .then((response) => {
          this.appointments = response == null ? [] : response
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
