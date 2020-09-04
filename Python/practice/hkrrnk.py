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


# this is  also from hackerRank

def pairs(k, arr):
  # Use a Set:
  # time: O(2n) -> O(n)
  # space: O(n)
  counter = 0
  # convert array to Set
  arr_set = set(arr)
  # loop through our array
  for val in arr:
    # subtract target from each value in set
    # this tells us the number that it would have to be to work.. looks for the residing value
    # if val is from arr and we subtract one from another to get the difference we just look for 
    # value subtracting K to get what the number would have to be for it to count and then
    # if it exists we add to the count
    if val - k in arr_set:
      counter += 1
    # check if difference is in the set
      # if so, increment counter
      
  return counter

#   the other way to do this involves loop twice.. this is more effeicient

print(pairs(1, [2,3,4])) # expect 2
print(pairs(2, [1,3,5,7])) # expect 3
