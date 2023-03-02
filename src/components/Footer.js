import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='w-full h-auto sm:max-w-[960px] sm:mx-auto bg-white p-6 space-y-2 pt-20 pb-20 text-xs' id='footer'>
      <div className='sm:flex sm:justify-between sm:pb-1 '>
        <div className='grid gap-y-2 text-base font-medium'>
          <p>AFORE PROFUTURO</p>
          <p>¿POR QUÉ PROFUTURO?</p>
          <p>CALCULA</p>
          <p>PRODUCTOS</p>
          <p>BLOG</p>
          <Image src='/icons/buro.png' width={31} height={31} alt='buro' className='py-3' />
          <Image src='/icons/cartera.jpg' width={31} height={31} alt='cartera' className='py-3' />
        </div>
        <div className='grid gap-y-2'>
          <p>Grupo Bal</p>
          <p>Grupo Profuturo</p>
          <p>Responsailidad Social</p>
          <p>Documentos de análisis</p>
          <p>Conoce tu Estado de Cuenta</p>
          <p>Educación financiera</p>
          <p>Aviso Privacidad</p>
          <p>Aviso COVID 19</p>
          <p>Bolsa de trabajo</p>
        </div>
        <div>
          <h1 className='font-bold my-3'>SUCURSALES</h1>
          <div className='grid gap-y-2'>
            <p>Encuentra tu sucursal</p>
            <p>Carta de derechos del Usuario</p>
            <p>Agenda tu cita</p>
            <p>Mapa de Sitio</p>
            <p>Acceso a Proveedores</p>
            <p>Preguntas frecuentes</p>
          </div>
        </div>
        <div className='grid gap-y-1'>
          <p>Contacto</p>
          <p>ContactoNew</p>
          <p>Ética y compromiso</p>
          <p>Asesoría</p>
          <p>Cuidamos tu Futuro</p>
        </div>
      </div>
      {/* <div className='dark:text-gray-900'>
        <span className='text-gray-900 font-bold text-base mr-2'>Gestoría Peninsular</span>&copy; {new Date().getFullYear()}
      </div> */}
    </footer>
  )
}
