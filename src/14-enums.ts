// Enums in TypeScript
/**
 An enum (short for enumeration) is a way to define a set of named constants in TypeScript. Enums make it easier to work with a group of related values by giving them meaningful names instead of using plain numbers or strings.

 */

/**
 enum EnumName {
  Key1 = Value1,
  Key2 = Value2,
  // ...
}
 */

// Enum Direction
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

//Key Features of Enums
/*
1. Numeric Enums (default) : 
If you don't assign values, TypeScript automatically assigns numeric values starting from 0 (or from the first explicitly assigned value).
*/

enum Status {
  Pending, // 0
  Approved, // 1
  Rejected, // 2
}
/**
 2. String Enums
You can assign string values to enum members.
*/

enum LogLevel {
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
}
/*
3. Heterogeneous Enums (mixed string and numeric values)
TypeScript allows mixing string and numeric values in enums, though this is not recommended.
*/

enum Mixed {
  Yes = 1,
  No = 'NO',
}

/**
4. Reverse Mapping
Numeric enums support reverse mapping, meaning you can access the enum key by its value.
 */

enum Color {
  Red = 1,
  Green,
  Blue,
}

console.log(Color[2]); // Output: "Green"

/**
 5. Const Enums
Using const enum optimizes performance by inlining the enum values at compile time.
 */

const enum Size {
  Small,
  Medium,
  Large,
}

let mySize = Size.Medium; // Inlined as `let mySize = 1;`

//  Usage
enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER',
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log('Full access granted!');
  } else {
    console.log('Limited access.');
  }
}

checkAccess(UserRole.Admin); // Output: "Full access granted!"

//example
enum Status {
  shipped = 'Shipped',
  delivered = 'Delivered',
}

const checkStatus = (status: Status) => {
  if (status == Status.shipped) {
    return `About to ${status}`;
  } else {
    return `Please wait`;
  }
};

console.log(checkStatus(Status.shipped));

//example 3
enum UserStatus {
  offline = 'OFFLINE',
  online = 'ONLINE',
}

const userStatusCheck = (userStatus: UserStatus) => {
  if (userStatus == UserStatus.offline) {
    console.log(`user status is ${userStatus}`);
  } else {
    console.log(`user status is :::::: ${userStatus}`);
  }
};

console.log(userStatusCheck(UserStatus.online))