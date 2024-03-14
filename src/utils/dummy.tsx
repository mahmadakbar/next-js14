import IMAGES from '@assets/images'

const PRODUCT = [
  {
    id: '9c2b2b8a-0a57-4ab9-b918-e1645cba1836',
    name: 'Hoodie Black Cotton',
    size: ['S', 'M', 'L', 'XL'],
    image: IMAGES.hoodieblack,
    price: 220000,
    discount: 0,
    desc: ({ ...props }) => (
      <section {...props}>
        <h1 className="font-bold">Black Cotton Hoodie</h1>
        <p className="mt-2">
          This classic black hoodie is a versatile addition to your wardrobe. Crafted from 100% cotton, it offers both
          style and comfort.
        </p>

        <ul className="list-decimal list-inside mt-2 -5">
          <li>
            <strong>Fabric:</strong> Made from soft and breathable cotton, this hoodie ensures all-day comfort. The
            brushed interior provides superior coziness, and the reduced pilling ensures long-lasting quality.
          </li>
          <li>
            <strong>Design:</strong> The hoodie features an oversized fit, perfect for a relaxed look. Its minimalistic
            design makes it suitable for various occasions. Whether you're running errands or lounging at home, this
            black cotton hoodie has got you covered.
          </li>
          <li>
            <strong>Care Instructions:</strong> To maintain its quality, wash the hoodie inside out in cold water. Hang
            dry or lay it flat on a towel after washing to prevent shrinking or color fading.
          </li>
        </ul>
        <p className="mt-2">
          Upgrade your wardrobe with this timeless black cotton hoodie. It pairs effortlessly with jeans, joggers, or
          shorts. Add it to your collection today! 🖤
        </p>
      </section>
    ),
  },
  {
    id: '73abb466-d6b5-4ad3-82ac-ecf887bfd3b6',
    name: 'Hoodie White Cotton',
    size: ['S', 'M', 'L', 'XL'],
    image: IMAGES.hoodiewhite,
    price: 345000,
    discount: 290000,
    desc: ({ ...props }) => (
      <section {...props}>
        <h1 className="font-bold">White Cotton Hoodie</h1>
        <p className="mt-2">
          White cotton hoodies are a versatile and timeless addition to any wardrobe. Made from soft and breathable
          cotton, these hoodies are perfect for both casual and athletic wear. Their classic design and neutral color
          make them suitable for people of all ages and genders.
        </p>
        <ul className="list-decimal list-inside mt-2">
          <li>
            <strong>Fabric:</strong> Crafted from 100% cotton, this hoodie offers comfort and breathability. The soft
            feel and reduced pilling ensure a cozy experience.
          </li>
          <li>
            <strong>Design:</strong> The classic fit provides loose comfort, while the brushed interior adds superior
            softness. Rib cuffs and a bottom band with spandex enhance stretch and recovery.
          </li>
          <li>
            <strong>Care Instructions:</strong> To maintain its quality, wash the hoodie inside out in cold water. Hang
            dry or lay it flat on a towel after washing to prevent shrinking or color fading.
          </li>
        </ul>
        <p className="mt-2">
          Upgrade your wardrobe with this white cotton hoodie that pairs effortlessly with jeans, joggers, or shorts.
          Add it to your collection today! 🌟
        </p>
      </section>
    ),
  },
  {
    id: 'b937fb46-4671-4bdd-88e5-479bbe31ad68',
    name: 'Shirt Blue Cotton Combed Premium',
    size: ['S', 'M', 'L', 'XL'],
    image: IMAGES.shirtblue,
    price: 120000,
    discount: 98000,
    desc: ({ ...props }) => (
      <section {...props}>
        <h1 className="font-bold">Blue Premium Combed Cotton Shirt</h1>
        <p className="mt-2">
          Upgrade your wardrobe with this premium combed cotton shirt in a stunning shade of blue. Crafted for comfort
          and style, it's the perfect addition to your casual or semi-formal attire.
        </p>
        <ul className="list-decimal list-inside mt-2">
          <li>
            <strong>Fabric:</strong> Made from ultra-soft combed cotton, this shirt offers superior comfort. Combed
            cotton is softer and more durable than regular cotton due to the removal of short fibers during the combing
            process.
          </li>
          <li>
            <strong>Design:</strong> The shirt features a tailored fit with a classic collar and button-down front. Its
            timeless design makes it suitable for various occasions, from office meetings to weekend outings.
          </li>
          <li>
            <strong>Quality:</strong> Combed cotton ensures minimal pilling and excellent color retention. It's highly
            absorbent, making it ideal for all-day wear.
          </li>
        </ul>
        <p className="mt-2">
          Elevate your style with this blue premium combed cotton shirt. Pair it with chinos, jeans, or dress pants for
          a polished look. Add it to your collection today!
        </p>
      </section>
    ),
  },
  {
    id: 'e6e6f2a7-42f7-4a8f-b81b-2ae6a123208e',
    name: 'Shirt Blue Navy Combed Premium',
    size: ['S', 'M', 'L', 'XL'],
    image: IMAGES.shirtnavy,
    price: 120000,
    discount: 0,
    desc: ({ ...props }) => (
      <section {...props}>
        <h1 className="font-bold">Navy Premium Combed Cotton Shirt</h1>
        <p className="mt-2">
          Elevate your style with this navy premium combed cotton shirt. Crafted from 100% natural cotton fibers, it
          combines softness, durability, and comfort.
        </p>
        <ul className="list-decimal list-inside mt-2">
          <li>
            <strong>Fabric:</strong> Combed cotton is a softer version of regular cotton. It undergoes an additional
            combing process after harvesting, resulting in a luxurious feel. The absence of impurities and short fibers
            makes it exceptionally soft and smooth.
          </li>
          <li>
            <strong>Design:</strong> This shirt features a slim fit, making it suitable for both casual and semi-formal
            occasions. The embroidered icon on the pocket adds a subtle touch of sophistication.
          </li>
          <li>
            <strong>Comfort:</strong> Combed cotton is highly absorbent, keeping you cool and comfortable. Its
            lightweight and breathable nature make it ideal for year-round wear.
          </li>
        </ul>
        <p className="mt-2">
          Whether you're heading to the office or a weekend outing, this navy premium combed cotton shirt is a timeless
          wardrobe essential. Pair it with jeans, chinos, or dress pants for a polished look!
        </p>
      </section>
    ),
  },
  {
    id: '05346ce3-9bc6-42c6-af56-8eadf5450136',
    name: 'Shirt Blue White Combed Premium',
    size: ['S', 'M', 'L', 'XL'],
    image: IMAGES.shirtwhite,
    price: 120000,
    discount: 0,
    desc: ({ ...props }) => (
      <section {...props}>
        <h1 className="font-bold">White Premium Combed Cotton Shirt</h1>
        <p className="mt-2">
          Elevate your style with this premium combed cotton shirt in a pristine shade of white. Crafted for unbeatable
          comfort and lasting quality, it's the perfect addition to your wardrobe.
        </p>
        <ul className="list-decimal list-inside mt-2">
          <li>
            <strong>Fabric:</strong> Made from ultra-soft combed cotton fibers, this shirt ensures a luxurious feel
            against your skin. Combed cotton is softer and more durable than regular cotton due to the removal of short
            fibers during the combing process.
          </li>
          <li>
            <strong>Design:</strong> The shirt features a tailored fit with a classic collar and button-down front. Its
            timeless design makes it suitable for various occasions, from office meetings to casual outings.
          </li>
          <li>
            <strong>Comfort:</strong> Combed cotton provides superior softness and breathability. It's highly absorbent,
            keeping you cool and comfortable throughout the day.
          </li>
        </ul>
        <p className="mt-2">
          Whether you pair it with dress pants, jeans, or shorts, this white premium combed cotton shirt exudes elegance
          and versatility. Add it to your collection today!
        </p>
      </section>
    ),
  },
  {
    id: 'f1897fa2-f8c2-40a7-b5f6-b06cfa4de4b3',
    name: 'T-Shirt Black Bamboo Cotton',
    size: ['S', 'M', 'L', 'XL'],
    image: IMAGES.tshirtblack,
    price: 75000,
    discount: 0,
    desc: ({ ...props }) => (
      <section {...props}>
        <h1 className="font-bold">Black Bamboo Cotton T-Shirt</h1>
        <p className="mt-2">
          Upgrade your wardrobe with this black T-shirt crafted from a blend of ultra-soft bamboo and organic cotton.
          Whether you're heading out for a casual day or need a comfortable layer for sports, this T-shirt has you
          covered.
        </p>
        <ul className="list-decimal list-inside mt-2">
          <li>
            <strong>Fabric:</strong> The combination of bamboo and organic cotton ensures a soft, breathable, and
            eco-friendly material. Bamboo fibers add a luxurious touch, while cotton provides durability.
          </li>
          <li>
            <strong>Features:</strong> This knee-length T-shirt dress features a removable waist tie for versatile
            styling. It's designed for comfort and ease of wear.
          </li>
          <li>
            <strong>Care Instructions:</strong> To maintain its quality, follow the care instructions provided. Gentle
            washing and air drying are recommended to preserve the fabric's softness and color.
          </li>
        </ul>
        <p className="mt-2">
          Whether you're lounging at home or stepping out, this black bamboo cotton T-shirt is a wardrobe staple you'll
          love. Add it to your collection today!
        </p>
      </section>
    ),
  },
  {
    id: 'f9c07918-0c40-4fcf-ad06-efa12e7bbac1',
    name: 'Running Sneakers White Men',
    size: [38, 39, 40, 41, 42],
    image: IMAGES.shoes,
    price: 2500000,
    discount: 1920000,
    desc: ({ ...props }) => (
      <section {...props}>
        <h1 className="font-bold">Running Sneakers White Men</h1>
        <p className="mt-2">
          Elevate your style with these running shoes in a classic white color. Crafted with premium materials.
        </p>
      </section>
    ),
  },
]

export default PRODUCT
