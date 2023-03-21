import '../styles/style.scss';
import { useEffect } from 'react';

export function Cv() {
  // const getData = () => {
  //   fetch('./experiences.json')
  //     .then((response) => response.json())
  //     .then(function (myJson) {
  //       console.log('myJson', myJson);
  //     });

  const getData = () => {
    fetch('./experiences.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log('res', res);
        res.json();
      })
      .then(
        (result) => {
          console.log('result', result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log('error', error);
        },
      );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>CV</h1>
    </>
  );
}
