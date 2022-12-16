import Head from 'next/head'
import MaintenanceNav from '../components/maintenance-nav'
import MaintenanceFooter from '../components/maintenance-footer'
import Meta from '../components/meta'
import metaData from '../data/meta.json'

export default function Maintenance() {
    return (
      <>
        <Meta />
        <div className="min-h-screen">
          <MaintenanceNav logo={metaData.logo}/>
          <div className="bg-off-white pv3">
            <div className="ph3 mw7 center">
              <h2 className="f2 b lh-title mb2">We&apos;re Sorry</h2>
              <p className="mb4 mw6">Iron Detailing is not currently accepting new clients.</p>
            </div>
          </div>
        </div>
        <MaintenanceFooter />
      </>
    )
  }