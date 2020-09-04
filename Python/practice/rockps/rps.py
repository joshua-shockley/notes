import random
import time


wins = 0
ties = 0
losses = 0

print("welcome to my version of ROCK, PAPER, SCISSORS! \n")
time.sleep(1)
user_name = input("what's your name...? ")
# print("Wins: %s, Ties: %s, Losses: %s" % (wins, ties, losses))
time.sleep(1)
print("Please make a choice to coninue")


# now we initialize the choices
# first we make the computer randomly generated choice
computer = random.randint(1, 3)
user = input("[1] Rock [2] Paper [3] Scissors [9] Quit \n")

input_list = ['9', '3', '2', '1', 'story']


# now we make the game play loop
while not user == '9':
    time.sleep(2)
    if user == '1':  # user chooses rock
        print(f"\nThe Computer picked {computer}\n")
        time.sleep(2)
        if computer == 1:  # ties
            print(f"{user_name} It's a tie!!!\n")
            ties += 1
        elif computer == 2:  # comp beats user
            print(f"{user_name}... You lost..... try again! lol\n")
            losses += 1
        elif computer == 3:  # user beats comp
            print(f"{user_name}  You're the Winner!! \n")
            wins += 1
    # user chooses paper
    elif user == '2':
        print(f"\nThe Computer picked {computer}\n")
        time.sleep(2)
        if computer == 1:  # user beats comp
            print("You're the Winner!! \n")
            wins += 1
        elif computer == 2:  # tie
            print("It's a tie!!! \n")
            ties += 1
        elif computer == 3:  # comp beats user
            print("You lost... Loser.. try again! lol\n")
            losses += 1
    elif user == '3':  # user chooses scissors
        print(f"\nThe Computer picked {computer}\n")
        time.sleep(2)
        if computer == 1:  # comp beats user
            print("You lost... Loser.. try again! lol\n")
            losses += 1
        elif computer == 2:  # user beats comp
            print("You're the Winner!! \n")
            wins += 1
        elif computer == 3:  # tie
            print("It's a tie!!!\n")
            ties += 1
    elif user == 'story':
        from stories import tell_me_a_story
        # this is the part where i make it pick a random number from a list of STORIES in another file and it will print the story then wait about 10 sec then start over again
        print('so you want a story? \n ok..... give me a second..\n you know that we have a game going though right?')
        time.sleep(2)
        tell_me_a_story()
        time.sleep(3)
        print("\n ok back to the GAME here\n\n")
    elif type(user) is not ('1' or '2' or '3' or '9' or 'story'):
        print('huh???\n')
        time.sleep(1)
        print(f"\n{user} is not the correct input please pick a number\n")
        time.sleep(2)
    print("Wins: %s, Ties: %s, Losses: %s \n" % (wins, ties, losses))
    if wins >= 10:
        if wins > losses:
            print("doing good here champ!\n If you're looking for a treat for doing well enter 'story' in for your next choice")
        if losses > wins:
            print(
                'try a little harder chump...lol\n getting your butt beat by some alloy and plastic')
        print(
            "need to pick [1] Rock [2] Paper [3] Scissors [9] Quit then select ENTER\n")
    computer = random.randint(1, 3)
    print("Please make a choice to coninue")

    user = input("[1] Rock [2] Paper [3] Scissors [9] Quit \n")
