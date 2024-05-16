import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
 <main>
  <h1>Hello ! Welcome to System</h1>
  <Link href='/users'><h1>books</h1></Link>
  <ProductCard/>
 </main>
  )
}
