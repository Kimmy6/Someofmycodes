# j 세로 i 가로 k 당근
j, i, k = map(int, input().split())
carrot = [list(map(int, input().split())) for i in range(k)]
xtemp, ytemp = [], []

for x in range(0, len(carrot)):
    xtemp.append(carrot[x][0])
    ytemp.append(carrot[x][1])

xleng = max(xtemp) + 1 - (min(xtemp) - 1)
yleng = max(ytemp) + 1 - (min(ytemp) - 1)

res = (xleng + yleng) * 2

print(res)