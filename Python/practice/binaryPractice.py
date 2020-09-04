x = 0b10100010
# taking x(variable) and then shifting over to get the first 2 digits
y = x >> 6
# then we shifted x over and saved the new setup as y(variable)
# notice how the end where we compare as AND is with the ampersand(&)
z = y & 0b00000011

'''
when we compare using the & it looks for truth like the javascript 0(false) or 1(true)
so when having the 11 in the place at the end to compare looks to give proper
rep of what was there in the original ob(number)

COOL SHIT HUH?
'''
# then we compared with the above to get a proper truethy return of the binary
# number that is represented by the first 2 digits in the original number

print(z)
