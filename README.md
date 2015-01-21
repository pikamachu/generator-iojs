# Yoeman Generator for Node projects

[![NPM](https://nodei.co/npm/generator-iojs.png)](https://nodei.co/npm/generator-iojs/)  ![Depencency status](https://david-dm.org/joeybaker/generator-iojs.png)

A basic node module template, that includes handy git hooks, a release script, and auto-changelog generation.

Here's what you get:

* auto-creates a `package.json`
* auto-creates and keeps your `.npmignore` file up-to-date
* auto-creates a `CONTRIBUTING.md`
* auto-creates a `LICENSE`
* auto-creates a `README.md` with a template that you can fill in
* auto-creates a `.travis.yml` for easy CI
* tests are auto-setup in tape, and it uses prova so you can do browser tests too
* auto-runs tests and linters before a `git push`, to ensure you can never push bad code
* auto-runs the Node Security Project advisory list against installed node modules before a `git push` to make sure your project is always secure
* adds a release script to automate the headache of releasing a new version. It auto-generates a changelog, runs the tests, bumps the version, pushes to github, and publishes to npm.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
  - [Requirements](#requirements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Install
`npm install -g generator-iojs yo`

## Usage
```sh
yo node
```

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`
