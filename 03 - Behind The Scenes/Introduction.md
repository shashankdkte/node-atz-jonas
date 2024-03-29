# Node V8 Libuv and C++

## Node Architecture 

V8 is the fundamental part in Node Arch
Without it, wont be able to understand javascript code

### Libuv
Open Source Library with strong focus on Asynchronous I/O
OS,network system,File System
![image info](../images/01_Node_Arch.png)
Event Loop
  Responsible for handling simpler task 
  Executing callbacks
  Network IO
Thread Pool
  File Access
  Compression

V8  in  Js and C++  and Libuv are written in c++

It also has 
| Packages    	| Functionality        	|
|-------------	|----------------------	|
| http-parser 	| parsing HTTP request 	|
| c-ares      	| For DNS Request      	|
| OpenSSL     	| Cryptography         	|
| zlib        	| Compression          	|


## Process and Thread
![image info](./images/02_Process.png)

## Event Loop
It does the orchestration. Passes on expensive tasks to thread pool
![image info](./images/03_Event_Loop.png)


I/O Polling 
Network Request and File Access

![image info](./images/04_Loop_Understanding.png)

## Event Driven Architecture
![image info](./images/05_Event_Driven.png)


## Streams
Used to process (read or write ) data piece by piece (chunks),
without completing the whole read or write operation and therefore
without keeping all the data in memory

There are Four  Types of Stream
Readable Stream
Writeable Stream
Duplex Stream
Transform Stream

Stream are instances of EventEmitter Class
| Streams   	| Description                                                 	| Example                            	| Important Events 	| Important Functions 	|
|-----------	|-------------------------------------------------------------	|------------------------------------	|------------------	|---------------------	|
| Readable  	| Stream from which we can read data                          	| http requests<br>fs read streams   	| data<br>end      	| pipe()<br>read      	|
| Writeable 	| Streams to which we write data                              	| http responses<br>fs write streams 	| drain <br>finish 	| write()<br>end()    	|
| Duplex    	| Streams that are both readable and writeable                	| net websocket                      	|                  	|                     	|
| Transform 	| Duplex streams that transform data as it is written or read 	|                                    	|                  	|                     	|