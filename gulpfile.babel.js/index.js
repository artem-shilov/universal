import gulp from "gulp";
import browserSync from "browser-sync";

//Конфигурация
import path from "./config/path.js";
import app from "./config/app.js";

//Задачи
import clear from "./tasks/clear.js";
import html from "./tasks/html.js";
import scss from "./tasks/scss.js";
import js from "./tasks/js.js";
import img from "./tasks/img.js";
import font from "./tasks/font.js";


//Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

//Наблюдение
const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch(path.scss.watch, scss);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch, img).on("all", browserSync.reload);
  gulp.watch(path.font.watch, font).on("all", browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(html, scss, js, img, font));
const dev = gulp.series(build, gulp.parallel(watcher, server));

//Задачи
export { html };
export { scss };
export { js };
export { img };
export { font };


//Сборка
export default app.isProd ? build : dev;
