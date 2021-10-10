import {types} from 'mobx-state-tree'
import axios from 'axios'
const jokeUrl = 'https://api.chucknorris.io/jokes/random'

const getJokes = async () => {
  const response = await fetch(jokeUrl)
  return response.json()
}


export const JokeModel = types.model("Jokes",{
  imgURL: types.optional(types.string, "HERE"),
  title: types.optional(types.string, "FUNNY")
})

export const JokeStore = types.model("JOKEStore",{
  jokes: types.array(JokeModel)
}).actions(self => ({
  setJokes(newJokes){
    self.jokes = newJokes
  },
 async fetchJokes(){
    const data = await getJokes()
  }

}))

// instanciate the store.
let jokeStore;
export const useJokes = () => {
  if(!jokeStore){
    jokeStore = JokeStore.create({
      jokes: []
    })
  }
  return jokeStore
}

