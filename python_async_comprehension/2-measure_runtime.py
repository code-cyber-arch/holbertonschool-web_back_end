#!/usr/bin/env python3
""" Measure Runtime """
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ Measure Runtime """
    start = time.time()
    await asyncio.gather(*[async_comprehension(), async_comprehension(),
                           async_comprehension(), async_comprehension()])
    total_runtime = time.time() - start
    return total_runtime
