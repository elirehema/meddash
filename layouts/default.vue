<template>
  <v-app dark>
    <v-navigation-drawer
      :clipped="false"
      permanent
      color="primary"
      app
      height="100%"
      style="max-height: 97.6%;"
    >
      <v-list>
        <v-list-item v-if="miniVariant" class="px-2">
          <v-list-item-avatar color="whitish">
            <v-img :src="miniUrl" class="vuetify-logo" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item v-else link>
          <v-img
            lazy-src="https://myvodacom.vodacom.co.tz/assets/myvodacom/downloadFile/VD-1650X450_VICOBA%201.webp"
            max-height="70"
            max-width="200"
            src="https://elirehema.github.io/mcapp/mkoba.png"
          />
        </v-list-item>
      </v-list>

      <v-divider />
      <v-list shaped nav>
        <v-list-item
          v-for="child in menus"
          :key="child.title"
          :to="child.to"
          link
          color="white"
          class="pl-4"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ 'mdi-'+ child.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="font-weight-medium white--text">{{ child.title }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div v-if="false" class="pa-2">
          <v-btn block rounded color="warning" @click="$store.dispatch('_logoutsession')">
            <v-icon left>
              mdi-logout-variant
            </v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      flat
    >
      <v-spacer />
      <v-btn fab small class="mr-1" icon>
        <v-icon color="white">
          mdi-help-circle-outline
        </v-icon>
      </v-btn>
      <v-btn fab small class="mr-5" icon>
        <v-icon color="white">
          mdi-bell-badge-outline
        </v-icon>
      </v-btn>
      <v-badge
        bordered
        bottom
        color="success"
        dot
        offset-x="10"
        offset-y="10"
      >
        <v-avatar size="40">
          <v-img src="https://whatsondisneyplus.com/wp-content/uploads/2021/12/merida-avatar-wodp.png" />
        </v-avatar>
      </v-badge>
    </v-app-bar>

    <v-main>
      <v-container class="ma-2" height="100%" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <footer-component />
    </v-footer>
  </v-app>
</template>

<script>
import FooterComponent from '~/components/footer-component.vue'
export default {
  name: 'DefaultLayout',
  components: {
    'footer-component': FooterComponent
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      messages: 8,
      adv: 7,
      notifications: 1,
      menus: [
        {
          title: 'Home',
          icon: 'home-outline',
          to: '/'
        },
        {
          title: 'Groups',
          icon: 'account-group-outline',
          to: '/groups'
        },
        {
          title: 'Members',
          icon: 'account-group-outline',
          to: '/members'
        },
        {
          title: 'Reports',
          icon: 'file-chart'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      url: 'logo.png',
      miniUrl: 'logo.png'
    }
  },
  created () {
    localStorage.setItem('msisdn', '255754710521')
  }
}
</script>
