import type { Metadata } from "next";

const playlists = [
  {
    id: "PLOIUzos0aahHHa2jfk8y30jok5p6M1oYT",
    type: "youtube",
    title: "Vic's Long Trips",
    kicker: "Road focus",
    description:
      "A long-form companion for night drives, open highways, and the quieter parts of the map.",
    tone: "Expansive, patient, cinematic",
    duration: "Long-haul queue",
    accent: "#d76d45",
    url: "https://youtube.com/playlist?list=PLOIUzos0aahHHa2jfk8y30jok5p6M1oYT",
  },
  {
    id: "PLOIUzos0aahEJCWhGTZwMgYDCbJi3BYIp",
    type: "youtube",
    title: "Playlist de Film Scores",
    kicker: "Score mode",
    description:
      "Sweeping cues and intimate themes for work sessions that need a little silver-screen gravity.",
    tone: "Dramatic, textured, emotional",
    duration: "Scene after scene",
    accent: "#6c8fbf",
    url: "https://youtube.com/playlist?list=PLOIUzos0aahEJCWhGTZwMgYDCbJi3BYIp",
  },
  {
    id: "PLOIUzos0aahG_kB5dc5PFy73P__Vqq9mp",
    type: "youtube",
    title: "Playlist de Classical Music",
    kicker: "Classical room",
    description:
      "A refined lane for reading, thinking, and letting the room breathe without losing momentum.",
    tone: "Clear, elegant, composed",
    duration: "Deep listening",
    accent: "#4d9a87",
    url: "https://youtube.com/playlist?list=PLOIUzos0aahG_kB5dc5PFy73P__Vqq9mp",
  },
  {
    id: "42UkpxHZzexqaG1T2Wf2yu",
    type: "spotify",
    title: "Disney Songs That Slap",
    kicker: "Disney gems",
    description:
      "A nostalgic, high-energy compilation of Disney hits and childhood favorites that never fail to deliver.",
    tone: "Nostalgic, high-energy, fun",
    duration: "Sing-along marathon",
    accent: "#1db954",
    url: "https://open.spotify.com/playlist/42UkpxHZzexqaG1T2Wf2yu?si=QP1k23QkQ7uPZ5DOp5-wzQ",
  },
  {
    id: "5Fei3nhFbMXalsup2PJLZi",
    type: "spotify",
    title: "Best Disney Songs to Belt",
    kicker: "Disney vocals",
    description:
      "A collection of high-energy, sing-along Disney favorites made for singing at the top of your lungs.",
    tone: "High-energy, theatrical, nostalgic",
    duration: "Vocal workout",
    accent: "#e91e63",
    url: "https://open.spotify.com/playlist/5Fei3nhFbMXalsup2PJLZi?si=0f4IudSzQhq4wr199KNQNA",
  },
  {
    id: "37i9dQZF1EQlZ5S0kXf8kf",
    type: "spotify",
    title: "Salsa Mix",
    kicker: "Salsa time",
    description:
      "A vibrant collection of salsa classics featuring Yiyo Sarante, Maelo Ruiz, Adolescent's Orquesta, and more.",
    tone: "Rhythmic, vibrant, dance",
    duration: "Constant movement",
    accent: "#ff5722",
    url: "https://open.spotify.com/playlist/37i9dQZF1EQlZ5S0kXf8kf?si=xXjSotf-QBOfc0-vZXFtDQ",
  },
];

