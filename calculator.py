num1=int(input("enter first num:"))
num2=int(input("enter second num:"))
operator=input("enter ur operator:")
if operator == "+":
  print(f"addition of two numbers:{num1+num2}")
elif operator== "-":
  print(f"subtraction of two numbers:{num1-num2}") 
elif operator == "/":
  print (f"division of two numbers:{num1/num2}")
elif operator == "*":
  print(f"mutiplication of two numbers:{num1*num2}")  
else :
  print("ur code is invalid")
