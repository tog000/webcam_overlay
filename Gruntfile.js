'use strict';
//npm install grunt-contrib-watch --save-dev

module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			html: {
				files: '**/*.html',
				tasks: [],
				options: {
					livereload: true,
				},
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');

};
