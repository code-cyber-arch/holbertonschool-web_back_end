#!/usr/bin/env python3
'''
Test file for printing the correct output of the wait_n coroutine
'''
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    '''
    Test file for printing the correct output of the wait_n coroutine
    '''
    delay = [
        wait_random(max_delay) for i in range(n)
    ]
    results = []
    for next_to_complete in asyncio.as_completed(delay):
        result = await next_to_complete
        results.append(result)
    return results
