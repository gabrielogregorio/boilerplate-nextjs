import { Post } from '../../components/Post'
import styles from './styles.module.css'

export default function Home () {
  return  (
    <div className={styles.home}>
      <h1>oi</h1>

      <Post />
    </div>
  )
}