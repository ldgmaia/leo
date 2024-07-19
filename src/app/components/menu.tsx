import facebookIcon from '@/app/assets/facebook-icon.svg'
import instagramIcon from '@/app/assets/instagram-icon.svg'
import twitterIcon from '@/app/assets/twitter-icon.svg'
import whatsappIcon from '@/app/assets/whatsapp-icon.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export async function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-10'>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink>Início</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink>Biografia</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <DropdownMenu>
            {/* <DropdownMenu.Arrow /> */}
            <DropdownMenuTrigger className='flex gap-2'>
              Atuação
              <ChevronDown size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href='/docs' legacyBehavior passHref>
                  Projetos de Lei
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href='/docs' legacyBehavior passHref>
                  Instituto Leo Maia
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href='/docs' legacyBehavior passHref>
                  Obras Literarias e Academia de Letras de SGP
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
