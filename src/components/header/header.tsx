type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle }: HeaderProps) => (
  <div className="bg-gray-900 pt-4 px-4">
    <h1 className="text-3xl font-bold">{title}</h1>
    {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
  </div>
);

export default Header;
