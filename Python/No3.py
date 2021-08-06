# 입력 첫줄: 월드맵 크기 M X N 행렬
# 입력 둘째줄: 월드맵 (M길이를 N만큼 반복해서 받음)
# 입력 셋째줄: y(세로번째 줄 = 열 인덱스), x(가로번째 줄 = 행 인덱스)

N, M = map(int, input().split())
Worldmap = [list(map(int, input().split())) for i in range(N)]
y, x = map(int, input().split()) # y: 열 인덱스, x: 행 인덱스

[x, y] = [x-1, y-1] # 월드맵 행렬에 접근하기 위해 값 조정

for i in range(10):
    if Worldmap[x][y] == 1: # 월드맵에 쓰인 번호가 1: 현재 위치의 인덱스에서 y - 1
        y -= 1
    elif Worldmap[x][y] == 2: # 월드맵에 쓰인 번호가 2: 현재 위치의 인덱스에서 x - 1
        x -= 1
    elif Worldmap[x][y] == 3: # 월드맵에 쓰인 번호가 3: 현재 위치의 인덱스에서 x + 1
        x += 1
    elif Worldmap[x][y] == 4: # 월드맵에 쓰인 번호가 4: 현재 위치의 인덱스에서 y + 1
        y += 1
