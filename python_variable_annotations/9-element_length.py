#!/usr/bin/env python3
""" Element Length """
from typing import Sequence, Tuple, Iterable, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ Element Length """
    return [(i, len(i)) for i in lst]
