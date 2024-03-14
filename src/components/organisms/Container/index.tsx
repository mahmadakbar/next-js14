import Header from '@components/molecules/Header'
import ContainerProvider from '../Provider'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <ContainerProvider>
      <main className="h-screen w-screen fixed">
        <Header />
        {children}
      </main>
    </ContainerProvider>
  )
}
