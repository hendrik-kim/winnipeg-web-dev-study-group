<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left flat height="72">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Winnipeg Web Development Study Group</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped left>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: '시간표', icon: 'mdi-calendar', to: '/schedule' },
      { title: '시작하기', icon: 'mdi-lead-pencil', to: '/start' },
      { title: '공부자료', icon: 'mdi-book-open-variant', to: '/resource' },
    ],
  }),
};
</script>
