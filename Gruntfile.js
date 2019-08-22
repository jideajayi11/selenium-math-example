module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
      cucumber: {
        command: 'cucumber-js ./cucumber/myFeatures -r ./cucumber/mySteps'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-shell'); 
};
// gulp.task('cucumber', shell.task([
//   'cucumber-js ./cucumber/myFeatures -r ./cucumber/mySteps'
// ]));
