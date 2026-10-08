# COMP 3123 - Lab Test 1

**Student ID:** 101563789

JavaScript (ES6) and Node.js lab test.

## Structure

```
101563789_comp3123_labtest1/
├── question-1/
│   └── lowerCaseWords.js
├── question-2/
│   ├── callbacks.js
│   └── promises.js
└── question-3/
    ├── add.js
    └── remove.js
```

## How to run

No packages need to be installed, only Node.js.

### Question 1 - ES6 Features

```
node question-1/lowerCaseWords.js
```

Filters the non-strings out of a mixed array and lower cases the rest using a promise.

### Question 2 - Promises

```
node question-2/promises.js
```

`resolvedPromise` resolves a message after 500ms and `rejectedPromise` rejects an error message after 500ms.

### Question 3 - File Module

```
node question-3/add.js
node question-3/remove.js
```

`add.js` creates a `Logs` directory with 10 log files. `remove.js` deletes the files and then removes the directory.
