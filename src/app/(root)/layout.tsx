import StreamClientProvider from '@/components/Providers/StreamClientProvider'
import React, { ReactNode } from 'react'

function Layout({children} : {children:ReactNode}) {
  return (
    <StreamClientProvider>{children}</StreamClientProvider>
  )
}

export default Layout;