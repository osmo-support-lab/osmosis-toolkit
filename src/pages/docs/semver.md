# Semver

> This project uses Semver or [semantic versioning](https://semver.org/). To sick the explaination of Semver and learn about this projects usage of Semver, head to [Osmosis Toolkit Semver](#osmosis-toolbox-semver)

- [Semver](#semver)
  - [What is Semantic Versioning?](#what-is-semantic-versioning)
  - [The Basics](#the-basics)
    - [But what do the numbers mean?](#but-what-do-the-numbers-mean)
      - [Patch](#patch)
      - [Minor](#minor)
      - [Major](#major)
    - [What about pre-releases or alpha versions?](#what-about-pre-releases-or-alpha-versions)
  - [Osmosis Toolbox Semver](#osmosis-toolbox-semver)
    - [A breakdown of the Example](#a-breakdown-of-the-example)
    - [Where we use semver](#where-we-use-semver)
      - [Finish a release](#finish-a-release)

## What is Semantic Versioning?

Simply put, a standardized way to give meaning to releases of software, packages, or any manner of iterable items. This is used to *easily* communicate to others that may wish to utilize a thing about important info regarding said thing and about the current release.

## The Basics

Semver is three numbers separated by a period. Often times a `v` is placed in front of the numbers to indicate "version" however this is not part of the sematic versioning guidelines. However, for projects utilizing semver, it is important **if** a prepended letter or something is being used, and the why.

A simple example of a standard semver could be: `1.2.8`

### But what do the numbers mean?

Reading from left to right the number represents the:

> "Major Release"."Minor Release"."Patch Release"

So using the example above, we can determine that this *thing* is on the 8th patch, since the 2nd minor release, since the 1st major release. When a number is increased, all numbers to the *right* of the increased number reset to `0`.

#### Patch

Used to signify:

- Code that has not added any new features/API changes
- Backwards compatible with previous version
- Typically used to signify bug fixes

#### Minor

Used to signify:

- Functionality added
- Otherwise backward compatible
- *Optional and by upgrading should not require code changes on part of the user*

#### Major

Used to signify:

- Changes made to public APIs
- Code is no longer backward compatible
- Feature was removed or functionality has changed
- *User WILL have to make code changes to utilize the thing*

### What about pre-releases or alpha versions?

This is where semver shows its extendability. For example, a project could go the route of a major version `0` indicating rapid development. Meaning the general API is not stable, and each minor version release could and most likely does include code breaking changes. Let's take a look.

Version: `0.56.2`

The above version number has a major version of `0`. Yet also has a minor version of `56` and a patch version of `2`. You can interpret this as, there have been two patch updates to minor version `56` that should be backwards compatible with `0.56.0`.

## Osmosis Toolbox Semver

As stated above, we are using semver. The following is our spec for semver of the Osmosis Toolkit.

**Complete Example:** `X.Y.Z{-[alpha | beta]-A.B.C}`

### A breakdown of the Example

Following normal semver rules:

- `X` = Major Version
- `Y` = Minor Version
- `Z` = Patch Version

Unique to Osmosis Toolkit rules:

- `-[alpha | beta]` == release state of the toolkit. Alpha should be considered *less* stable than a beta.
- `-A.B.C`:
  - `A` = Major alpha/beta Version
  - `B` = Minor alpha/beta Version
  - `C` = Patch alpha/beta Version

As you can tell we try to keep it as simple as possible without over complicating things.

### Where we use semver

Semver is used exclusively when releasing active changes to the website/toolkit.

Generally the code maintainers will initialize a new release branch by using:

```sh
git flow release start <version> [<base>]
```

This allows for async work on multiple versions if needed. Above you'll see `[<base>]` this is an optional parameter utilized if we need to create a release based on a branch *other than `dev`*. But default without indicating, a new released is based on the `dev` branch.

>**Note:** By utilizing `git flow` you **DO NOT** have to add a `v` in front of the version number, it is automatically added by the `git flow release finish` command.

#### Finish a release

Using the `git flow` model. It is very easy to finish and send a release to the main deploying branch.

```sh
git flow release finish <version>
```

This will:

- Automatically fetch and check any changes that may have been made to the version branch
- Apply a tag with the version number (for example: `v1.2.3`)
- Push the tag
- Push the commit to the production branch. `main`
- Push the commit to the development branch. `dev`
- Remove the version branch and or force delete (if needed)
- Back merge the production branch or tag (if needed)
- Squash release during merge

The important flags that any contributor might need to know is `--keeplocal` or `--keepremote`. These two tags do exactly what you think would. By keeping the finished released on the local machine, or at the remote repository.

> To see all options check out the [git flow docs](https://git.logikum.hu/flow/release#finish) for more information
