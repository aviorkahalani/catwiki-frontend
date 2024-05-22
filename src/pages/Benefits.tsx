import { Link } from 'react-router-dom'
import Container from '../components/Container'

export default function Benefits() {
  const sections = [
    {
      id: 0,
      title: '',
      content:
        'Cats have been cherished companions to humans for thousands of years. Their unique blend of independence, affection, and playfulness makes them ideal pets for a variety of lifestyles. Here are some compelling reasons why you should consider bringing a cat into your home.',
    },
    {
      id: 1,
      title: '1. Stress Relief and Mental Health Benefits',
      content:
        'Having a cat around can significantly improve your mental health.Studies have shown that interacting with cats can trigger the release of oxytocin, a hormone associated with emotional bonding. This release helps lower stress and anxiety levels. Petting a cat, listening to its purr, or simply having it nearby can provide a soothing effect,reducing feelings of loneliness and depression.',
    },
    {
      id: 2,
      title: '2. Low Maintenance Companions',
      content:
        'Cats are relatively low-maintenance pets compared to dogs. They do not require daily walks, and they are meticulous groomers. Most cats are happy to entertain themselves with toys, and their litter box habits make them suitable for people with busy lifestyles or limited mobility. While they appreciate attention and affection, cats are also content to spend time alone, making them perfect for people who work long hours.',
    },
    {
      id: 3,
      title: '3. Health Benefits',
      content:
        'Beyond mental health, having a cat can also offer physical health benefits. Cat owners have been found to have a lower risk of heart attacks and strokes. The calming presence of a cat can help reduce blood pressure and improve cardiovascular health. Additionally, the companionship of a cat can boost your immune system, helping you fend off common illnesses.',
    },
    {
      id: 4,
      title: '4. Pest Control',
      content:
        'Cats are natural hunters, and their presence can help keep your home free of pests such as mice, rats, and insects. Even the scent of a cat can be a deterrent to many household pests. This natural pest control can save you money on extermination services and provide peace of mind.',
    },
    {
      id: 5,
      title: '5. Entertainment and Companionship',
      content:
        'Cats are endlessly entertaining with their playful antics and curious nature. Whether they are chasing a laser pointer, climbing to new heights, or exploring their environment, cats bring joy and laughter to their owners. Their unique personalities and behaviors make them fascinating companions. Each cat has its own distinct character, ensuring that life with a cat is never dull.',
    },
    {
      id: 6,
      title: '6. Bonding and Social Interaction',
      content:
        'Owning a cat can also improve your social life. Cats can be excellent conversation starters, whether with fellow cat owners or with friends and family. Sharing stories and experiences about your pet can help build connections and foster friendships. Furthermore, caring for a cat can teach responsibility and empathy, making it a valuable experience for children and adults alike.',
    },
    {
      id: 7,
      title: '7. Aesthetic and Lifestyle Fit',
      content:
        'Cats come in a wide variety of breeds, colors, and sizes, allowing you to choose one that fits your personal preferences and lifestyle. Whether you prefer a sleek, short-haired cat or a fluffy, long-haired one, there is a cat out there to match your aesthetic. Additionally, cats can adapt to various living situations, from small apartments to large houses, making them versatile pets for urban and rural environments alike.',
    },
    {
      id: 8,
      title: 'Conclusion',
      content:
        'In conclusion, having a cat can enrich your life in numerous ways. From providing emotional and physical health benefits to offering companionship and entertainment, cats make wonderful pets. Their low-maintenance nature and unique personalities make them ideal for many different lifestyles. If you are considering adding a pet to your home, a cat might just be the perfect choice for you.',
    },
  ]
  const imageUrl = new URL('../assets/cat-1.jpg', import.meta.url).href

  return (
    <section>
      <Container className="py-10">
        <Link to="/" className="mb-7 text-gray-500 hover:underline">
          ← Go Back
        </Link>
        <h1 className="my-7 text-4xl font-light">Why Should You Have a Cat?</h1>
        <img
          src={imageUrl}
          alt="A cute cat under the blanket"
          className="aspect-video h-64 w-full rounded object-cover object-center shadow"
        />

        {sections.map((section) => (
          <article
            key={section.id}
            className="mx-auto my-7 max-w-2xl space-y-2.5"
          >
            <h3 className="text-lg font-medium">{section.title}</h3>
            <p className="font-light leading-relaxed">{section.content}</p>
          </article>
        ))}
      </Container>
    </section>
  )
}
