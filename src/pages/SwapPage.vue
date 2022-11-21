<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SwapPage',
  setup() {
    return {
      model: ref(null),
      modelBottom: ref(null),
      price: ref(null),
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
        <q-card class="buttonCard row"> </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-card id="top">
          <q-card-section class="amountCoins row justify-start"
            >Amount:
            <!-- {{ coinsInBag }} --></q-card-section
          >
          <q-card-section class="row buttonCard"
            ><q-btn-group push class="amountButtons">
              <q-btn
                color="secondary"
                push
                label="0.25"
                aria-label="one quarter"
                role="button"
                aria-pressed="false"
              /><q-btn
                color="secondary"
                push
                label="0.33"
                aria-label="one half"
                role="button"
                aria-pressed="false"
              />
              <q-btn
                color="secondary"
                push
                label="0.5"
                aria-label="one half"
                role="button"
                aria-pressed="false"
              />
              <q-btn
                color="secondary"
                push
                label="0.75"
                aria-label="three quarters"
                role="button"
                aria-pressed="false"
              />
              <q-btn
                color="secondary"
                push
                label="MAX"
                aria-label="all"
                role="button"
                aria-pressed="false"
              /> </q-btn-group
          ></q-card-section>
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
                <q-avatar size="5.0rem"
                  ><img
                    src="https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
                /></q-avatar>
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
          ><q-item-section class="col"
            ><q-input
              rounded
              standout
              v-model.number="price"
              type="number"
              input-class="text-right"
          /></q-item-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-card class="row" id="bottom">
          <q-item-section class="col"
            ><q-select
              rounded
              standout
              clearable
              transition-show="jump-up"
              transition-hide="jump-down"
              label="To"
              v-model="modelBottom"
              :options="options"
              ><template v-slot:append>
                <q-avatar size="5.0rem"
                  ><img
                    src="https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
                /></q-avatar>
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
.q-card {
  border-radius: 2rem;
}
.q-select,
.q-input {
  width: 95%;
  align-self: center;
}
.q-input {
  margin: 0.5rem 0;
}
#top {
  margin: 0.25rem;
  padding: 0.55rem;
}
#bottom {
  margin: 0.25rem;
  padding: 0.25rem;
}
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
}
.q-btn {
  padding: 0 0.75rem;
}
</style>
