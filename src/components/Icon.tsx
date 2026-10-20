export type IconProps = {
  name: "arrow" | "github" | "linkedin" | "mail";
};

export default function Icon({ name }: IconProps) {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    github: (
      <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.6 3.6-.4 7.38-1.77 7.38-8A6.24 6.24 0 0 0 19.6 3.1 5.8 5.8 0 0 0 19.45 0S18.4-.35 15 1.68a15.4 15.4 0 0 0-8 0C3.6-.35 2.55 0 2.55 0A5.8 5.8 0 0 0 2.4 3.1 6.24 6.24 0 0 0 .72 7.5c0 6.22 3.78 7.6 7.38 8A3.3 3.3 0 0 0 7 18.08V22m0-3c-3 .92-3-1.5-4.2-2" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 2-3Z" />
        <path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="1" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}
