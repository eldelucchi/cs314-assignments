'use strict';

//$('document').load(() => {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/',
        dataType: "json",
      })

      .done(function(response) {
        displayUsers(response);
      })

      .fail(function(status, errorThrown) {
        console.log("Error: ", errorThrown);
        console.log("status: ", status);
      })

      .always(function() {
        console.log("Request is complete!");
      })

    function displayUsers(data) {
      //console.log(data);
      for (let user of data) {
        //console.log(user);
        let userContainer = document.createElement('div');
        userContainer.id = user.id;
        userContainer.className = 'user-container';

        let userName = document.createElement('h4');
        userName.className = 'user-name';
        userName.innerHTML = user.name;
        //console.log(userName);
        let userEmail = document.createElement('h3');
        userEmail.className = 'user-email';
        userEmail.innerHTML = user.email;
        let userCompany = document.createElement('p');
        userCompany.className = 'user-company';
        userCompany.innerHTML = user.company.name; //THIS MAY NOT WORK, CHECK
        //console.log(userCompany);

        //To display album and todos
        let albumsButton = document.createElement('button');
        albumsButton.id = `albums-button-${user.id}`;
        albumsButton.innerHTML = 'Albums';
        //console.log(albumsButton.id);

        let todosButton = document.createElement('button');
        todosButton.id = `todos-button-${user.id}`;
        todosButton.innerHTML = 'Todos';

        $('.users').append(userContainer);
        $(`#${user.id}`).append(userName);
        console.log(user.id);
        $(`#${user.id}`).append(userEmail);
        $(`#${user.id}`).append(userCompany);
        $(`#${user.id}`).append(albumsButton);
        $(`#${user.id}`).append(todosButton);

        // event listener
        $(`#albums-button-${user.id}`).click((event) => {
          albumsButtonClick(event);
        });

        $(`#todos-button-${user.id}`).click((event) => {
          todosButtonClick(event);
        });

  }
};

function albumsButtonClick(event, userId) {
  //console.log(event);
  console.log(userId);
  if (events.target.dataset.loaded) // do nothing
    // grab albums' container and toggle it off
    $(`#outer-albums-container-${userId}`).toggle();
  else // all this:
    $.ajax({
      url: `https://jsonplaceholder.typecode.com/users/${user.id}/`,
      type: "GET",
      dataType: "json",
    })

    .done(function(response) { //if it came back without an error
      $(event.target).attr('data-loaded', 'true'); //so if you click it again, it won't load again, it knows it's already clicked
      albumsLoaded = true;
      displayAlbums(response)
      console.log(response);
    })

    .fail(function(status, errorThrown) { //if it came back with an error
      console.log("Error: ", errorThrown);
      console.log("status: ", status);
    })

    .always(function() { //Always do this
      console.log("Request is complete!");
    })
}


function displayAlbums(albums) {
  //create an outer  albumsContainer to get all of them
  let outerContainer = document.createElement('div');
  outerContainer.id = '#outer-albums-container-' + albums[0].userId;
  $(`#${$albums[0].userId}`).append(outerContainer);


  for (let album of albums) {
    //console.log(albums);
		let albumsContainer = document.createElement('div');
		albumsContainer.id = 'albums-container-' + albums.id;
		albumsContainer.className = 'albums-container';

		let albumsTitle = document.createElement('h4');
		albumsTitle.className = 'albums-title';
		albumsTitle.innerHTML = albums.title;

		$(`#${albums.postId}`).append(albumsContainer);
		$(`#albums-container-${albums.id}`).append(albumsTitle);

  }
}
