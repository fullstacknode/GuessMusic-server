import gulp from 'gulp';
import bump from 'gulp-bump';
import start from 'gulp-start-process';

gulp.task('default', ['spec']);

['major', 'minor', 'patch'].forEach((type) => {
  gulp.task(`bump:${type}`, ['build'], () =>
    gulp.src('./package.json')
    .pipe(bump({ type }))
    .pipe(gulp.dest('./'))
  );
});

gulp.task('bump', ['bump:patch']);

gulp.task('spec', ['spec:ut']);

gulp.task('spec:ut', (done) => {
  start('./node_modules/.bin/mocha --harmony --opts mocha.opts "specs/**/*Spec.js"', done);
});
