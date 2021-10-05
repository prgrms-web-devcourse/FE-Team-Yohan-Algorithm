def solution(sizes):
    maxItem = []
    minItem = []
    
    for size in sizes:
        maxItem.append(max(size))
        minItem.append(min(size))
    
    return max(maxItem) * max(minItem)