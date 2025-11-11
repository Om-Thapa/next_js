import React from 'react'
import Link from 'next/link'

const Users = () => {
  return (
    <>
      <ul className='mt-10'>
        <li><Link href="/dasboard/users/1">User 1</Link></li>
        <li><Link href="/dasboard/users/2">User 2</Link></li>
        <li><Link href="/dasboard/users/3">User 3</Link></li>
        <li><Link href="/dasboard/users/4">User 4</Link></li>
      </ul>
    </>
  )
}

export default Users