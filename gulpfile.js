'use strict';

////////////////////////////////////////////////////////////////////////////////
// Gulp libs
////////////////////////////////////////////////////////////////////////////////
var gulp = require('gulp');
var template = require('gulp-template');
var rename = require("gulp-rename");
var exec = require('child_process').exec;

////////////////////////////////////////////////////////////////////////////////
// Default environment specific variables
////////////////////////////////////////////////////////////////////////////////
var isProd = false;

////////////////////////////////////////////////////////////////////////////////
// Set prod mode
////////////////////////////////////////////////////////////////////////////////
gulp.task('set-prod-mode', function(done) {
    isProd = true;
    done();
});

////////////////////////////////////////////////////////////////////////////////
// Use the index-template to render the index.html file
////////////////////////////////////////////////////////////////////////////////
gulp.task('render-index', function(done) {
    var stream = gulp.src('./templates/index-template.html')
        .pipe(template({
            isProd: isProd
        }))
        .pipe(rename('index.html'));
    if (isProd) {
        stream.pipe(gulp.dest('./build'));
        console.log('render-index for prod done');
        done();
    } else {
        stream.pipe(gulp.dest('./'));
        console.log('render-index for dev done');
        done();
    }
});
////////////////////////////////////////////////////////////////////////////////
// start server
////////////////////////////////////////////////////////////////////////////////
gulp.task('dev-server', gulp.series('render-index', function(done) {
  let port = 8001;
  let hs = require("http-server");
  let open = require('open');
  let chokidar = require('chokidar-socket-emitter');
  let server = hs.createServer({
      "root": process.cwd(),
      cache: -1,
      robots: true,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
      }
  });
  chokidar({
      app: server.server,
      relativeTo: process.cwd(),
      dir: process.cwd(),
      path: process.cwd()
  });
  server.listen(port);
  open('http://127.0.0.1:' + port);
  done();
}));


////////////////////////////////////////////////////////////////////////////////
// experiment
////////////////////////////////////////////////////////////////////////////////
gulp.task('dummy-0', function(done) {
    exec('ls -l ',
        function(err, stdout, stderr) {
            if (err) {
                throw err;
            } else {
                console.log('dummy-0 done');
                done();
            }
        });
});


gulp.task('dummy', gulp.series('dummy-0', function(done) {
    console.log('dummy complete');
    done();
}));
