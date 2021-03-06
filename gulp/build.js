'use strict';

var gulp = require('gulp');
var exec = require('sync-exec');
var surge = require('gulp-surge');


var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function(options) {
	gulp.task('build:js', gulp.series('scripts', function buildJS () {
		return gulp.src(options.tmp + '/serve/app/index.js')
			.pipe($.rename(function (path) {
				path.basename = "craft"
			}))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	}));


	gulp.task('build-dependent:js', gulp.series('scripts:dependent', function buildDependent() {
		return gulp.src(options.tmp + '/serve/app/index.js')
			.pipe($.rename(function (path) {
				path.basename = "craft-dependent"
			}))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	}));

	gulp.task('copy:scripts:examples', function () {
		return gulp.src(options.tmp+'/serve/**/*.js')
		.pipe(gulp.dest('examples/'))
	});

	gulp.task('copy:others:examples', function () {
		return gulp.src('test/**/*.{ico,png,jpg}')
		.pipe(gulp.dest('examples/'))
	});

	gulp.task('html:examples', gulp.series('inject', function () {
		var assets;
		return gulp.src(options.tmp + '/serve/*.html')
			.pipe(assets = $.useref.assets())
			.pipe($.rev())
			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.js', $.uglify()))
			.pipe(assets.restore())
			.pipe($.useref())
			.pipe($.revReplace())
			.pipe($.if('*.html', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.html', $.minifyHtml({empty: true,	spare: true, quotes: true, conditionals: true})))
			.pipe(gulp.dest('examples/'))
			.pipe($.size({ title: 'examples/', showFiles: true }));
	}));

	gulp.task('mincopy:js', function () {
		return gulp.src(options.dist + '/*.js')
			.pipe($.uglify())
			.pipe($.rename(function (path) {
				path.extname = ".min.js"
			}))
			.pipe(gulp.dest(options.dist + '/'))
			.pipe($.size({ title: options.dist + '/', showFiles: true }));
	});

	gulp.task('clean', function () {
		return $.del([options.dist + '/', options.tmp + '/']);
	});

	gulp.task('clean:examples', function () {
		return $.del(['examples/', options.tmp + '/']);
	});

	gulp.task('build',gulp.series('clean','build:js','build-dependent:js','mincopy:js'));
	gulp.task('build:examples', gulp.series('clean:examples','html:examples','copy:scripts:examples','copy:others:examples'));


	gulp.task('deploy:examples', gulp.series('build:examples',function(done){
		var c = [
			'cd examples',
			'git init',
			'git add .',
			'git commit -m "Deploy to Github Pages"',
			'git push --force git@github.com:webcaetano/craft.git master:gh-pages' // remove pagezz to pages
		].join(" && ")
		console.log(exec(c));
		done();
	}));

	// gulp.task('surge', function () {
	// 	return surge({
	// 		project: './dist',         // Path to your static build directory
	// 		domain: 'phaser-boilerplate.surge.sh'  // Your domain or Surge subdomain
	// 	})
	// });
};

















// 'use strict';

// var gulp = require('gulp');
// var imagemin = require('gulp-imagemin');
// var exec = require('sync-exec');
// var surge = require('gulp-surge');

// var $ = require('gulp-load-plugins')({
// 	pattern: ['gulp-*', 'del']
// });

// module.exports = function(options) {
// 	gulp.task('html', gulp.series('inject', function html() {
// 		var assets;
// 		return gulp.src(options.tmp + '/serve/*.html')
// 			.pipe($.rev())
// 			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
// 			.pipe($.if('*.js', $.uglify()))
// 			.pipe($.useref())
// 			.pipe($.revReplace())
// 			.pipe($.if('*.html', $.preprocess({context: {dist: true}})))
// 			.pipe($.if('*.html', $.minifyHtml({empty: true,	spare: true, quotes: true, conditionals: true})))
// 			.pipe(gulp.dest(options.dist + '/'))
// 			.pipe($.size({ title: options.dist + '/', showFiles: true }));
// 	}));


// 	gulp.task('other', function () {
// 		return gulp.src([
// 			options.src + '/favicon.ico',
// 			options.src + '/404.html',
// 			options.src + '/audio/**/*'
// 		],{ base: './src' })
// 		.pipe(gulp.dest(options.dist + '/'));
// 	});

// 	gulp.task('rest', function (done) {
// 		return $.del([
// 			options.dist + '/app',
// 		]);
// 	});

	// gulp.task('clean', function () {
	// 	return $.del([options.dist + '/', options.tmp + '/']);
	// });


// 	gulp.task('prepare',gulp.series('clean','images:dist','other'));

// 	gulp.task('build',gulp.series('clean','prepare','html','rest'));

// 	gulp.task('deploy',function(done){
// 		var c = [
// 			'cd dist',
// 			'git init',
// 			'git add .',
// 			'git commit -m "Deploy to Github Pages"',
// 			'git push --force git@github.com:webcaetano/phaser-boilerplate.git master:gh-pages' // change adress to you repo
// 		].join(" && ")
// 		done();
// 	})

// 	// gulp.task('deploy:build',gulp.series('build','d'));

	// gulp.task('surge', function () {
	// 	return surge({
	// 		project: './dist',         // Path to your static build directory
	// 		domain: 'phaser-boilerplate.surge.sh'  // Your domain or Surge subdomain
	// 	})
	// });

// 	gulp.task('surge:build',gulp.series('build','surge'));
// };
