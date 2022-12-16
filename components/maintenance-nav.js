import { useRouter } from 'next/router'

export default function Nav({logo}) {
  const router = useRouter()
  const slug = router.pathname.substr(1)
  const navStyle = "overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative"
  return (
    <nav 
      className={`${navStyle} on-${slug}`}>
      <a href="/" className="pa3 db mr4 h-100 w4 flex-none">
      <img src={logo} alt="Iron Details logo" className="br0 db mb0 w-100"/>
      </a>
    </nav>
  )
}