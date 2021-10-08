def solution(priorities, location):
    from collections import deque
    
    answer = 0
    newPrior = deque([ (v, i) for i, v in enumerate(priorities)])
    
    while len(newPrior):
        doc = newPrior.popleft()
        if newPrior and doc[0] < max(newPrior)[0]:
            newPrior.append(doc)
        elif newPrior and doc[0] < max(newPrior)[0]:
            answer += 1
            if doc[1] == location:
                break
    return answer