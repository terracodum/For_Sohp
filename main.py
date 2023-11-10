import random
class car:
    def __init__(self, model, year, classific, mileage):
        self.model = model
        self.year = year
        self.cla = classific
        self.mil = mileage

        # Creating a list of cars objects
    def intro(self):
        print("Welcome to the Cars Database!")
    def show_car(self):
        print( self.model , self.year, self.mil)
# Adding cars to the list
car1 = car("Audi", 2005, "Sedan", random.randrange(500000))
car2 = car("volvo", 2022, "jeep", random.randrange(7000))
car3 = car()





car1.intro()
car1.show_car()
car2.show_car()