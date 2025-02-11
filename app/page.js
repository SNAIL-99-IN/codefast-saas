import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  // let the user name be Snail and he is not logged in
  const isLoggedIn = true;
  const name = "Snail";
  return (
    <main>
      {/* Header Section */}
      <section className="bg-base-200">
        <section className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">CodeFastSaaS</div>
          <div className="space-x-4">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </section>
      </section>
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
