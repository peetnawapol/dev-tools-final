<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      width="338"
      color="rgba(0,0,0,.2)"
      dark
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        <v-img src="https://new.reg.kmitl.ac.th/admission/kmitl_logo.png" max-width="120" />
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="pa-7">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-book-open-variant',
          title: 'คู่มือการใช้งานระบบรับสมัคร',
          to: '#u1'
        },
        {
          icon: 'mdi-card-search',
          title: 'ค้นหาหลักสูตร | ปริญญาตรี',
          to: '#u2'
        },
        {
          icon: 'mdi-card-search',
          title: 'ค้นหาหลักสูตร | ปริญญาโท',
          to: '/'
        },
        {
          icon: 'mdi-card-search',
          title: 'ค้นหาหลักสูตร | ปริญญาเอก',
          to: '#u3'
        },
        {
          icon: 'mdi-bullhorn',
          title: 'รวมประกาศ | ปริญญาตรี',
          to: '#u4'
        },
        {
          icon: 'mdi-bullhorn',
          title: 'รวมประกาศ | บัณฑิตศึกษา',
          to: '#u5'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-main {
  background-color: rgb(115, 187, 169);
}

.v-application .v-application--wrap * {
  font-family: $body-font-family !important;
}
</style>
