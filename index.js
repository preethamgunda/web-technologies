fetch('https://www.scorebat.com/video-api/v3/')
    .then(response => response.text())
    .then(data => console.log(data));
    async function fetchText() {
      let response = await fetch('https://www.scorebat.com/video-api/v3/');
      console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}

fetchText();
async function getUsers() {
  let url = 'users.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

