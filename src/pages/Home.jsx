
import cashtronix from '../assets/cashtronix.png'
import catchTheBeat from '../assets/catch-the-beat.png'
import movieRecommender from '../assets/movie-recommender.png'

export default function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio website!</p>
      <p>Here are my three midterm projects from this semester.</p>

      <h2>Cashtronix</h2>
      <img src={cashtronix} alt="Cashtronix Project" width="400" />
      <p>
        Cashtronix is a payback website where customers can
        sell their used electronic devices, like phones,
        laptops, tablets, and gaming consoles.
      </p>

      <h2>Catch the Beat</h2>
      <img src={catchTheBeat} alt="Catch the Beat Project" width="400" />
      <p>
        Catch the Beat is an interactive game where players
        control a paddle using their hand movements and their voice to catch
        falling balls and earn points.
      </p>

      <h2>Movie Recommender</h2>
      <img src={movieRecommender} alt="Movie Recommender Project" width="400" />
      <p>
        This Python project recommends movies based on similarities
        in genre, release year, and community ratings.
      </p>
    </div>
  )
}
