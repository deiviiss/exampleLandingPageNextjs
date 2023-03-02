import Link from 'next/link'

export default function Navbar() {
  const navigations = [
    { label: 'Grupo Gestoría Peninsular', href: '/', register: false },
    { label: 'Contacto', href: '/', register: false },
    { label: 'Aviso Privacidad', href: '/', register: false },
    { label: 'Asesoria', href: '/', register: false },
    { label: 'Agenda tu cita', href: '/', register: false },
    { label: 'Iniciar sesión', href: '/', register: true },
    { label: 'Registro al portal', href: '/', register: true }
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav className='hidden md:flex mx-auto shadow w-full z-10 bg-primary text-xs justify-center'>

      <div className='flex justify-between items-center'>
        <ul className='flex justify-between'>
          {navigations.map((nav) => (
            <li key={nav.href} className={classNames(nav.register ? 'flex items-center text-tertiary  h-12 hover:bg-white font-semibold p-2 transition duration-700 ease-out' : 'flex items-center text-white h-12 hover:bg-white hover:text-primary font-semibold p-2 transition duration-700 ease-out')}>
              <Link
                href={nav.href}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
