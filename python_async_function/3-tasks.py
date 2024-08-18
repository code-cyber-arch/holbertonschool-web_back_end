#!/usr/bin/env python3
'''
Test file for printing the correct output of the wait_n coroutine
'''
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    '''
    Test file for printing the correct output of the wait_n coroutine
    '''
    return (asyncio.create_task(wait_random(max_delay)))
