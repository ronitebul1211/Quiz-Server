/**
 readFile vs readFileSync
 https://stackoverflow.com/questions/17604866/difference-between-readfile-and-readfilesync
 you should never call readFileSync in a node express/webserver since it will tie up the single thread loop while I/O is performed.
 */
