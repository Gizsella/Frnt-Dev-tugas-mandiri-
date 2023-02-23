import Image from 'next/image'
import '../app/globals.css'
import Link from 'next/link';
import styles from '../style/home.module.css'
import photo1 from '../asset/photo 1.jpg'
import photo2 from '../asset/photo 2.jpg'
import photo3 from '../asset/photo 3.jpg'

const data = [
  { src: photo1, alt: 'photo 1',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo2, alt: 'photo 2',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo3, alt: 'photo 3',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo1, alt: 'photo 1',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo2, alt: 'photo 2',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo3, alt: 'photo 3',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo1, alt: 'photo 1',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo2, alt: 'photo 2',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
  { src: photo3, alt: 'photo 3',city: "malang" , rating: "4,5",tittle: "Lorem ipsum dolor" ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" },
]

export default function favorite() {
  return (
    <div className={styles.back}>
      <div className={styles.nav}>
        <div className={styles.navbarleft}>
        <a href="#">Hunger Apps</a>
        </div>

        <div className={styles.navbarright}>
          <ul>
            <li><Link href="/#">Home</Link></li>
            <li><Link href="/favorite">Favorite</Link></li>
            <li><a href="https://www.instagram.com/gisl.rp/">About Me</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.hero}>
        <div class={styles.herocontent}>
          <h1>Find your favorite restourant here</h1>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.look}>
          <h1>Favorite Restaurant</h1>
        </div>

        <div className={styles.cardcontainer}>
        {data.map((resto) => (
          <div className={styles.card}>
            <Image
              src={resto.src}
              alt={resto.alt}
            />
            <h3>Rating: {resto.rating}</h3>
            <h2>{resto.tittle}</h2>
            <p>{resto.description}</p>
          </div>
        ))}
        </div>
        
        <div className={styles.footer}>
          <p>copyright &copy; 2020 - Hunger Apps</p>
         </div>
      </div>
      
      
    </div>
  )
}