export const metadata: Metadata = {
  title: "Vic's Playlist App",
  description:
    "A minimal music playlist player for Vic's long trips, film scores, classical music, Disney gems, and salsa mixes.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f1] text-[#181714]">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(215,109,69,0.16),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(77,154,135,0.14),transparent_28%)]" />

        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242018]/10 pb-5">
          <a className="flex items-center gap-3" href="#player">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#181714] text-sm font-semibold text-[#f8f6f1]">
              VP
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-[#6b655a]">
                Music Hub
              </span>
              <span className="block text-lg font-semibold">{"Vic's Playlists"}</span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-2" aria-label="Playlist shortcuts">
            {playlists.map((playlist) => (
              <a
                key={playlist.id}
                className="rounded-full border border-[#242018]/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#3d3932] shadow-sm shadow-[#242018]/5 transition hover:-translate-y-0.5 hover:border-[#242018]/25 hover:bg-white"
                href={`#${playlist.id}`}
              >
                {playlist.kicker}
              </a>
            ))}
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
          <section className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#8f5c42]">
              Six moods, one quiet control room
            </p>
            <h1 className="text-5xl font-semibold leading-[0.96] text-[#181714] sm:text-6xl lg:text-7xl">
              {"A cleaner way to drift through Vic's favorite playlists."}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d574c]">
              Pick a mood, press play, and keep the queue open while the day
              stretches out. Built for long drives, focused work, and the soft
              ritual of choosing exactly the right soundtrack.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[#181714] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#181714]/15 transition hover:-translate-y-0.5"
                href="#player"
              >
                Open player
              </a>
              <a
                className="rounded-full border border-[#242018]/15 bg-white/70 px-5 py-3 text-sm font-semibold text-[#181714] transition hover:-translate-y-0.5 hover:bg-white"
                href={playlists[0].url}
                rel="noreferrer"
                target="_blank"
              >
                Launch on {playlists[0].type === "spotify" ? "Spotify" : "YouTube"}
              </a>
            </div>
          </section>

          <section
            id="player"
            className="rounded-[2rem] border border-[#242018]/10 bg-[#fffdf8]/85 p-3 shadow-2xl shadow-[#3f382c]/12 backdrop-blur"
            aria-label="Featured playlist player"
          >
            <div className="overflow-hidden rounded-[1.5rem] bg-[#181714]">
              {playlists[0].type === "spotify" ? (
                <iframe
                  className="aspect-video w-full border-0"
                  src={`https://open.spotify.com/embed/playlist/${playlists[0].id}?utm_source=generator`}
                  title={`${playlists[0].title} Spotify playlist`}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${playlists[0].id}`}
                  title={`${playlists[0].title} YouTube playlist`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
            <div className="grid gap-3 p-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {playlists.map((playlist) => (
                <a
                  key={playlist.id}
                  className="group rounded-2xl border border-[#242018]/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#242018]/10"
                  href={`#${playlist.id}`}
                >
                  <span
                    className="mb-4 block h-1.5 w-14 rounded-full"
                    style={{ backgroundColor: playlist.accent }}
                  />
                  <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-[#777064]">
                    {playlist.kicker}
                  </span>
                  <span className="mt-1 block text-lg font-semibold leading-tight text-[#181714]">
                    {playlist.title}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#181714] px-5 py-16 text-[#f8f6f1] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <article
              id={playlist.id}
              key={playlist.id}
              className="scroll-mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                  {playlist.kicker}
                </p>
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: playlist.accent }}
                />
              </div>
              <h2 className="text-2xl font-semibold">{playlist.title}</h2>
              <p className="mt-3 min-h-24 text-base leading-7 text-white/68">
                {playlist.description}
              </p>
              <dl className="mt-6 grid gap-3 text-sm">
                <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                  <dt className="text-white/45">Tone</dt>
                  <dd className="text-right text-white/85">{playlist.tone}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                  <dt className="text-white/45">Best for</dt>
                  <dd className="text-right text-white/85">
                    {playlist.duration}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 overflow-hidden rounded-2xl bg-black">
                {playlist.type === "spotify" ? (
                  <iframe
                    className="aspect-video w-full border-0"
                    src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`}
                    title={`${playlist.title} Spotify playlist`}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
                    title={`${playlist.title} YouTube playlist`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
              <a
                className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#181714] transition hover:-translate-y-0.5"
                href={playlist.url}
                rel="noreferrer"
                target="_blank"
              >
                Open on {playlist.type === "spotify" ? "Spotify" : "YouTube"}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
