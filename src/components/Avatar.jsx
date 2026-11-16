import { profile } from "../data/profile.js";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const sizes = {
  sm: "h-10 w-10 rounded-full text-xs",
  lg: "aspect-[4/5] w-full max-w-xs rounded-2xl text-6xl",
};

// Shows profile.photo when it's set, otherwise a block with your initials.
export default function Avatar({ size = "sm" }) {
  const classes = `${sizes[size]} shadow-sm ring-2 ring-white dark:ring-zinc-800`;

  if (profile.photo) {
    return <img alt={profile.name} className={`${classes} object-cover object-top`} src={`${basePath}${profile.photo}`} />;
  }

  return (
    <div
      aria-label={profile.name}
      className={`${classes} grid place-items-center bg-gradient-to-br from-teal-500 to-sky-600 font-bold text-white`}
      role="img"
    >
      {profile.initials}
    </div>
  );
}
