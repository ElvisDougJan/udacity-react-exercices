import React, { Component } from 'react'

const listProfiles = []
const listUsers = []
const listMovies = []

function createListUsers(users) {
	for (let i in users) {
		listUsers.push(users[i])
    }
}

function createListMovies(movies) {
	for (let i in movies) {
  		listMovies.push(movies[i])
	}
}

function createMovieProfileList(profiles, movies, users) {  
  createListUsers(users)
  createListMovies(movies)

  return listUsers.forEach(user => {
  listMovies.forEach(movie => {
    profiles.map(profile => {
      profile.userID === String(user.id) && profile.favoriteMovieID === String(movie.id)
        ? listProfiles.push({
          id: profile.id,
          user: user.name,
          movie: movie.name
        })
        : null
    })
  })
})
}

class ListFavoriteMovies extends Component {
	render() {
      createMovieProfileList(this.props.profiles, this.props.movies, this.props.users)
      return(
        <ol>
        {
          listProfiles.map(profile => 
        	<li key={profile.id}><b>The user</b> <i>{profile.user}</i> <b>like</b> <i>{profile.movie}</i> <b>movie!</b></li>
        )}
        </ol>
      )
    }
}

export default ListFavoriteMovies