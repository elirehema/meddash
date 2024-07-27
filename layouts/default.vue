<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="false"
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
            lazy-src="https://t3.ftcdn.net/jpg/00/81/99/34/360_F_81993402_vbYaI7g7DYw9XAUG1JQ7RkApGAsVSWGE.jpg"
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
            <v-icon color="white">
              {{ 'mdi-'+ child.icon }}
            </v-icon>
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
      <nuxt-link to="/">
        <v-avatar size="62">
          <img
            src="https://elirehema.github.io/meddash/doctor.png"
            alt="Doctors"
          >
        </v-avatar>
      </nuxt-link>

      <v-spacer />
      <v-btn v-if="false" fab small class="mr-1" icon>
        <v-icon color="white">
          mdi-help-circle-outline
        </v-icon>
      </v-btn>
      <v-btn v-if="false" fab small class="mr-5" icon>
        <v-icon color="white">
          mdi-bell-badge-outline
        </v-icon>
      </v-btn>
      <v-menu v-if="false" transition="slide-y-transition" :rounded="'0'" offset-y>
        <template #activator="{ on, attrs }">
          <v-badge
            bordered
            bottom
            color="blue lighten-1"
            dot
            offset-x="10"
            offset-y="10"
          >
            <v-avatar
              v-bind="attrs"
              size="56"
              v-on="on"
            >
              <v-img src="https://cdn4.vectorstock.com/i/1000x1000/83/08/female-doctor-avatar-character-vector-14878308.jpg" />
            </v-avatar>
          </v-badge>
        </template>
        <v-list dense>
          <v-list-item
            v-for="(item, index) in profile"
            :key="index"
            @click="_checkSelectedAction(item)"
          >
            <v-list-item-icon>
              <v-icon color="primary">
                {{ 'mdi-'+ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container class="ma-0" height="100%" fluid>
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
      profile: [
        {
          title: 'Logout',
          icon: 'logout-variant'
        }
      ],
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
          icon: 'file-chart',
          to: '/transactions'
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
  methods: {
    _checkSelectedAction (val) {
      if (val.title === 'Logout') {
        this.$store.dispatch('_logoutsession')
      }
    }
  }

}
</script>
