var gulp = require('gulp'),
	less = require('gulp-less'),
	gulpSequence = require('gulp-sequence'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

gulp.task('less', function () {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'))
		.pipe(reload({stream: true}));
});

gulp.task('default', ['less'], function () {
});

gulp.task('watch', ['less'], function () {
	gulp.watch('less/*.less', ['less']);
});