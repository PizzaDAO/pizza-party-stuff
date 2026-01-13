export default function SocialLinks() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-3 z-50">
      <a
        href="https://docs.google.com/spreadsheets/d/1_JSEL5L2iKrO_oNAAShoqzdAhn5E51jDe_JA8DDhmwQ/edit?gid=0#gid=0"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img
          src="https://cdn.simpleicons.org/googlesheets/000000"
          alt="Google Sheets"
          className="w-8 h-8"
        />
      </a>
      <a
        href="https://github.com/PizzaDAO/pizza-party-stuff"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}
