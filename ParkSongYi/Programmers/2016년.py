def solution(a, b):
    days = [31, 29, 31, 30, 31, 30 , 31, 31, 30, 31, 30, 31]
    day = ["THU","FRI","SAT","SUN","MON","TUE","WED"]
    return day[(sum(days[:a-1]) + b) % 7]