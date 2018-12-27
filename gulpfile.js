const gulp          = require('gulp'),
	  babel         = require('gulp-babel'),
	  sourcemaps    = require('gulp-sourcemaps'),
	  concat        = require("gulp-concat"),
	  uglify        = require('gulp-uglify');
 
gulp.task('default', () =>
    gulp.src('src/*.js')
	    .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
	            [
		            "@babel/preset-env",
		            {
		                "targets":
	                        {
	                            "browsers": ["last 2 versions", "> 5% in KR"]
	                        }
		            }
	            ]
            ]
        }))
	    .pipe(concat("index.js"))
	    .pipe(uglify())
	    .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'))
);
