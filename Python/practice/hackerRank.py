# Complete the twoStrings function below.
def twoStrings(s1, s2):
  s1_dict = {}
  # new_set = Set(s1)
  # for char in s2:
  #   if in new_set:
  #     return "Yes"
  # return "NO"
  # go through the first string
  answer = []
  s1_subs = allSubstring(s1)
  s2_subs = allSubstring(s2)
  for sub in s2_subs:
    if sub in s1_subs:
      answer.append(sub)
  
  
  return answer  
      
# return all possible substrings in a set
def allSubstring(s):
  set_str = set()
  counter = 0
  
  for i in range(len(s)):
    for j in range(i + 1, len(s) + 1, 1):
      set_str.add(s[i:j])
  
  # for i in range(counter, len(s), 1): 
  return set_str
  
  
print(twoStrings("string", "ring"))
  