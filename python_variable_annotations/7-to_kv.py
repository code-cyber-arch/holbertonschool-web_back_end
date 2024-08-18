#!/usr/bin/env python3
""" Return Tuple """
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Return Tuple """
    lst = [k, pow(v, 2)]
    return tuple(lst)
