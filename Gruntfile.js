module.exports = function(grunt){
    //configurações de instalação - grunt
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

    
    //tarefas   
    less:{
        development:{        
            files:{
                'dist/styles/main.css':'src/styles/main.less'
            }
        }
    },
    watch:{
        less:{
            files: ['./src/styles/**/*.less'], //arquivos que serão "assistidos".
            tasks: ['less'] //tarefas que serão executadas quando houver modificação nos arquivos acima
        }
    },
    uglify:{
        target:{
            files:{
                'dist/scripts/main.min.js':'src/scripts/main.js'
            }
        } 
    }
})
//pacotes-plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

//tarefas a executar
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build',['less', 'uglify']);
}
