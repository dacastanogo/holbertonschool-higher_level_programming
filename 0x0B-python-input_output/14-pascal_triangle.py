#!/usr/bin/python3
'''Module for pascal_triangle method.'''


def pascal_triangle(n):
    '''Method that solves pascal's triangle.'''
    trow = [1]
    y = [0]
    for x in range(max(n,0)):
      print(trow)
      trow=[l+r for l,r in zip(trow+y, y+trow)]
    return n>=1
