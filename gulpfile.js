const gulp = require('gulp');

/* Hay 5 metodos de Gulp que hay que comprender*/

// Ruta de origen de donde Gulp va a tomar los archivos de donde trabjar
gulp.src();

// Ruta de destino de los archivos con la tarea procesada
gulp.dest(); 

//Metodo para definir el nombre de las tareas
gulp.task('Nombre de la tarea como 1er parametro', () =>{
    '2do parametro, una funcion que indique lo que hara la tarea'
    /* EJEMPLO*/
    gulp.src('./origen')
        .pipe(plugin1)//Toma los datos que se estan procesando y pasarlo a otro modulo o plugin;
        .pipe(plugin)//Las tareas en pipe se ejecutan a traves de plugines
        .pipe(plugin3)
        .pipe(gulp.dest('./destino'))
}); 

//Metodo que supervisa un directorio constantemete y ejecuta tareas cuando suceda
//alguna accion definida
gulp.watch('1er parametro supervisa el Dir', '2do parametro ejecuta tarea');

//EJEMPLO

gulp.watch('./origen', 'myTask');
