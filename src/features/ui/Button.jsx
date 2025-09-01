import { Link } from "react-router-dom";
const className =
  "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:py-4";
const base =
  "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
const styles = {
  primary: base + "px-4 py-3 sm:px-6 sm:py-4",
  small: base + " px-4 py-2 md:px-5 md my-2.5 text-xs",
  round: base + " px-2.5 py-1 md:px-3 md my-1.5 text-small",
  secondary:
    "inline-block rounded-full bg-transperant font-semibold uppercase border-2 border-stone-300 tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:py-3.5 sm:px-6 sm:py-4 ",
};
function Button({ children, disabled, to, type, onClick }) {
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
