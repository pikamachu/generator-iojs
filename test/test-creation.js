'use strict';

var path = require('path')
  , assert = require('yeoman-generator').assert
  , helpers = require('yeoman-generator').test
  , test = require('prova')

test('iojs generator creation', function creationTest(t){
  var runTests

  helpers.testDirectory(path.join(__dirname, 'temp'), function testDirCreated(err){
    if (err){
      t.error(err)
    }

    this.app = helpers.createGenerator('node:app', [
      '../../app'
    ])

    this.app.options['skip-install'] = true
    runTests()
  }.bind(this))

  runTests = function runTests(){

    var expected = [
      'package.json'
      , '.editorconfig'
      , '.gitignore'
      , '.jscsrc'
      , '.jshintrc'
      , '.npmignore'
      , '.npmrc'
      , 'scripts.sh'
      , '.travis.yml'
      , 'README.md'
      , 'CONTRIBUTING.md'
      , 'CHANGELOG.md'
      , 'LICENSE'
    ]

    helpers.mockPrompt(this.app, {
      'name': 'mymodule'
      , 'description': 'awesome module'
      , 'pkgName': false
      , 'license': 'Artistic 2.0'
      , 'homepage': 'https://github.com'
      , 'githubUsername': 'octocat'
      , 'authorName': 'Octo Cat'
      , 'authorEmail': 'octo@example.com'
      , 'authorUrl': 'http://yeoman.io'
      , 'keywords': 'keyword1,keyword2,keyword3'
    })

    this.app.run({}, function appRun(){
      t.doesNotThrow(
        assert.file.bind(this, expected)
        , 'generates all expected files'
      )

      t.doesNotThrow(
        assert.fileContent.bind(this, 'package.json', /"name": "mymodule"/)
        , 'adds the module name to package.json'
      )

      t.end()
    })
  }.bind(this)

})
