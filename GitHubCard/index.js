import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


axios
  .get('https://api.github.com/users/nwestallen')
  .then((res) => {
    console.log(makeCard(res.data));
    console.log(res.data);
  })
  .catch((err) => console.log('failure'));


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeCard({avatar_url, name, login, location, followers, following, bio, html_url}) {
  //create html elements
  let card = document.createElement('div');
  let img = document.createElement('img');
  let cardInfo = document.createElement('div');
  let nameTag = document.createElement('h3');
  let username = document.createElement('p')
  let locationTag = document.createElement('p')
  let profile = document.createElement('p');
  let profileText = document.createTextNode('Profile: ');
  let profileLink = document.createElement('a');
  let followersTag = document.createElement('p');
  let followingTag = document.createElement('p');
  let bioTag = document.createElement('p');
  //build structure
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameTag);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locationTag);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followersTag);
  cardInfo.appendChild(followingTag);
  cardInfo.appendChild(bioTag);
  profile.appendChild(profileText);
  profile.appendChild(profileLink);
  //add classes to tags
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameTag.classList.add('name');
  username.classList.add('username');
  profileLink.href = html_url;
  //add content to tags
  img.src = avatar_url;
  nameTag.textContent = name;
  username.textContent = login;
  //profile.textContent = 'Profile: \n'
  locationTag.textContent = `Location: ${location}`;
  followersTag.textContent = `Followers: ${followers}`;
  followingTag.textContent = `Following: ${following}`;
  bioTag.textContent = `Bio: ${bio}`;
  profileLink.textContent = html_url;
  //return card
return card;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
