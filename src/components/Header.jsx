import Logo from '../assets/logo.svg?react'

export default function Header({ title, tot }) {
  return (
    <header className='flex justify-between items-center text-veryPaleOrange bg-softRed px-6 py-5 rounded-xl mb-4 sm:px-8 sm:py-[1.7rem] sm:rounded-2xl sm:mb-6' >
      <div>
        <h1 className=' text-sm tracking-wide mb-1 sm:text-base sm:tracking-wider sm:mb-3' >{title}</h1>
        <p className='text-2xl tracking-wide sm:text-3xl sm:tracking-wider font-bold '>${tot}</p>
      </div>
      <Logo className=" w-[58px] sm:w-[72px] sm:mr-2" />
      
    </header>
  );
}
