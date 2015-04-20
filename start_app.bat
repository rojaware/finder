echo 'starting...'
call "cmd /c start mongod"
call "cmd /c start server_node.bat"
call "cmd /c start client_grunt.bat"
timeout /t 10 >nul
mongo
