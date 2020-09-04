import time
import random


def tell_me_a_story():
    # I am using this list of the names of the files in place of just one so that there are mulitple stories it can tell you by picking a random number to choose from the list which it will tell...
    story_list = ["shin.txt", "painting.txt", "feelings.txt"]
    num = random.randint(0, 2)
    tell_it = story_list[num]
    shin = open(tell_it, 'r')
    for line in shin:
        time.sleep(3)
        print(line)


tell_me_a_story()
