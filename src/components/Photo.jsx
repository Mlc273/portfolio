import { profile } from "../data/profile.js";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Profile photo with a soft teal accent shape behind it.
export default function Photo({ className = "", priority = false }) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-2 -z-10 translate-x-2 translate-y-2 rounded-[2rem] sm:-inset-3 sm:translate-x-4 sm:translate-y-4 bg-teal-100 dark:bg-teal-300/15"
      />
      <img
        alt={`Portrait of ${profile.name}`}
        className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top shadow-xl shadow-stone-900/10"
        decoding="async"
        height="1250"
        loading={priority ? "eager" : "lazy"}
        src={`${basePath}${profile.photo}`}
        width="1000"
      />
    </div>
  );
}
