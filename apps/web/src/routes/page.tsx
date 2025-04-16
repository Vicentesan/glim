import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  )
}
