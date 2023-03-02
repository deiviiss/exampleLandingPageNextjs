import Head from 'next/head'
import Image from 'next/image'
import Carousel from 'src/components/Carousel'
import { ChevronRight } from 'react-feather'
import Link from 'next/link'

const demoVideo = 'carousel/dubai-31956.mp4'

const slides = [
  {
    id: 1,
    url: '/carousel/1.png'
  },
  {
    id: 2,
    url: '/carousel/2.png'
  },
  {
    id: 3,
    url: '/carousel/3.png'
  },
  {
    id: 4,
    url: '/carousel/4.png'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Gestoría Peninsular</title>
        <meta name='description' content='Gestoría Peninsular es una empresa especializada en brindar servicios de asesoramiento y trámites de pensión y retiro por desempleo. ¡Haz una cita con nosotros y simplifica tus trámites!' />
        <meta name='keywords' content='gestoría, pensión, retiro por desempleo, trámites, asesoramiento' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>

        <div className='max-w-screen flex items-center justify-center flex-col border-b-2 border-slate-200'>

          <Carousel autoSlide={false} autoSlideinterval={3000}>
            {[
              ...slides.map((slide) => (
                <Image className='min-h-[500px] max-h-[597px] min-w-full object-cover' width={1440} height={800} key={slide.id} src={slide.url} alt='image-carousel' />
              ))
              // <video className='min-h-[500px] max-h-[597px] min-w-full object-cover' key={5} src={demoVideo} autoPlay muted loop />
            ]}
          </Carousel>

          {/* CONTAINER */}
          <div className='w-full z-10 bg-white text-center border border-opacity-20 shadow-2xl sm:max-w-[960px] sm:-mt-16'>

            {/* Home Why */}
            <div className='pt-12 pb-11 sm:flex sm:pt-28'>
              <div className='pt-9 sm:ml-72' />
              <div className='sm:ml-10 text-left sm:pr-44'>
                <h1 className='text-5xl mb-8 pr-10 font-bold uppercase text-black'>¿Por qué Profuturo?</h1>

                <p className='px-1'>En Profuturo nuestro compromiso es cuidar lo que es tuyo, el patrimonio que durante años de trabajo construiste y que confiaste en nuestras manos para que tengas el futuro que deseas.</p>

                <div className='flex uppercase text-xs text-primary font-bold w-2/3 pl-24 sm:pl-1 pt-3 items-center hover:underline hover:underline-offset-2'>
                  <Link href='/'>Saber más</Link>
                  <ChevronRight className='ml-4' />
                </div>
              </div>
            </div>

            {/* Home questions */}
            <div className='grid sm:grid-cols-2 justify-center items-center'>
              {/* col 1 */}
              <div className='relative'>
                <Image className='min-h-[410px] max-h-[410px] min-w-screen object-cover' width={478} height={410} src='/why1.png' alt='image-why1' />
                <div className='absolute bottom-6 right-0 left-0 text-left pl-4 text-white uppercase'>
                  <h1 className='mt-4 mb-4 text-sm'>¿Sabes en qué afore estás?</h1>
                  <h2 className='mt-4 mb-4 text-xl font-semibold'>Nosotros te ayudamos a saberlo</h2>
                  <div className='flex text-xs w-2/3 items-center hover:underline hover:underline-offset-2'>
                    <Link className='text-sm' href='/'>Saber más</Link>
                    <ChevronRight className='ml-4' />
                  </div>
                </div>
              </div>

              {/* col 2 */}
              <div className='relative'>
                <Image className='min-h-[410px] max-h-[410px] min-w-screen object-cover' width={478} height={410} src='/why2.png' alt='image-why1' />
                <div className='absolute bottom-6 right-0 left-0 text-left pl-4 text-white uppercase'>
                  <h1 className='mt-4 mb-4 text-sm'>Proyectemos tu futuro</h1>
                  <h2 className='mt-4 mb-4 text-xl font-semibold'>En tan solo 5 minutos, comencemos ahora</h2>
                  <div className='flex text-xs w-2/3 items-center hover:underline hover:underline-offset-2'>
                    <Link className='text-sm' href='/'>Saber más</Link>
                    <ChevronRight className='ml-4' />
                  </div>
                </div>
              </div>
            </div>

            {/* Home blog */}
            <div className='grid sm:grid-cols-2 py-9'>
              <div className='flex items-center justify-center'>
                <Image className='min-h-[125px] max-h-[125px] min-w-[125px] max-w-[125px] sm:min-h-[250px] sm:max-h-[250px] sm:min-w-[250px] sm:max-w-[250px] object-cover rounded-full' width={250} height={250} src='/blog1.png' alt='image-blog1' />
              </div>
              <div className='text-start text-black mb-4 sm:py-24'>
                <h3 className='mt-4 font-medium uppercase text-sm sm:'>Blog</h3>
                <h2 className='text-2xl uppercase font-bold mb-4'>Confía en Profuturo: Por qué debemos ser tu Afore</h2>
                <p>
                  Tenemos casi 20 años ayudándote a planear y cumplir tus metas para el retiro. Descubre por qué debemos ser tu Afore.
                </p>
                <div className='flex text-xs text-primary items-center hover:underline hover:underline-offset-2'>
                  <Link className='uppercase text-sm font-semibold' href='/'>Ir al blog</Link>
                  <ChevronRight className='ml-4' />
                </div>
              </div>
            </div>

            {/* Home app */}
            <div className='relative min-h-[1024px] max-h-[1024px] bg-fondoapp bg-no-repeat bg-cover'>
              <div className='absolute top-8 left-2'>
                <Image className='ml-14 min-w-[184px] min-h-[126px] object-cover' width={184} height={126} src='/app2.png' alt='image-app2' />
                <div className='pl-4 text-white text-center max-w-[290px]'>
                  <p className='mt-6 mb-4 text-base'>Administra tu Afore, ahorra, consulta, revisar tu estado de cuenta y más ¡ahora es así de fácil!</p>

                  <div className='flex justify-end items-center uppercase hover:underline hover:underline-offset-2'>
                    <Link className='text-xs font-semibold text-tertiary' href='/'>Conoce más</Link>
                    <ChevronRight className='ml-4 text-tertiary' />
                  </div>
                </div>
              </div>

              <div className='absolute bottom-16 right-6'>
                <Image className='min-h-[615px] max-h-[615px] min-w-[384px] max-w-[384px] object-cover ' width={384} height={615} src='/app1.png' alt='image-app1' />
              </div>

              <div className='absolute bottom-0 right-0 left-0'>
                <p className='mt-5 mb-5'>
                  ¡No esperes más y descargala!
                </p>
              </div>

            </div>

            {/* Home services */}
            <div className='mt-12 text-black'>
              <h3 className='text-lg uppercase mb-1'>trámites o servicios</h3>
              <h2 className='text-3xl font-semibold uppercase mb-8'>Te ayudamos a agilizarlos</h2>

              <div className='grid text-left sm:grid-cols-3 sm:px-2 sm:pb-12'>
                <div className='px-8 pt-3 pb-3 mb-8'>
                  <Image className='min-h-[31px] max-h-[31px] min-w-[31px] max-w-[31px] ml-6' width={31} height={31} src='/icons/descargas-icon.png' alt='image-descargas-icon' />
                  <h1 className='uppercase font-medium pt-2 pb-6'>Descargas</h1>
                  <p>Conoce más sobre lo que hacemos, mantente informado para que puedas tomar las mejores decisiones para tu futuro.</p>
                  <div className='flex text-xs text-slate-700 items-center hover:underline hover:underline-offset-2'>
                    <Link className='uppercase text-sm font-semibold' href='/'>Ir a descargas</Link>
                    <ChevronRight className='ml-4' />
                  </div>
                </div>

                <div className='px-8 pt-3 pb-3 mb-8'>
                  <Image className='min-h-[31px] max-h-[31px] min-w-[31px] max-w-[31px] ml-6' width={31} height={31} src='/icons/preguntas-icon.png' alt='image-preguntas-icon' />
                  <h1 className='uppercase font-medium pt-2 pb-6'>Preguntas frecuentes</h1>
                  <p>Encuentra aquí la respuesta a todas tus dudas.</p>
                  <div className='flex text-xs text-slate-700 items-center hover:underline hover:underline-offset-2'>
                    <Link className='uppercase text-sm font-semibold' href='/'>Ir a preguntas</Link>
                    <ChevronRight className='ml-4' />
                  </div>
                </div>

                <div className='px-8 pt-3 pb-3 mb-8'>
                  <Image className='min-h-[31px] max-h-[31px] min-w-[31px] max-w-[31px]  ml-6' width={31} height={31} src='/icons/folder-icon.png' alt='image-folder-icon' />
                  <h1 className='uppercase font-medium pt-2 pb-6'>Trámites generales</h1>
                  <p>Te ofrecemos las opciones ideales para que construyas un mejor futuro.</p>
                  <div className='flex text-xs text-slate-700 items-center hover:underline hover:underline-offset-2'>
                    <Link className='uppercase text-sm font-semibold' href='/'>Ir a trámites</Link>
                    <ChevronRight className='ml-4' />
                  </div>
                </div>
              </div>

            </div>
            <div className='grid grid-cols-2 text-center justify-center justify-items-center items-center pb-14 sm:pb-32'>
              <div className='bg-facebook w-full flex justify-center p-4'>
                <Image src='./icons/icons8-facebook.svg' width={31} height={31} alt='facebook' />
              </div>
              <div className='bg-twitter w-full flex justify-center p-4'>
                <Image src='./icons/icons8-twitter.svg' width={31} height={31} alt='twitter' />
              </div>
            </div>

          </div>

        </div>
      </main>

    </>
  )
}
