import DayState from "@/components/DayState";
import Image from "next/image";

export default function Home() {
  const habits = {
    "beber água": {
      "2023-07-18": false,
      "2023-07-17": true,
      "2023-07-16": false,
    },
    "estudar": {
      "2023-07-18": false,
      "2023-07-17": true,
      "2023-07-16": false,
    },
  };

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || Object.keys(habits).length === 0 && (
        <h1 className="text-white mt-20 text-4xl font-light font-display text-center">
          você não possui hábitos cadastrados.
        </h1>
      )}
      {habits != null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit}>
            <section className="flex justify-between items-center">
            <span className="text-white text-xl font-light font-sans">{habit}</span>
            <button>
              <Image src="/images/trash.svg" width={20} height={20} alt="Ícone de lixeira vermelha"/>
            </button>
            </section>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {weekDays.map((day) => (
                <div  key={day} className="flex flex-col">
                <span className="font-sans text-xs text-white text-center">{day}</span>
                {/* day state*/ }
                <DayState day={false}/>
                </div>
              ))}
            </section>
          </div>
        ))
      }
    </main>
  )
}
