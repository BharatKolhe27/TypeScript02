📘 TypeScript Concepts Revision – Practice Notes

This repository contains my TypeScript practice code where I revised and implemented important TypeScript concepts.
Each section below represents one TypeScript topic, and I have written code examples for each (added as screenshots / files).

1️⃣ Basic TypeScript Types

In this section, I revised basic TypeScript data types and variable declarations.

Concepts covered:

string

number

boolean

Arrays with specific types (number[])

any type and why it should be avoided

Key Learnings:

TypeScript enforces type safety at compile time

Arrays can be restricted to a single data type

any allows flexibility but removes type safety

📌 (Code screenshot added here)

2️⃣ Interfaces (Object Structure Blueprint)

This section focuses on interfaces, which define the structure of an object.

Concepts covered:

Creating interfaces

Optional properties using ?

Method definitions inside interfaces

Type checking for objects

Key Learnings:

Interfaces are blueprints, not real objects

Optional properties allow flexibility

Interfaces improve readability and maintainability

Interfaces do not exist at runtime (TypeScript only)

📌 (Code screenshot added here)

3️⃣ Readonly Properties in Interfaces

Here I learned how to protect object properties using readonly.

Concepts covered:

readonly keyword

Immutable properties

Difference between readonly and const

Key Learnings:

readonly prevents modification after initialization

Useful for IDs and sensitive fields

Enforced at compile time

📌 (Code screenshot added here)

4️⃣ Union & Intersection Types

This section demonstrates combining multiple types using TypeScript.

Concepts covered:

Intersection types using &

Combining multiple interfaces into one type

Strict type enforcement

Key Learnings:

Intersection types require all properties from combined interfaces

Useful when an object belongs to multiple categories

Helps in complex data modeling

📌 (Code screenshot added here)

5️⃣ Enums (Fixed Set of Values)

This section covers Enums, used for representing constant values.

Concepts covered:

String enums

Using enums in function parameters

Enum-based condition checks

Key Learnings:

Enums prevent invalid values

Improve code readability

Provide autocomplete and consistency

Enums exist at runtime (unlike interfaces)

📌 (Code screenshot added here)

6️⃣ Generics (Reusable & Type-Safe Code)

This section focuses on Generics, one of the most powerful TypeScript features.

Concepts covered:

Generic classes (<T>)

Type-safe data storage

Reusable logic without using any

Key Learnings:

Generics allow flexibility with safety

One class can work with multiple data types

Type is decided at the time of object creation

Prevents runtime errors

📌 (Code screenshot added here)



