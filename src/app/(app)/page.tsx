import Image from 'next/image'
import matriz from '@/app/assets/matriz.jpeg'
import leo from '@/app/assets/leo2.png'

export default function Home() {
  return (
    <div className='relative flex bg-[#0F2755] max-w justify-center overflow-hidden'>
      <Image
        className='scale-[1.30] opacity-50 translate-y-[-18%]'
        src={matriz}
        alt='Foto da praça da Matriz com a igreja ao fundo'
      />
      <div className='absolute inset-0 bg-[#0F2755] opacity-20'></div>
      <div className='absolute inset-0 bg-gradient-to-r from-[#0F2755] from-20% via-transparent to-[#0F2755] to-80%'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='flex items-center bg-opacity-50 p-4 gap-4'>
          <Image src={leo} alt='Foto de Léo Maia' className='mt-12' />
          <div className='text-left text-white flex flex-col w-100 gap-2'>
            <p className='text-sm md:text-2xl'>Vereador</p>
            <p className='text-3xl md:text-7xl font-bold uppercase'>Léo Maia</p>
            <p className='text-5xl md:text-7xl font-bold text-[#FCE203]'>
              36.123
            </p>
            <p className='text-xs md:text-xl border-t-[1px] text-center'>
              O vereador de todos
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
