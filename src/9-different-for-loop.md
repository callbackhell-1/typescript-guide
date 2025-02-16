# Difference Between `forEach`, `for` Loop & `for...of`

TypeScript provides multiple ways to iterate over collections. Each loop (`for`, `forEach`, `for...of`) has its own use case.

---

## 1. `for` Loop → When You Need an Index

✅ **Best for:** Iterating over arrays when you need **manual control** over the index.\
✅ **Use case:** If you need to **modify** the original array or break early.

```ts
const numbers: number[] = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Accessing via index
}
```

🔹 **Use when:**

- You need access to the index (`i`).
- You need to modify the array.
- You need to use `break` or `continue`.

---

## 2. `forEach` → When You Need Simplicity (Read-Only Loop)

✅ **Best for:** Iterating over arrays when you **don’t need** an index.\
✅ **Use case:** When you just want to read or process values, without modifying the array.

```ts
const numbers: number[] = [10, 20, 30];

numbers.forEach((num: number) => {
  console.log(num); // No need for index
});
```

🔹 **Use when:**

- You don’t need `break` or `continue` (it can't break early).
- You don’t need to modify the original array directly.
- You want a clean, functional style.

⛔ **Cannot be used with `await` (use `for...of` instead for async loops).**

---

## 3. `for...of` → When You Need Simplicity + Works with `break/continue`

✅ **Best for:** Iterating over **arrays, strings, maps, sets** in a clean way.\
✅ **Use case:** When you need values directly but also want to break early.

```ts
const numbers: number[] = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
  if (num === 20) break; // Works! Unlike forEach
}
```

🔹 **Use when:**

- You want a clean way to loop through **values** only.
- You need `break` or `continue` (which `forEach` lacks).
- You’re working with **iterables** (strings, arrays, maps, sets).
- You want to use `await` inside the loop (async operations).

---

## Summary Table

| Loop Type  | Best For                    | Can Modify? | Uses `break/continue`? | Works with `async/await`? |
| ---------- | --------------------------- | ----------- | ---------------------- | ------------------------- |
| `for`      | Full control (index-based)  | ✅ Yes      | ✅ Yes                 | ✅ Yes                    |
| `forEach`  | Simple read-only iteration  | ❌ No       | ❌ No                  | ❌ No                     |
| `for...of` | Clean iteration over values | ❌ No       | ✅ Yes                 | ✅ Yes                    |

---

## Async/Await Example with `for...of`

⛔ **Problem with `forEach` (Doesn't work well with `async/await`)**

```ts
const fetchData = async (id: number): Promise<string> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Data for ID ${id}`), 1000)
  );
};

const ids: number[] = [1, 2, 3];

// ❌ Doesn't work as expected (forEach does not handle async/await properly)
ids.forEach(async (id) => {
  const data = await fetchData(id);
  console.log(data); // Might log in unexpected order
});
```

✅ **Correct Approach using `for...of` (Handles `await` properly)**

```ts
const processIds = async (): Promise<void> => {
  for (const id of ids) {
    const data = await fetchData(id);
    console.log(data); // Executes in order
  }
};

processIds();
```

---

## Which One to Use?

- ✅ **Use** `for` **when you need index control or modifying array elements.**
- ✅ **Use** `forEach` **for simple read-only loops when you don’t need `break`.**
- ✅ **Use** `for...of` **for clean iteration with `break`, `continue`, or `await`.**
