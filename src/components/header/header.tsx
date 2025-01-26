type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle }: HeaderProps) => (
  <header className="mx-auto max-w-screen-sm px-5 py-5 bg-zinc-950">
    <h1 className="text-3xl font-bold">{title}</h1>
    {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
  </header>
);

export default Header;
