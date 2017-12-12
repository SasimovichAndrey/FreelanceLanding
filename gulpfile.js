var argv = require('yargs').argv;
var isProduction = (argv.production === undefined) ? false : true;

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    preprocess = require('gulp-preprocess'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('img', ['clean'], function(){
    return gulp.src(['src/img/**/*', 'src/favicon.ico'], {base: 'src'})
        .pipe(gulp.dest('dist'));
})

gulp.task('preprocess', ['clean'], function(){
    var nodeEnv = isProduction ? 'production' : 'develop';

    return gulp.src(['src/**/*', '!src/img/**/*', '!src/favicon.ico'])
        .pipe(preprocess({context: { NODE_ENV: nodeEnv}}))
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', ['preprocess', 'img'], function(){
    return connect.server({
        root: 'dist'
    });
})

gulp.task('watch', ['connect'], function(){
    var nodeEnv = isProduction ? 'production' : 'develop';
	var watcher =  watch(['src/**/*'], function(obj){
		gulp.src(obj.path, {"base": "src/"})
			.pipe(preprocess({context: { NODE_ENV: nodeEnv}}))
			.pipe(gulp.dest('dist'));
	});

	return watcher;
});

gulp.task('build', ['preprocess', 'img']);

gulp.task('default', ['watch']);