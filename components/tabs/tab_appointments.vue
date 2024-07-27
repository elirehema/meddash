<template>
    <v-data-table
      v-if="appointments"
      :headers="headers"
      :items="appointments"
      sort-by="calories"
      class="elevation-1"
    >
      <template #top>
        <v-toolbar
          flat
        >
          <v-toolbar-title class="text-uppercase">
            Scheduled appointments
          </v-toolbar-title>
          <v-spacer />
        </v-toolbar>
      </template>
     
      <template #no-data>
        <p>No data</p>
      </template>
     
      <template #item.date="{item}">
        <span>{{ item.appointmentDate | dateformat }}</span>
      </template>
      <template #item.status="{ item }">
        <v-chip dark small :color="item.status == '100' ? 'green':'success'">
          <v-avatar v-if="item.status != '100'" left>
            <v-icon small>
              mdi-checkbox-marked-circle
            </v-icon>
          </v-avatar>
          {{ item.appointmentStatus }}
        </v-chip>
      </template>
      <template #item.actions="{item}">
        <v-btn x-small rounded color="success">
          <v-icon left>mdi-check</v-icon>
          Accept</v-btn>
          <v-btn x-small rounded color="error">
          <v-icon left>mdi-close</v-icon>
          Reject</v-btn>
      </template>
    </v-data-table>
    <skeleton-table-loader v-else />
  </template>
  <script>
  export default {
    props: {
      appointments: {
        type: Array,
        default: null
      }
    },
    data: () => ({
      headers: [
  
        { text: 'Client Name', value: 'clientName' },
        { text: 'Client Mobile No. ', value: 'clientMobileNo' },
        { text: 'Doctor Name ', value: 'doctorName' },
        { text: 'Dr. Mobile No ', value: 'doctorMobileNo' },
        { text: 'Receipt #', value: 'receipt' },
        { text: 'Status ', value: 'status' },
        { text: 'Appointment Date', value: 'date' },
        { text: 'Actions', value: 'actions' }
      ]
    }),
    methods: {
      rowclick (v) {
        this.show = true
        this.$router.push(`/appointments/${v.msisdn}`)
        // console.log(v)
      }
    }
  }
  </script>
  