const db = getFirestore();

// ... other code ...

db.collection('myCollection').add({myField: 'myValue'}).then(() => {
  console.log('Document written with ID: ', docRef.id);
}).catch((error) => {
  console.error('Error adding document: ', error);
});