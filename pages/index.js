import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Header from './components/header'

export default function Home() {
  return (
    <div class="container-fluid">
      <Head>Página Inicial</Head>
      <Header/>
    </div>
  )
}
