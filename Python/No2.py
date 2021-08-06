# N: 광산 길이
N = int(input())
gold_mine = list(map(int, input().split()))
richman = 0

# 계산을 위한 임시리스트와 변수
tmp_list = []
tmp_rich = 0

# 3개씩 무한탐색
for i in range(N - 2):
    for x in range(i, i + 3):
        tmp_rich += gold_mine[x]
    
    tmp_list.append(tmp_rich)
    tmp_rich = 0

# 왼손, 오른손이 겹치면 안 됨
# 한 손이 n번을 집으면 다른 손은 오른쪽으로 2칸 왼쪽으로 2칸은 집으면 안 됨

richman = max(tmp_list) # 한 손으로 먼저 집기

# 집으면 안 되는 부분 제거하기
_idx = [i for i in range(len(tmp_list)) if tmp_list[i] == max(tmp_list)]
idx = _idx[0]
if idx - 2 > 0 and idx + 2 < len(tmp_list):
    del tmp_list[idx - 2:idx + 3]
else:
    if idx - 2 < 0 or idx - 1 < 0:
        del tmp_list[0:idx + 3]
    
    if idx + 3 > len(tmp_list) or idx + 2 > len(tmp_list) or idx + 1 > len(tmp_list):
        del tmp_list[idx-2:len(tmp_list)]

# 남는 금 중 최대값을 더하기
richman += max(tmp_list)
print(richman)
