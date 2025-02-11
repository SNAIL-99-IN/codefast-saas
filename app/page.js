import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  // let the user name be Snail and he is not logged in
  const isLoggedIn = true;
  const name = "Snail";
  return (
    <main>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, priotize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
