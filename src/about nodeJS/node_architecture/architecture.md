# Node Imp Dependencies

Node requires following dependencies to work properly.

1. ##### V8 Engine : helps machine to understand JS.
2. ##### libuv : 
    1. open source, follows asynchronus I/O
    2. event loop, thread pool
    3. written in C++.

## Terminologies

1. Process: A node program in execution is called a process.
2. Thread: sequence of instructions (nodeJs has single thread only)
3. Thread Pool: 
    1. heavy tasks(fs,compression tasks) from event-loop are delegated to thread pool and it carries out them.
    2. There are additional 4 threads ( can be configured upto 128 max)

# Working Architecture

1. A process runs.
2. Thread Working
    1. Program initialization
    2. top level code execution
    3. require modules
    4. register callbacks
    5. start event loop (heart of node)
    6. event loop delegated heavy operations to #Thread_Pool. 

# Event Loop
Event Loop is very important(heart) concept of nodeJs.

    1. Heart ❤ of NodeJS
    2. Makes node asynchronus 
    3. Transfers heavy operations to thread pool.
    4. Recieves events and execute their callback functions.
    5. Event loop has many phases & each phase has their own callback queues.

## Phases of Event Loop
1. Event loop has many phases & each phase has their own callback queues.

2. EL enters next phase only when callback queue of curent phase is cleared.

The most imp phases in order of their execution are:

    1. expired timers
    2. I/O polling
    3. setImmediate callbacks
    4. close callbacks

3. Never block event loop
    1. blocking EL can cause serious performance issues.
    2. don't use synchronous version of functions.
    3. don't perform complex calcs(nested loop etc.)
    4. take care of JSON

4. Apart from the above phase's queues, there are also:

```git
    1. process.nextTick() queue
    2. other microtask queues (for resolved promises)

    The above are executed on priority
```
