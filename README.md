# jiyess.github.io

Personal academic website of Ye Ji (纪野) — <https://jiyess.github.io>.

Built with Jekyll on GitHub Pages, based on [academicpages](https://github.com/academicpages/academicpages.github.io)
(forked from the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, © Michael Rose, MIT License — see `LICENSE`).

## Local preview

```bash
./serve.sh        # then open http://localhost:4000 (live reload)
```

`serve.sh` uses Homebrew Ruby and `Gemfile.local` (modern Jekyll). GitHub Pages builds the live site
with its own pinned gem set; both render the same.

## Where things live

| What | File(s) |
|---|---|
| Homepage: bio, selected publications, news (EN + 中文) | `_pages/about.md` |
| Publications | `_pages/publications.md` |
| BibTeX download | `files/bib/ye-ji-publications.bib` |
| Talks (one file per talk) | `_talks/YYYY-MM-DD-<event>-<city>.md` |
| Talk photos | `images/talks/<same name as the talk file>/` |
| Slides / posters (PDF) | `files/pdf/slides/…` — **existing paths never change** (they are linked from elsewhere) |
| Talk map | generated automatically from `_talks/`; coordinates in `_data/locations.yml` |
| CV page / CV PDF | `_pages/cv.md` / `files/cv/Ye_Ji_CV.tex` → `files/pdf/Ye_Ji_CV.pdf` |
| Research, Software, Teaching | `_pages/research.md`, `_pages/software.md`, `_teaching/` |
| Site settings, sidebar profile | `_config.yml` |

The site is bilingual. Content is wrapped in `<div class="lang lang--en" markdown="1">…</div>` and
`<div class="lang lang--zh" markdown="1">…</div>` (or `<span class="lang lang--en">…</span>` pairs);
the 中文/EN toggle shows one of them.

## Conventions

- **Names:** lowercase, words separated by hyphens, no spaces: `2026-09-08-icsm-dortmund.md`,
  `photo-1.jpg`, `group-photo.jpg`. Images as `.jpg` (≈1600 px wide, < 500 KB), videos as `.mp4` (H.264).
- **Links inside pages** start with `/`: `/images/talks/…`, `/files/pdf/…` (never `../`).
- **Renaming a published page:** keep the old address working with `redirect_from:` in its front matter.
- **Talk front matter:**

  ```yaml
  ---
  title: "Talk title"
  collection: talks
  type: "Conference talk"   # Conference talk | Invited talk | Workshop talk | Poster presentation |
                            # Lightning talk & poster | Webinar | Forum talk | Short course | PhD defence
  permalink: /talks/2026-10-12-iga-tokyo
  venue: "Full event name (ACRONYM YEAR)"
  date: 2026-10-12          # the day of the talk
  location: "City, Country" # must match a key in _data/locations.yml, or "Online"
  ---
  ```

- **Talk body:** link lines (`[Slides](…)`, `[Photo 1](…)`, …), a short description, and a final line
  `Keywords: **Term One**, **Term Two**`.

## Checklists

**New talk**
1. Create `_talks/YYYY-MM-DD-<event>-<city>.md` (front matter above).
2. Slides → `files/pdf/slides/YYYY-MM-DD-<event>/`; photos → `images/talks/<talk name>/`
   (convert phone photos: `sips -s format jpeg -s formatOptions 80 -Z 1600 IMG.HEIC --out photo-1.jpg`).
3. New city? Add its coordinates to `_data/locations.yml`.
4. News item in `_pages/about.md` — **both** English and 中文, linking to `/talks/<talk name>`.
5. Optionally add it to the CV (`files/cv/Ye_Ji_CV.tex`, "Selected Talks").

**New paper**
1. `_pages/publications.md`: add the entry under its year (authors, **Ye Ji** in bold, title, ***journal***,
   volume(issue), pages/article number, `[[**Full Article**]](https://doi.org/…)`, abstract in `<details>`).
2. BibTeX: `curl -s "https://api.crossref.org/works/<DOI>/transform/application/x-bibtex"` and append
   to `files/bib/ye-ji-publications.bib` (tidy the key, e.g. `ji2026keyword`).
3. News item (EN + 中文); update the homepage "Selected Publications" if it is a key paper.
4. CV: add to `files/cv/Ye_Ji_CV.tex` and rebuild the PDF (below).

**CV PDF**
```bash
cd files/cv && pdflatex Ye_Ji_CV.tex && pdflatex Ye_Ji_CV.tex
cp Ye_Ji_CV.pdf ../pdf/Ye_Ji_CV.pdf && rm -f Ye_Ji_CV.{aux,log,out,pdf}
```

**Before pushing**
- Check the pages you touched in both languages at <http://localhost:4000>.
- Every new link should open (no 404s in the `./serve.sh` log).

## Search engines

The site is verified in Google Search Console via `google89dda7f3e748e9d9.html` (keep this file).
The sitemap (`/sitemap.xml`) is generated automatically.
