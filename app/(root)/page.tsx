import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Stocks App</h1>
      <Image
        src='/assets/images/dashboard.png'
        alt='Stocks'
        width={600}
        height={400}
      />
    </main>
  );
}
