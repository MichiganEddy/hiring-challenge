var gulp = require('gulp');
var generateSchema = require('gulp-typescript-schema').generateSchema;

gulp.task('generateSchema', function(){
  gulp.src('./typeScripts/*.ts').pipe(generateSchema({
    path: 'schema.json'})).pipe(gulp.dest('./schemas'));
})