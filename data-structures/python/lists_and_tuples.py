from collections import deque

nums = [1,2,3,4,5,6,7,1]

# print(fruits.index(1, 4))

nums.reverse()


nums.remove(5)

nums1 = deque([1,2,2,3,4])

nums1.appendleft(0)

nums1.append(5)

nums1

# print(nums1)

squares = []

# for x in range(10):
#     squares.append(x**2)
squares = [x**2 for x in range(10)]

combs = []
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.append((x, y))

# print(combs)

# print([(x,y) for x in [1,2,3] for y in [3,1,4] if x!=y] )

del combs[0:1]

combs[0] = 1

print(combs)
