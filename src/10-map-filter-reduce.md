# Difference Between `map()`, `filter()`, and `reduce()` in TypeScript

JavaScript (and TypeScript) provides powerful array methods like `map()`, `filter()`, and `reduce()`, each serving a unique purpose.

---

## 1. `map()` → Transforming Data

✅ **Best for:** Creating a new array by applying a function to each element.

✅ **Use case:** When you want to modify each item without changing the original array.

```ts
const numbers: number[] = [1, 2, 3, 4];
const doubled: number[] = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

🔹 **Use when:**

- You need to modify every element in the array.
- You want the same number of elements in the new array.

---

## 2. `filter()` → Selecting Items

✅ **Best for:** Creating a new array with only elements that meet a condition.

✅ **Use case:** When you want to keep only certain items from an array.

```ts
const numbers: number[] = [1, 2, 3, 4];
const evens: number[] = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

🔹 **Use when:**

- You need to remove some elements based on a condition.
- The output array has fewer elements than the original.

---

## 3. `reduce()` → Aggregating Data

✅ **Best for:** Calculating a single value from an array (sum, average, etc.).

✅ **Use case:** When you need to **accumulate** values.

```ts
const numbers: number[] = [1, 2, 3, 4];
const sum: number = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

🔹 **Use when:**

- You need to compute a single result (e.g., total, max, min, count).
- You need to transform an array into an object or another format.

---

## Summary Table

| Method     | Purpose                             | Output Size   | Can Modify Elements? |
| ---------- | ----------------------------------- | ------------- | -------------------- |
| `map()`    | Transform each element              | Same as input | ✅ Yes               |
| `filter()` | Keep only elements that pass a test | ≤ Input size  | ❌ No                |
| `reduce()` | Aggregate into a single value       | 1 value       | ✅ Yes               |

---

## Which One to Use?

- ✅ **Use `map()`** when you need to transform data but keep the array structure.
- ✅ **Use `filter()`** when you need to remove unwanted elements.
- ✅ **Use `reduce()`** when you need to aggregate values into a single result.

