import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Home page</a>
        </Link>

        <Link href="./segundo">
          <a>Próximo</a>
        </Link>
      </h2>
    </>
  )
}