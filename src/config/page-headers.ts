type PageHeader = {
  title: string;
  subtitle: string;
};

const pageHeaders: Record<string, PageHeader> = {
  home: {
    title: "Welcome to Brewify",
    subtitle: "Let's start brewing!",
  },
  notes: {
    title: "Your Brew History",
    subtitle: "View and manage your past brews",
  },
  coffee: {
    title: "Coffee Library",
    subtitle: "Track and manage your beans",
  },
  settings: {
    title: "Settings",
    subtitle: "Customize your app experience",
  },
};

export default pageHeaders;
