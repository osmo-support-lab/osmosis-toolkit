<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SwapPage',
  setup() {
    return {
      model: ref(null),
      options: [
        {
          label: 'OSMO',
          value: 'uosmo',
          description: 'Osmosis',
          avatar:
            'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
        },
        {
          label: 'ION',
          value: 'uion',
          description: 'Osmosis',
          avatar:
            'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
        },
      ],
    };
  },
});
</script>

<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <q-card class="buttonCard row">
          <q-card-section class="amountCoins col"
            >Amount:
            <!-- {{ coinsInBag }} --></q-card-section
          >
          <q-card-section class="buttonCard"
            ><q-btn-group push class="amountButtons">
              <q-btn
                color="secondary"
                size="1.5rem"
                push
                label="1/4"
                aria-label="one quarter"
                role="button"
                aria-pressed="false"
              />
              <q-btn
                color="secondary"
                size="1.5rem"
                push
                label="1/2"
                aria-label="one half"
                role="button"
                aria-pressed="false"
              />
              <q-btn
                color="secondary"
                size="1.5rem"
                push
                label="3/4"
                aria-label="three quarters"
                role="button"
                aria-pressed="false"
              />
              <q-btn
                color="secondary"
                size="1.25rem"
                push
                label="MAX"
                aria-label="all"
                role="button"
                aria-pressed="false"
              /> </q-btn-group
          ></q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-card class="row">
          <q-item-section class="col"
            ><q-select
              rounded
              standout
              clearable
              options-dense
              transition-show="jump-up"
              transition-hide="jump-down"
              label="From"
              v-model="model"
              :options="options"
              ><template v-slot:prepend>
                <q-avatar hidden></q-avatar>
              </template>
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section avatar>
                    <q-avatar><img :src="`${scope.opt.avatar}`" /></q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                    <q-item-label caption>{{
                      scope.opt.description
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template></q-select
            ></q-item-section
          >
        </q-card>
      </div>
    </div></q-page
  >
</template>

<style scoped lang="scss">
.buttonCard {
  background: none;
  padding: 0;
  box-shadow: none;
}
.amountButtons {
  font-family: $number;
  font-variant-numeric: diagonal-fractions;
}
.amountCoins {
  font-family: $number;
  padding-top: 1.65rem;
}
.q-btn {
  padding: 0 0.75rem;
}
</style>
