import Link from "next/link";

// This Button is used to log users in or send them to the Login in page
const ButtonLogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return <Link href="/dashboard">Welcome back{name}</Link>;
  }
  return <button>Login</button>;
};

export default ButtonLogin;
