import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done) {
    src('src/js/app.js')
        .pipe(dest('build/js'))

    done()
}

export function css(done) {
    src('src/scss/app.scss', {sourcemaps: true})
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('build/css', {sourcemaps:true}))

    done()
}

export function dev() {
    watch('src/scss/**/*.scss', css)//cuando se pone los astericos se indica que busque todos los archivos que terminen en .sccs para aplicarlo en todo el proyecto
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev)

