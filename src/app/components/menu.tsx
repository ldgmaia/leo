import facebookIcon from '@/app/assets/facebook-icon.svg'
import instagramIcon from '@/app/assets/instagram-icon.svg'
import twitterIcon from '@/app/assets/twitter-icon.svg'
import whatsappIcon from '@/app/assets/whatsapp-icon.svg'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'

export async function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-10'>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink>Início</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink>Biografia</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink>Atuação</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink>Notícias</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink>Galeria</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink>Contato</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuTrigger>Início</NavigationMenuTrigger>
          <NavigationMenuTrigger>Biografia</NavigationMenuTrigger>
          <NavigationMenuTrigger>Atuação</NavigationMenuTrigger>
          <NavigationMenuTrigger>Notícias</NavigationMenuTrigger>
          <NavigationMenuTrigger>Galeria</NavigationMenuTrigger>
          <NavigationMenuTrigger>Contato</NavigationMenuTrigger> */}
        {/* <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent> */}
        {/* </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
