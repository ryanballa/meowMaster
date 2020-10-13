import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firestore';

const Cleanings = () => {
  const [cleanings, setCleanings] = useState(null);

  useEffect(() => {
    if (!cleanings) {
      const db = firebase.firestore();
      const cleaningsHolder = [];
      db.collection('cleanings')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            cleaningsHolder.push(doc.data());
          });
          console.log(cleaningsHolder);
          setCleanings(cleaningsHolder);
        });
    }
  });

  return (
    <section>
      <h1>Cleanings</h1>
      <Link to="/add-cleaning">Add Cleaning</Link>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {cleanings &&
            cleanings.map((cleaning, i) => (
              <tr key={`cleaning-${i}`}>
                <td>{cleaning.completionDate.seconds}</td>
                <td>{cleaning.user}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Cleanings;
