class Category:
    def __init__(self, name, items=[]):
        self.name = name
        self.items = items

    def __str__(self):
        output = f"{self.name} has:"
        for i in self.items:
            output += f"\n - {i}"
        return output


class Store:
    def __init__(self, name, categories=[]):
        self.name = name
        self.categories = categories

    def __str__(self):
        # return self.name
        # return f"You are here at the {self.name}"
        output = f"You are here at the {self.name}\n "
        i = 0
        for cate in self.categories:
            i += 1
            output += f"\n {i}. {cate.name}"
        return output


da_store = Store("Animals Emporium", [Category('toys', ['chew toy', 'bone', 'cat nip']),
                                      Category(
                                          'food', ['num nums', 'cat food']),
                                      Category('other', ['stuff', 'things'])])
print(da_store)
choice = int(input('pick a department by number (#): '))
print(choice)


while choice != "0":
    print(da_store)
    choice = int(input('pick a department by number (#): '))
    print(da_store.categories[choice-1])
print("thanks for looking around the dealy today...")
