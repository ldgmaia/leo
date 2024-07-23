import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { ChevronDown, MenuIcon } from 'lucide-react'
import Link from 'next/link'

export function Mobile() {
  return (
    <Drawer direction='left'>
      <DrawerTrigger className='w-screen  pl-4'>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className='w-screen max-w-80 h-full pl-4'>
        <NavigationMenu orientation='vertical'>
          <NavigationMenuList className='flex flex-col items-start gap-10'>
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

            {/* <Accordion type='single' collapsible className='w-full'>
              <AccordionItem className='border-b-0' value='item-1'>
                <AccordionTrigger>Atuação</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>
                      <Link href='/docs' legacyBehavior passHref>
                        Projetos de Lei
                      </Link>
                    </li>
                    <li>
                      <Link href='/docs' legacyBehavior passHref>
                        Projetos de Lei
                      </Link>
                    </li>
                    <li>
                      <Link href='/docs' legacyBehavior passHref>
                        Projetos de Lei
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}

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
      </DrawerContent>
    </Drawer>
  )
}
