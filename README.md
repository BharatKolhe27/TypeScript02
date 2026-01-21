# TypeScript02

This repository contains my **TypeScript practice code** where I revised and implemented important TypeScript concepts.  
Each section below represents **one TypeScript topic**, and I have written code examples for each (added as screenshots or files).

---

## 1.  Basic TypeScript Types

In this section, I revised **basic TypeScript data types** and variable declarations.

### Concepts Covered
- `string`
- `number`
- `boolean`
- Arrays with specific types (`number[]`)
- `any` type and why it should be avoided

### Key Learnings
- TypeScript enforces type safety at compile time
- Arrays can be restricted to a single data type
- `any` allows flexibility but removes type safety

<img width="658" height="513" alt="image" src="https://github.com/user-attachments/assets/1a971663-f3f8-42d4-a68d-cb4b21c900ea" />


---

## 2. Interfaces (Object Structure Blueprint)

This section focuses on **interfaces**, which define the structure of an object.

### Concepts Covered
- Creating interfaces
- Optional properties using `?`
- Method definitions inside interfaces
- Type checking for objects

### Key Learnings
- Interfaces are blueprints, not real objects
- Optional properties allow flexibility
- Interfaces improve readability and maintainability
- Interfaces do not exist at runtime (TypeScript only)

<img width="1084" height="791" alt="image" src="https://github.com/user-attachments/assets/ca96709b-70ef-4600-960c-ae7f7bb49637" />


---

## 3.  Readonly Properties in Interfaces

Here I learned how to **protect object properties** using `readonly`.

### Concepts Covered
- `readonly` keyword
- Immutable properties
- Difference between `readonly` and `const`

### Key Learnings
- `readonly` prevents modification after initialization
- Useful for IDs and sensitive fields
- Enforced at compile time

<img width="855" height="386" alt="image" src="https://github.com/user-attachments/assets/a6c0c659-d1c6-4c78-b21b-088e524ddd60" />


---

## 4 Union & Intersection Types

This section demonstrates **combining multiple types** using TypeScript.

### Concepts Covered
- Intersection types using `&`
- Combining multiple interfaces into one type
- Strict type enforcement

### Key Learnings
- Intersection types require all properties from combined interfaces
- Useful when an object belongs to multiple categories
- Helps in complex data modeling

<img width="963" height="765" alt="image" src="https://github.com/user-attachments/assets/a64bcfc8-aa10-481f-903d-c2ca042e2d00" />


---

## 5. Enums (Fixed Set of Values)

This section covers **Enums**, used for representing constant values.

### Concepts Covered
- String enums
- Using enums in function parameters
- Enum-based condition checks

### Key Learnings
- Enums prevent invalid values
- Improve code readability
- Provide autocomplete and consistency
- Enums exist at runtime (unlike interfaces)

<img width="997" height="811" alt="image" src="https://github.com/user-attachments/assets/b3edbefc-b4b0-4828-9235-a58ec3429a0d" />


---

## 6.  Generics (Reusable & Type-Safe Code)

This section focuses on **Generics**, one of the most powerful TypeScript features.

### Concepts Covered
- Generic classes (`<T>`)
- Type-safe data storage
- Reusable logic without using `any`

### Key Learnings
- Generics allow flexibility with safety
- One class can work with multiple data types
- Type is decided at the time of object creation
- Prevents runtime errors

<img width="566" height="574" alt="image" src="https://github.com/user-attachments/assets/c174a315-04c5-43a5-b994-557d8ee2f1db" />


---


