<template>
  <q-layout view="lHr Lpr lFr">
    <q-header elevated class="text-white" height-hint="98">
      <div class="row">
          <img
            src="~assets/OsmoToolKitBanner.svg"
            alt="Osmosis Toolkit"
            aria-hidden="true"
            id="banner"
          >
      </div>

      <q-tabs align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/swap" label="Swap" />
        <q-route-tab to="/pool" label="Pool" />
        <q-route-tab to="/docs" disabled label="Docs" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title
          ><q-badge>v{{ $q.version }}</q-badge></q-toolbar-title
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
.row {
  justify-content: center;
}
#banner {
  @media only screen and (max-width: 620px) {
    width: 275px;
  }
}
.q-header {
  background-color: $dark;
}
</style>
