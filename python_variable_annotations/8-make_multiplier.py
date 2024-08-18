#!/usr/bin/env python3
""" Multipler """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ create and return a multiplier function """

    def multiplier_function(x: float) -> float:
        """ Multiplier """
        return multiplier * x

    return multiplier_function
