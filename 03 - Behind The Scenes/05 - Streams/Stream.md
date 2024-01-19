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