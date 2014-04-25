var gulp		= require('gulp'),
	gutil		= require('gulp-util'),
	sass		= require('gulp-ruby-sass'),
	watch		= require('gulp-watch'),
	notify		= require('gulp-notify'),
	rename		= require('gulp-rename'),
	minifycss	= require('gulp-minify-css'),
	clean		= require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src(['css'], {read: false})
    .pipe(clean());
});

gulp.task('styles', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({ style: 'expanded' }))
	.on('error', gutil.log)
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

/**
 * Watch task
 */
gulp.task( 'watch', function() {
	gulp.start( 'default' );
	gulp.watch( 'scss/**/*.scss', ['styles'] );
});
