export type ProjectItem = {
  tag: string;
  title: string;
  desc: string;
  metrics: [string, string][];
};

export type ExperienceItem = {
  range: string;
  where: string;
  role: string;
  org: string;
  bullets: string[];
};

export type Dictionary = {
  nav: { about: string; stack: string; projects: string; experience: string; contact: string; cta: string };
  hero: { role: string; status: string; eyebrow1: string; eyebrow2: string; eyebrow3: string; sub: string; cta1: string; cta2: string; scroll: string; meta: string[] };
  about: {
    eyebrow: string; title1: string; title2: string;
    p1_pre: string; p1_name: string; p1_mid: string; p1_org: string; p1_post: string;
    p2_pre: string; p2_age: string; p2_mid: string; p2_proj: string; p2_post: string;
    p3: string;
    stats: [string, string, string][];
  };
  stack: {
    eyebrow: string; title1: string; title2: string; sub: string;
    cards: [string, string][];
    kickers: string[];
    rows: string[];
  };
  projects: { eyebrow: string; title1: string; title2: string; featured: string; all: string; items: ProjectItem[] };
  experience: { eyebrow: string; title1: string; title2: string; items: ExperienceItem[] };
  contact: {
    eyebrow: string; title1: string; title2: string; sub: string;
    f_name: string; f_email: string; f_subject: string; f_message: string;
    ph_name: string; ph_email: string; ph_subject: string; ph_message: string;
    hint_optional: string;
    err_name: string; err_email: string; err_message: string;
    reply: string; send: string; sending: string; sent: string;
    avail: string[];
    labels: { github: string; linkedin: string; email: string };
  };
  footer: { top: string; proj: string; cont: string; impr: string; priv: string };
  meta: { title: string; titleTemplate: string; description: string; ogAlt: string };
};

