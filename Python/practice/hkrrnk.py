# this only passes on half of them... why?

import math

ar = [1, 2, 1, 2, 3, 2, 1]
print('presorted:', ar)


def the_count(n, ar):
    count = 0
    list = sorted(ar)
    print(list)
    compare = ar[0]
    for i in list:
        if i == compare:
            count += 1
        else:
            compare = i
    return count//2


print(the_count(7, ar))
