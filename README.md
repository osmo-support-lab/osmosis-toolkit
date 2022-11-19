# Osmosis Toolkit

![Osmosis Toolkit Logo][logo]

A lite, easy to use toolkit for interacting with the Osmosis Blockchain. The first of many projects spearheaded by the Osmosis Support Lab, a community funded organization for the Osmosis community.

## Features

* Mobile first, simple, [Material Design][material_design] based UI built with [Quasar][quasar] and [Vue.js][vue]
* Interaction with the [Osmosis][osmosis_gh] Blockchain via [Keplr][keplr_home] and [OsmoJS][osmojs_gh]

| Feature                      | Status                              |
| ---------------------------- | ----------------------------------- |
| Swaps                        | ![Status: Coming Soon][coming_soon] |
| Joining/Exiting Pools        | ![Status: Coming Soon][coming_soon] |
| Bonding/Unbonding from Pools | ![Status: Coming Soon][coming_soon] |

## Run the toolkit locally

<!-- markdownlint-disable MD029 -->

The below steps are what one would need to do to either contribute, or run a local version.

---

1. Clone and fork the Github repo.

```sh
git clone https://github.com/osmosis-support-lab/osmosis-toolkit

cd osmosis-toolkit

git fetch upstream

git checkout dev
```

---

2. Install all dependencies.

```sh
yarn
```

---

You can down run a local copy of the Osmosis tool kit! Simply run:

```sh
yarn dev
```

This will automatically create a "hot-refresh" build in which you can make changes to the code, save the file, and see the change live! Or, if you simply want to utilize a local copy.

For those wishing to *contribute* please read along.

---

## Contributing

Contributions are always welcome! See [`contributing.md`](.github/CONTRIBUTING.md) for ways to get started. Please adhere to this project's [`code of conduct`](.github/CODE_OF_CONDUCT.md).

If you followed the above steps to get a local copy up and running, congratulations! You're halfway there!

---

### Git Flow

This repo follows the [`git flow`](https://git.logikum.hu/flow/) model of repositories. For in-depth information please visit the [`contributing`](.github/CONTRIBUTING.md) guide.

* New Feature:
  * **Start:** `git flow feature start <name>`
  * **End:** `git flow feature finish <name>`
  * **Publish:** `git flow feature publish <name>`
* Bugfixes:
  * **Start:** `git flow bugfix start <name>`
  * **End:** `git flow bugfix finish <name>`
  * **Publish:** `git flow bugfix publish <name>`

### Things to do every time you publish

We are asking all contributors to ensure that all files are linted, and formatted. Before a release build is created, the repo maintainers also perform these steps as a back up, but the less errors at build time, the better!

**To Lint:**

```bash
yarn lint
```

**To Format:**

```bash
yarn format
```

## Resources used

### Frameworks/UI Builders

* [Quasar Framework][quasar]
* [Vue.js][vue]

### Blockchain Integrations

* [OsmoJS][osmojs_gh]
* [Keplr Wallet / Types](https://github.com/chainapsis/keplr-wallet/tree/master/packages/types)
* [Cosmos Kit / Core](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/core)
* [Chain Registry / Osmosis](https://github.com/cosmology-tech/chain-registry/tree/main/packages/osmosis)

## License

[MIT](/LICENSE)

[logo]: src/assets/OsmoToolKitBanner.svg
[material_design]: https://m3.material.io/
[quasar]: https://quasar.dev/
[vue]: https://vuejs.org/
[osmosis_gh]: https://github.com/osmosis-labs/osmosis
[keplr_home]: https://keplr.app/
[osmojs_gh]: https://github.com/osmosis-labs/osmojs
[coming_soon]: https://img.shields.io/badge/Status%3A-Coming%20Soon-red
