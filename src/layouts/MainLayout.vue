<template>
  <q-layout view="lHr Lpr lFr">
    <q-header elevated class="text-white" height-hint="98">
      <div class="row">
        <div class="col-6">
          <q-img
            src="~assets/osmoToolKit_temp-01.svg"
            alt="Osmosis Toolkit"
            aria-hidden="true"
          >
          </q-img>
        </div>
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
.q-header {
  background-color: $dark;
}
</style>
