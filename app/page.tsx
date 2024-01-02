export default function Home() {
  const habits = {};

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || Object.keys(habits).length === 0 && (
        <h1 className="text-white mt-20 text-4xl font-light font-display text-center">
          você não possui hábitos cadastrados.
        </h1>
      )}
    </main>
  )
}