export const dict: Dictionary = {
  nav: {
    about: "Über mich",
    stack: "Skills",
    projects: "Projekte",
    experience: "Erfahrung",
    contact: "Kontakt",
    cta: "Schreib mir",
  },
  hero: {
    role: "Lernender Informatiker EFZ · Galaxus",
    status: "In Ausbildung · offen für Nebenjobs",
    eyebrow1: "Developer",
    eyebrow2: "Full Stack",
    eyebrow3: ".NET & Web",
    sub: "19 Jahre alt, aus der Schweiz — mit 14 als Autodidakt angefangen, heute Lernender bei Galaxus und immer ehrgeizig.",
    cta1: "Projekte ansehen",
    cta2: "Kontakt aufnehmen",
    scroll: "scroll",
    meta: ["Zürich · CH", "since 2020", "v2026"],
  },
  about: {
    eyebrow: "01 — Über mich",
    title1: "Wer bin",
    title2: "ich?",
    p1_pre: "Hey — ich bin ",
    p1_name: "Eray Kaan Cevik",
    p1_mid: ", 19 Jahre alt aus der Schweiz. Ich absolviere aktuell meine Ausbildung zum Informatiker EFZ bei ",
    p1_org: "Galaxus",
    p1_post: " — einem der grössten E-Commerce-Unternehmen der Schweiz.",
    p2_pre: "Mit ",
    p2_age: "14 Jahren",
    p2_mid: " habe ich autodidaktisch angefangen zu programmieren — zuerst Python, dann der Wechsel auf C# und .NET. Heute lerne ich bei Galaxus weiter und arbeite parallel an eigenen Projekten. Mein bisher bekanntestes ist ",
    p2_proj: "MudForge",
    p2_post: " — eine MIT-lizenzierte NuGet-Library, die das Theming in Blazor-Apps mit MudBlazor vereinfacht.",
    p3: "Ich liebe es, Probleme zu lösen, die anderen Entwicklern das Leben einfacher machen. Egal ob .NET, Blazor oder Web — sauberer Code und gute Developer Experience sind mir wichtiger als schnelle Lösungen.",
    stats: [
      ["19", "Jahre alt", "born 2007"],
      ["EFZ", "Informatiker", "Schweiz · 2023→"],
      ["MIT", "Open Source", "NuGet published"],
      ["∞", "Energy", "pro Tag"],
    ],
  },
  stack: {
    eyebrow: "02 — Tech Stack",
    title1: "Womit ich",
    title2: "baue",
    sub: "Mein Werkzeugkasten — von der Datenbank bis zum Deployment.",
    cards: [
      [".NET Ökosystem", "C#, Blazor, Razor, Avalonia UI und WPF — von Web-Apps bis zu nativen Desktop-Applikationen mit dem .NET-Stack."],
      ["Systems & Web", "Mit C und Rust gehe ich runter auf die tiefere Ebene — ein Transpiler und eine kleine Standard-Library in reinem C, dazu eine wiederverwendbare Utility-Crate in Rust. TypeScript und React begegnen mir zunehmend in der Ausbildung."],
      ["KI-Integration", "Claude API für KI-Features in eigenen Side-Projects — Prompt-Engineering, Tool-Calls, Streaming."],
      ["Open Source & Tooling", "Git, GitHub Actions, Docker und NuGet-Publishing. Ich lerne täglich Neues — in der Ausbildung und durch eigene Projekte."],
    ],
    kickers: ["// .NET", "// systems", "// AI", "// OSS"],
    rows: ["// daily", "// working with", "// currently learning"],
  },
  projects: {
    eyebrow: "03 — Projekte",
    title1: "Was ich",
    title2: "gebaut habe",
    featured: "// featured",
    all: "Alle Projekte →",
    items: [
      {
        tag: "Open Source · Featured",
        title: "MudForge",
        desc: "MIT-lizenzierte NuGet-Library, die das Theming in Blazor-Apps mit MudBlazor vereinfacht. Unterstützt Dark/Light Mode, automatische System-Theme-Erkennung und persistente Speicherung im localStorage.",
        metrics: [["MIT", "Lizenz"], ["✓", "NuGet Package"]],
      },
      {
        tag: "Ausbildung · Galaxus",
        title: "Interne Tools",
        desc: "Im Rahmen meiner Ausbildung bei Galaxus arbeite ich an internen Werkzeugen — unter NDA, daher keine öffentlichen Details. Lerne dabei, wie Software in einem der grössten Schweizer E-Commerce-Unternehmen entwickelt, getestet und deployed wird.",
        metrics: [["2023", "Seit"], ["NDA", "Details"]],
      },
      {
        tag: "Bot · C# · Side-Project",
        title: "Discord Bot",
        desc: "Discord-Bot mit Discord.NET in C# gebaut — Slash-Commands, Event-Handling und persistente Konfiguration über MongoDB. Eigenes Side-Project zum Üben sauberer .NET-Backend-Architektur.",
        metrics: [["Discord.NET", "Stack"], ["MongoDB", "Storage"]],
      },
      {
        tag: "C · Transpiler · Open Source",
        title: "C-Extended (cx)",
        desc: "Ein minimaler Transpiler, der .cx-Dateien in portables C übersetzt — Klassen, assoziierte Funktionen und Methoden, ohne vtables, ohne Runtime und ohne versteckte Allokationen. Bewusst ohne Vererbung, Generics oder Exceptions: Was sich nicht als Struct plus freie Funktion ausdrücken lässt, gehört nicht in C-Extended.",
        metrics: [["MIT", "Lizenz"], ["0", "Runtime-Deps"]],
      },
      {
        tag: "C · Library · Open Source",
        title: "cbase",
        desc: "Standard-Library für generische Projekte in reinem C — dynamische Vectors, Strings und Linked Lists hinter einer sauberen Header-API. Gebaut mit Makefile, eigener Test-Suite und clangd-Tooling.",
        metrics: [["3", "Module"], ["Pure C", "Ohne Deps"]],
      },
      {
        tag: "Rust · Toolkit · Open Source",
        title: "cope",
        desc: "Mein persönliches Kopium für Rust — eine wachsende Sammlung von Utilities, die ich projektübergreifend wiederverwende. Aktuell ein Config-Modul, das JSON über Serde in typisierte Structs liest und schreibt, inklusive typisierter Fehler. Logging, geteilte Error-Types und Filesystem-Helper folgen.",
        metrics: [["MIT", "Lizenz"], ["Serde", "Config"]],
      },
      {
        tag: "Rust · Learning · Open Source",
        title: "rust-mini-games",
        desc: "Drei kleine Terminal-Spiele — Guess the Word, Number Guess und Tic-Tac-Toe — entstanden beim Rust-Lernen. Ownership, Pattern Matching und Error Handling an etwas geübt, das am Ende wirklich läuft.",
        metrics: [["3", "Spiele"], ["CLI", "Terminal"]],
      },
    ],
  },
  experience: {
    eyebrow: "04 — Erfahrung",
    title1: "Mein",
    title2: "Werdegang",
    items: [
      {
        range: "2023 — heute",
        where: "Zürich, Schweiz",
        role: "Lernender Informatiker EFZ",
        org: "Galaxus AG",
        bullets: [
          "Ausbildung zum Informatiker EFZ (Applikationsentwicklung) bei einem der grössten Schweizer E-Commerce-Unternehmen",
          "Mitarbeit an internen Tools und Applikationen mit .NET und C#",
          "Agile Entwicklungsprozesse, Code Reviews und Teamarbeit in einem professionellen Umfeld",
          "Täglicher Einsatz von Git, SQL und modernen Entwicklungswerkzeugen",
        ],
      },
      {
        range: "2023 — heute",
        where: "Remote · GitHub",
        role: "Eigenprojekte & Open Source",
        org: "MudForge (Eigenprojekt)",
        bullets: [
          "Entwicklung von MudForge — einer MIT-lizenzierten NuGet-Library für Blazor-Theming",
          "Veröffentlichung als öffentliches NuGet-Package auf nuget.org",
          "Unterstützung von Dark/Light Mode, System-Theme-Erkennung und localStorage-Persistenz",
          "Nebenprojekte als Lernfeld für neue Technologien und eigene Ideen",
        ],
      },
      {
        range: "2020 — 2023",
        where: "Schweiz",
        role: "Selbstständiges Lernen & Projekte",
        org: "Eigeninitiative",
        bullets: [
          "Programmieren ab 14 Jahren autodidaktisch erlernt — zuerst Python, dann Wechsel auf C# und .NET",
          "Eigene Web- und Desktop-Projekte als Lerngrundlage",
          "Einstieg in objektorientierte Programmierung, Entwicklung erster Discord-Bots und Desktop-Anwendungen, Versionierung mit Git",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "05 — Kontakt",
    title1: "Lass uns was",
    title2: "bauen",
    sub: "Offen für neue Projekte, Freelance-Anfragen und spannende Vollzeitstellen. Schreib mir — ich antworte innerhalb von 24h.",
    f_name: "Name",
    f_email: "E-Mail",
    f_subject: "Betreff",
    f_message: "Nachricht",
    ph_name: "Max Mustermann",
    ph_email: "max@mail.de",
    ph_subject: "Projektanfrage · Job · Sonstiges",
    ph_message: "Hey Eray, ich habe ein cooles Projekt…",
    hint_optional: "optional",
    err_name: "Name fehlt",
    err_email: "gültige E-Mail",
    err_message: "min. 10 Zeichen",
    reply: "<antwort innerhalb von 24h />",
    send: "Nachricht senden",
    sending: "sende…",
    sent: "gesendet — danke!",
    avail: ["Aktuell verfügbar für", "Side-Projects", "&", "Open-Source-Mitarbeit"],
    labels: { github: "GitHub", linkedin: "LinkedIn", email: "E-Mail" },
  },
  footer: { top: "↑ Top", proj: "Projekte", cont: "Kontakt", impr: "Impressum", priv: "Datenschutz" },
  meta: {
    title: "Eray Kaan Cevik — Developer",
    titleTemplate: "%s · Eray Kaan Cevik",
    description: "Portfolio von Eray Kaan Cevik — Lernender Informatiker EFZ bei Galaxus, Full Stack Developer und Creator von MudForge.",
    ogAlt: "Eray Kaan Cevik — Developer · .NET & Web",
  },
};
