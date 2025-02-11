import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = false;
  const name = "Snail";
  return (
    <main>
      <h1> Collect customer feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, priotize features, and build
        products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
    </main>
  );
}
