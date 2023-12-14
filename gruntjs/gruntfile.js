module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                },
                files: {
                    'dev/styles/main.min.css': 'src/styles/main.less'
                }
            },
        },
        uglify: {          
            build: {                
                src: 'src/scripts/main.js', 
                dest: 'dev/script/main.min.js'                
            }                            
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')    
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less', 'uglify'])
}