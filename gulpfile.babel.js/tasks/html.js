import gulp from 'gulp';

//Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

//Плагины
import htmlmin from 'gulp-htmlmin';
import webpHtml from 'gulp-webp-html';
import plumber from 'gulp-plumber';
// import webpHtmlNosvg from 'gulp-webp-html-nosvg'
 
//Обработка HTML
const html = () => {
  return gulp.src(path.html.src)
      .pipe(plumber())
      .pipe(webpHtml())
      // .pipe(webpHtmlNosvg())
      .pipe(htmlmin(app.htmlmin))
      .pipe(gulp.dest(path.html.dest))  
}
export default html;