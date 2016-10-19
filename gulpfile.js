var gulp = require ('gulp');
var sass = require ('gulp-sass');


gulp.task('sass', function () {

	gulp.src('./www/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./www'));
});

gulp.task('sass:watch', function () {

	gulp.watch('./www/**/*.scss', ['sass']); 

});


