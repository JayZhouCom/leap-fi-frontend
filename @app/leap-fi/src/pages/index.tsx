import { Inter } from 'next/font/google'
import { test } from '@leap-fi/sdk-handler'
import ConnectButton from '@app/components/ConnectButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('-----------------------------DEBUG--------------------------')
  console.log(test.test)

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <ConnectButton />
      </div>
    </main>
  )
}
