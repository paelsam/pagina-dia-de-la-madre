import Image from "next/image"
import { Heart, Camera, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import PhotoCollage from "@/components/photo-collage"
import MessageCard from "@/components/message-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
      <header className="py-6 px-4 text-center bg-white/50 backdrop-blur-sm border-b border-pink-100">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 flex items-center justify-center gap-2">
          <Heart className="text-pink-500 h-6 w-6 animate-pulse" />
          Feliz Día de las Madres
          <Heart className="text-pink-500 h-6 w-6 animate-pulse" />
        </h1>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4">Con todo mi amor para</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <Card className="card-soft  w-full md:w-1/2 bg-white/70 border-pink-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-300">
                <Image
                  src="/mom-photos/profile-mom.jpg?height=160&width=160"
                  alt="Suleidi Panameño"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-pink-600 mb-2">Suleidi Panameño</h3>
              <p className="text-gray-600">Mi querida madre</p>
            </CardContent>
          </Card>

          <Card className="card-soft  w-full md:w-1/2 bg-white/70 border-pink-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-300">
                <Image
                  src="/mom-photos/profile-grandma.jpg?height=160&width=160"
                  alt="Victoria Viveros"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-pink-600 mb-2">Victoria Viveros</h3>
              <p className="text-gray-600">Mi adorada abuela</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Photo Collage Section */}
      <section className="py-8 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4">Nuestros Recuerdos Juntos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un collage de momentos especiales que hemos compartido y que siempre llevaré en mi corazón.
            Estos son solo algunos de los recuerdos que hemos creado juntos, y espero que sigamos creando muchos más.
          </p>
        </div>

        <PhotoCollage />
      </section>

      {/* Messages Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4">Mensajes de Amor y Gratitud</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Porque nunca son suficientes las palabras para expresar lo agradecido que estoy por tenerlas en mi vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MessageCard
            message="Mamá, gracias por tu amor incondicional y por siempre creer en mí. Eres mi mayor ejemplo y mi fortaleza."
            recipient="Para Suleidi"
          />
          <MessageCard
            message="Abuelita, tu sabiduría y cariño han sido una luz en mi camino. Gracias por todas tus enseñanzas y tu amor infinito."
            recipient="Para Victoria"
          />
          <MessageCard
            message="Cada sacrificio que has hecho por mí no ha pasado desapercibido. Te admiro y te amo con todo mi corazón."
            recipient="Para Suleidi"
          />
          <MessageCard
            message="Tu dulzura y paciencia han dejado una huella imborrable en mi vida. Gracias por ser la mejor abuela del mundo."
            recipient="Para Victoria"
          />
          <MessageCard
            message="Mamá, deseo con todo mi corazón que te cuides, que sigas yendo al médico y que pronto te sientas mucho mejor. Quiero tenerte conmigo al menos 80 años más. Te amo profundamente."
            recipient="Para Suleidi"
          />
          <MessageCard
            message="Abuelita, por favor no te sobreesfuerces. Tu bienestar es lo más importante. No quiero más sustos, solo quiero verte tranquila y feliz muchos años más."
            recipient="Para Victoria"
          />
          <MessageCard
            message="Sé que no ha sido fácil y que la vida nos ha puesto a prueba muchas veces, pero a pesar de todo, te quiero con todo mi ser. Gracias por estar."
            recipient="Para Suleidi"
          />
          <MessageCard
            message="Abuela, no hay perfección en la vida, pero tu amor me ha dado razones suficientes para agradecer cada día por ti. Quédate conmigo muchos años más."
            recipient="Para Victoria"
          />
          <MessageCard
            message="Gracias por cada sonrisa, cada abrazo, cada consejo. Todo lo que soy tiene algo de ti. Que Dios te bendiga con salud y alegría todos los días."
            recipient="Para Suleidi"
          />
          <MessageCard
            message="Aunque la vida no siempre fue sencilla, tu presencia la hizo más llevadera. Te quiero con el alma, abuelita. No te me vayas nunca."
            recipient="Para Victoria"
          />

        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 text-center bg-white/50 backdrop-blur-sm border-t border-pink-100 mt-12">
        <p className="text-gray-600">
          Hecho con <Heart className="inline-block h-4 w-4 text-pink-500" /> para las mujeres más importantes de mi vida
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Desarrollado por <a href="https://github.com/paelsam" className="text-purple-600 hover:underline">Paelsam</a> con puro amor (y Vibe Coding...)
        </p>
      </footer>
    </main>
  )
}
