#!/usr/bin/env python3
""" Element Length """
from typing import Sequence, Union, Any, TypeVar, Mapping


def safely_get_value(dct: Mapping, key: Any,
                     default: Union[TypeVar('T'), None]) \
                         -> Union[Any, TypeVar('T')]:
    """ Element Length """
    if key in dct:
        return dct[key]
    else:
        return default
