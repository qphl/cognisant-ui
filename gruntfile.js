module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			toBuild: {
				files: [{
					expand: true,
					cwd: '_sass',
					src: '**/*.scss',
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		cssmin: {
			toDist: {
				files: [{
					expand: true,
					cwd: 'css',
					src: '**/*.css',
					dest: 'css'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass', 'cssmin']);
};