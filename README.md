# Selene Tan · 谭涵梓

Personal portfolio for Selene Tan, an embedded software and firmware engineer. Built with Astro, Tailwind CSS, and DaisyUI.

[GitHub Pages address](https://selentan.github.io/im-watching-you/)

## Site sections

- **About Me** introduces my engineering background, education, and research experience. It also highlights four projects in STM32 and FreeRTOS firmware, visible-light positioning, PCB design, and vision-language model evaluation.
- **Research & Engineering** groups 17 projects by technical area and links to their details.
- **CV** brings together education, experience, project contributions, and technical skills.
- **Blog** contains technical writing and has an RSS feed.
- **Personal** contains stories and photo albums.

The site uses a profile sidebar on desktop and a single column on narrow screens. Light and dark themes follow the device preference.

## Run locally

Use Node.js 20 and pnpm 9 to match the GitHub Actions environment.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:4321](http://localhost:4321/). To build and preview the production site locally, run:

```bash
pnpm build
pnpm preview
```

## Edit the content

| Content | Location |
| --- | --- |
| Homepage copy and selected project order | [src/pages/index.astro](src/pages/index.astro) |
| Sidebar portrait and contact links | [src/components/SideBar.astro](src/components/SideBar.astro) |
| Education and experience shared by the homepage and CV | [src/components/CareerSections.astro](src/components/CareerSections.astro) |
| Project titles, descriptions, CV bullets, and detail pages | [src/content/projects/](src/content/projects/) |
| CV skills | [src/pages/cv.astro](src/pages/cv.astro) |
| Blog and Personal posts | [src/content/blog/](src/content/blog/) and [src/content/personal/](src/content/personal/) |

The homepage reads the selected projects by slug. Edit the project entries to update their titles or summaries across the site.

## GitHub Pages

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The [deployment workflow](.github/workflows/deploy.yml) runs on pushes to `main` and can also be triggered manually. It builds and publishes `dist/`.

The workflow sets `BASE_URL` to the repository path for a project site or `/` for a repository named `<owner>.github.io`. The site origin is configured in [astro.config.mjs](astro.config.mjs).

## Credits

- [Astro](https://astro.build/) for the static site framework
- [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for styling
- [Animal Crossing](https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/) by Nintendo and [animal-crossing-ui](https://github.com/guokaigdg/animal-crossing-ui) for visual inspiration
- [okpng](https://okpng.gumroad.com/) for the NookPhone icon assets
