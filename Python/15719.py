import sys
input = sys.stdin.readline

N = int(input().rstrip())
_list = list(map(int, input().split()))


for num in _list:
    if _list.count(num) > 1:
        res = num
print(res)