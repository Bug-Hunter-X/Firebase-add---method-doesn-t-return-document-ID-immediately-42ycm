# Firebase add() Method Asynchronous Behavior

This repository demonstrates a common error when using Firebase's `add()` method to add documents to Firestore.  The `add()` method is asynchronous and doesn't return the document ID directly.  The solution shows how to properly handle the promise it returns to access the generated ID.

## Bug

The original code attempts to access the `docRef.id` immediately after calling `add()`, leading to `docRef` being undefined.  The correct approach involves using `.then()` to handle the promise once the document has been successfully added.

## Solution

The solution utilizes the `.then()` method of the Promise returned by `add()` to access the document reference and its ID once the operation completes successfully.