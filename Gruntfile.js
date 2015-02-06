module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      src: ['app/*.js','test/*.js'],
      test: ['test/*.js']
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    },

    watch: {
      src: {
        files: ['public/javascript/*.js','public/stylus/*.styl'],
        tasks: ['jshint:src','stylus']
      },
      test: {
        files: ['test/*.js'],
        tasks: ['jshint:test','mochaTest']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['jshint']);
};