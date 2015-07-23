'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	runSequence = require('run-sequence'),
	plugins = gulpLoadPlugins(),
  testJs = ['app/**/*.spec.js'],
	appJs = ['app/app.js', 'app/**/!(*.spec)*.js'],
	angularJs = [
		'bower_components/angular/angular.js',
		'bower_components/angular-animate/angular-animate.js',
		'bower_components/angular-aria/angular-aria.js',
		'bower_components/angular-material/angular-material.js',
	],
  clientJs = _.union(angularJs, appJs),
  allJs = _.union(clientJs, testJs),
	myJs = _.union(appJs, testJs),
  allSass = 'app/**/*.scss';

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(myJs, ['jshint', 'karma', 'combine']);
	gulp.watch(allSass, ['sass']);
});

// JS linting task
gulp.task('jshint', function () {
	return gulp.src(myJs)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.jshint.reporter('fail'));
});


// JS combine task
gulp.task('combine', function () {
	return gulp.src(clientJs)
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest('assets'));
});

// Sass task
gulp.task('sass', function () {
	return gulp.src(allSass)
		.pipe(plugins.sass())
		.pipe(plugins.rename(function (path) {
			path.dirname = path.dirname.replace('/scss', '/css');
		}))
		.pipe(gulp.dest('assets'));
});

// Karma test runner task
gulp.task('karma', function (done) {
	return gulp.src([])
		.pipe(plugins.karma({
			configFile: 'karma.conf.js',
			action: 'run',
			singleRun: true
		}));
});

gulp.task('default', function(done) {
	runSequence('build', 'watch', done);
});

gulp.task('build', function(done) {
	runSequence('jshint', 'karma', 'sass', 'combine', done);
});