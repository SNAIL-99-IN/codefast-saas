import Link from "next/link";

// This Button is used to log users in or send them to the Login in page
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name} 👋
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
