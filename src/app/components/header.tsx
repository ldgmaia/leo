import facebookIcon from '@/app/assets/facebook-icon.svg'
import instagramIcon from '@/app/assets/instagram-icon.svg'
import twitterIcon from '@/app/assets/twitter-icon.svg'
import whatsappIcon from '@/app/assets/whatsapp-icon.svg'
import Image from 'next/image'
import { Menu } from './menu'

export async function Header() {
  return (
    <>
      <div className='mx-auto flex max-w items-center justify-center border-b pb-2 gap-2 py-3 bg-[#0F2755]'>
        <Image src={facebookIcon} className='size-9' alt='Rocketseat' />
        <Image src={instagramIcon} className='size-9' alt='Rocketseat' />
        <Image src={twitterIcon} className='size-9' alt='Rocketseat' />
        <Image src={whatsappIcon} className='size-9' alt='Rocketseat' />
      </div>
      <div className='mx-auto flex max-w items-center justify-center border-b pb-2 gap-2 py-3'>
        <Menu />
      </div>
    </>
  )
}
