# A: 고정비용 B: 가변비용 C: 판매비용
# C > A + xB인 시점의 판매대수 출력
A, B, C = map(int, input().split())
if C == B:
    pri = -1
else:
    res = (A / (C - B)) + 1
    pri = res if res > 0 else -1 

print(int(pri))