'''
# 정렬의 기준
1) 승률
2) 나보다 몸무게 무겁고 & 이긴 횟수
3) 몸무게 무거운 순
4) 번호가 빠른 순
'''

def solution(weights, head2head):
    rate = []

    for i in range(len(weights)):
        length = len(weights)
        cnt = 0
        overWeightWin = 0
        for j in range(length):
            if head2head[i][j] == 'L':
                continue
            elif  head2head[i][j] == 'N':
                length -= 1
            else:
                cnt += 1
                if weights[i] < weights[j]:
                    overWeightWin += 1

        if (length == 0) :
            rate.append([i + 1, 0, overWeightWin, weights[i]])
        else:
            rate.append([i + 1, cnt / length, overWeightWin, weights[i]])

    # 승률, 무거운 사람 이긴 수, 무게 -> 내림차순 정렬
    rate.sort(reverse=True, key = lambda x: (x[1], x[2], x[3]))
    
    return [rate[i][0] for i in range(len(weights))]

print(solution([145, 92, 86], ["NLW", "WNL", "LWN"]))
print(solution([60, 70, 60], ["NNN", "NNN", "NNN"]))