import Link from "next/link";

const Header = () => {
  return (
    <div className="Header">
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10 text-white">
        <ul className="flex justify-center space-x-4">
          <li className="font-medium px-3 py-2 text-slate-700 rounded-lg bg-slate-100 hover:text-slate-900"><Link href="/">Home</Link></li>
          <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link href="/blog">Blog</Link></li>
          <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link href="/about">About</Link></li>
          <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link href="/portfolio">Portfolio</Link></li>
          <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link href="/search">Search</Link></li>
          <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link href="/contact">Contact</Link></li>
          <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link href="/reviews">Reviews</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Header;