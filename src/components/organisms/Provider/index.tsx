'use client'

import { Provider } from 'react-redux'
import { store } from '@store/storages'

export default function ContainerProvider({ children }: { readonly children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
