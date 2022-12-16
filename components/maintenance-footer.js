// import Link from 'next/link'
import SocialIcon from './social-icon'

export default function Footer() {
  return (
    <footer className="bg-black ph3 pv4 white">
      <div className="mw7 center pt3">
        <div className="measure-narrow center mb4">
          <img className="db w4 center mb4 br0" src="/img/logo.png" alt="Kaldi logo" />
        </div>
        <div className="measure-narrow center mb4">
          <div className="db w4 center mb4 br0">
            <h3 className="f4 b lh-title mb2 primary">Social media</h3>
            <ul className="mhn2">
              {/* <SocialIcon link="#" iconPath="/img/icons-facebook.svg" /> */}
              <SocialIcon link="https://www.instagram.com/irondetails/" iconPath="/img/icons-instagram.svg" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
