# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- JSON-LD `Person` structured data, canonical URL, Twitter Card tags, and
  `theme-color` meta tags for richer search and social sharing.
- Reading-progress bar in the header and `aria-current` on the active
  scrollspy nav link.
- Social links in the footer and apple-touch-icon / manifest favicon links.

### Changed

- Rewrote the About and hero copy to reflect current seniority (2+ years,
  working Data Engineer) and tightened wording throughout.
- Updated the hero typing animation to role-focused phrases
  (Data Engineer · Pipeline Builder · Analytics Engineer · Automation
  Enthusiast).
- Fixed broken `og:image` (pointed to a missing `examples/preview.JPG`).
- Corrected "Relevant Courseworks" to "Relevant Coursework".

### Removed

- `assets/css/style.css` — dead legacy stylesheet (not referenced by the
  current `index.html`).

## [2.0.0] - 2026-08-15

### Changed

- Modernized the UI: framework-free rewrite of `index.html` with a sticky glass
  navbar, modern hero section, timeline-based experience, and card-based
  projects, skills, education, and courses sections.
- Added dark/light theme support with persistence.
- Added scroll-reveal animations, scrollspy, mobile drawer navigation, and a
  back-to-top button.

### Added

- `assets/css/main.css` — new stylesheet with CSS design tokens and light/dark
  themes.
- `assets/js/main.js` — theme toggle, mobile navigation, scrollspy, scroll
  reveal, and back-to-top interactions.

## [1.0.0] - 2026-08-15

First released version of the portfolio (Materialize-based, before the UI
modernization).

### Added

- About, Experience, Projects, Skills, Education, Courses, and Contact sections.
- M MART Data Engineer experience entry (Dec 2025 – Present).
- Resume link, social links (GitHub, LinkedIn, email), and Google
  Analytics / Google Tag Manager integration.
- Typed.js hero animation.

[2.0.0]: https://github.com/qarisp/qarisp.github.io/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/qarisp/qarisp.github.io/releases/tag/v1.0.0
