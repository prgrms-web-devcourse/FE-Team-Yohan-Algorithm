def solution(price, money, count):
    
    charge = [price * i for i in range(1, count+1)]
    
    if money >= sum(charge):
        return 0
    else:
        return abs(money - sum(charge))