import { TwitchLogo } from "phosphor-react";

export function MinhaLogo() {
  return (
    <a
      href="https://www.twitch.tv/soul_leite"
      className="flex items-center justify-center gap-2 text-3xl text-purple-800 font-bold hover:text-white transition-colors"
    >
      <TwitchLogo size={25} />
      Soul_Leite
    </a>
  );
}
