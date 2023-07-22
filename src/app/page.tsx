'use client'
import { signIn, signOut, useSession } from 'next-auth/react'


export default function Home() {
  const { data } = useSession()

  return (
    <div>
      <div  className='flex flex-col'>
      <button type="button" onClick={() => signIn("google")}>Login</button>
      <button type="button" onClick={() => signOut()}>Sair</button>
      </div>
      <h1>Olá, {data?.user?.name}</h1>
      <img className='rounded-full' height={100} width={100} src={data?.user?.image ?? ""} alt='imagem do usuário' />
    </div>
  )
}
