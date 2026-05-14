# HCC Website Maintenance Guide

This guide provides comprehensive instructions for maintaining and updating the Human-Centred Computing (HCC) research group website.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Adding Posts](#adding-posts)
5. [Managing Team Members](#managing-team-members)
6. [Working with Collections](#working-with-collections)
7. [Conference Map](#conference-map)
8. [Tags and YAML Front Matter](#tags-and-yaml-front-matter)
9. [Navigation Management](#navigation-management)
10. [Building and Deploying](#building-and-deploying)
11. [Common Tasks](#common-tasks)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a **Jekyll static site generator** website hosted on GitHub Pages. Jekyll converts markdown files and templates into a static HTML website.

**Key Technologies:**
- Jekyll 4.3.2 (static site generator)
- Liquid templating language
- YAML front matter for metadata
- GitHub Pages for hosting
- Leaflet.js for the conference map
- SCSS/CSS for styling

**Website Structure:**
- Main URL: `hccbu.github.io`
- The site is built from source files and generated into the `docs/` folder
- GitHub Pages serves files from the `docs/` directory


## Project Structure

```
hccbu.github.io/
├── _config.yml              # Main Jekyll configuration
├── _pages/                  # Top-level pages (About, Contact, etc.)
├── _posts/                  # Blog posts (auto-sorted by date)
├── _people/                 # Team member profiles
├── _labs/                   # Research lab descriptions
├── _culture/                # Culture/events posts
├── _projects/               # Project descriptions
├── _bibliography/           # Publication references (BibTeX files)
├── _includes/               # Reusable HTML components
│   ├── sidenav.html        # Navigation menu
│   ├── labs-page.html      # Labs rendering template
│   ├── conference-map.html # Map display
│   └── ...
├── _layouts/                # Page templates
│   ├── default.html        # Base layout
│   ├── page.html           # Standard page layout
│   ├── post.html           # Blog post layout
│   └── ...
├── public/
│   ├── css/hcc_bu.css      # Main stylesheet
│   ├── js/                 # JavaScript files
│   └── images/             # Images and assets
├── docs/                    # Generated output (do NOT edit manually)
└── index.html              # Homepage
```

---

## Adding Posts

Posts go in the `_posts/` directory and are automatically sorted by date (newest first).

### Post File Naming Convention
File names must follow: `YYYY-MM-DD-title.md`

Example: `2026-05-04-new-research.md`

### Creating a New Post

1. Create a new markdown file in `_posts/`:
```bash
touch _posts/2026-05-04-my-post-title.md
```

2. Add YAML front matter at the top:
```yaml
---
layout: post
title: "My Post Title"
date: 2026-05-04 10:00:00 +0000
categories: [research, lab]
---
```

3. Write your content in markdown below the `---`:
```markdown
# Main Heading

This is your post content. You can use **bold**, *italic*, [links](http://example.com), etc.

## Subheading

- Bullet points
- More points

1. Numbered lists
2. More items
```

4. Build the site:
```bash
bundle exec jekyll build
```

### Post Front Matter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `layout` | Yes | Use `post` for blog posts |
| `title` | Yes | Post title (in quotes) |
| `date` | Yes | Publication date and time |
| `categories` | No | Array of category tags |
| `author` | No | Post author name |

---

## Managing Team Members

Team members are stored in `_people/` and displayed on the `/team/` page.

### Adding a New Team Member

1. Create a new markdown file in `_people/`:
```bash
touch _people/YourName.md
```

2. Add the following front matter:
```yaml
---
layout: people
type: faculty        # Options: faculty, research-student, intern, etc
list: true          # Set to true to display on team page
order: 1            # Display order (lower numbers first)
---
```

3. Add member information in the file:
```markdown
# Bio/Profile Information

Write biographical information, research interests, contact details, etc.
```

### People Properties Explained

| Property | Options | Purpose |
|----------|---------|---------|
| `type` | `faculty`, `research-student`, `intern`, `visitor` | Determines which section person appears in |
| `list` | `true` or `false` | Controls visibility on team page |
| `order` | Number | Controls display order within section |

### Team Page Sections

The `/team/` page has three sections, automatically populated from the `type` field:
- **Faculty** (`type: faculty`)
- **Research Students** (`type: research-student`)
- **Interns** (`type: intern`)

Only people with `list: true` are displayed.

---

## Working with Collections

Collections are groups of related content. The site uses:

- `_people/` - Team member profiles
- `_labs/` - Research lab descriptions
- `_culture/` - Culture and events
- `_projects/` - Project descriptions
- `_posts/` - Blog posts and news

### Collection Configuration

Collections are defined in `_config.yml`:
```yaml
collections:
  people:
    output: true
  labs:
    output: true
  culture:
    output: true
  projects:
    output: false
```

- `output: true` means collection items get their own generated HTML pages
- `output: false` means items are only used for data/loops

### Adding to Collections

1. Create a markdown file in the collection folder
2. Add YAML front matter with metadata
3. Add content below the front matter
4. Rebuild the site

### Accessing Collections in Templates

Collections are accessible via Liquid templating:

```liquid
{% for person in site.people %}
  {{ person.title }}
  {{ person.content }}
{% endfor %}

{% assign faculty = site.people | where:"type","faculty" | where:"list",true %}
{% for member in faculty %}
  {{ member.title }}
{% endfor %}
```

---

## Conference Map

The conference map displays all past and upcoming conferences where the group has presented. Posts and culture items with the `conference_map` YAML field automatically appear on the map.

### Map Files

- **Display:** `_includes/conference-map.html`
- **JavaScript:** `public/js/conference-map.js`
- **Data:** Generated from posts and culture posts with `conference_map` YAML

### Map Configuration

The map uses:
- **Base Tiles:** CartoDB Positron (white background)
- **Marker Color:** Purple (#8A03CE)
- **Library:** Leaflet.js v1.9.4

### Adding a Conference to the Map

To add a conference to the map, add the `conference_map` YAML section to either a **culture post** (`_culture/`) or **publication post** (`_posts/`).

#### For Culture Posts (`_culture/filename.md`):

```yaml
---
layout: culture-post
title: VIS 2023 in Melbourne
date: 2023-10-22
image: conference-image.jpg

conference_map:
  location_id: melbourne-australia    # Unique identifier
  city: Melbourne                     # City name
  country: Australia                  # Country name
  lat: -37.8136                       # Latitude
  lng: 144.9631                       # Longitude
  conference: IEEE VIS 2023           # Conference name
  year: 2023                          # Conference year
  event_title: Melbourne 2023         # Optional: custom title
  image: conference-image.jpg         # Optional: thumbnail image
  publication_url: /publications/     # Optional: link to publications
  publication_label: Publications     # Optional: button text
  culture_label: Culture post         # Optional: button text for culture post
---
```

#### For Publication Posts (`_posts/YYYY-MM-DD-title.md`):

```yaml
---
layout: post
title: [Conference Paper at IEEE VIS 2023]
date: 2023-10-21
categories: news

conference_map:
  location_id: melbourne-australia    # Unique identifier
  city: Melbourne                     # City name
  country: Australia                  # Country name
  lat: -37.8136                       # Latitude
  lng: 144.9631                       # Longitude
  conference: IEEE VIS 2023           # Conference name
  year: 2023                          # Conference year
  event_title: Melbourne 2023         # Optional: custom title
  thumbnail: /assets/images/banner.png # Optional: image/thumbnail
  publication_url: /publications/     # Optional: custom publication link
  publication_label: Publications     # Optional: button text
---
```

### Required vs Optional Fields

| Field | Required | Purpose |
|-------|----------|---------|
| `location_id` | Yes | Unique identifier (lowercase, hyphens) |
| `city` | Yes | City name |
| `country` | Yes | Country name |
| `lat` | Yes | Latitude (-90 to 90) |
| `lng` | Yes | Longitude (-180 to 180) |
| `conference` | Yes | Conference name (displays on hover) |
| `year` | Yes | Conference year |
| `event_title` | No | Custom title (defaults to "City Year") |
| `image` / `thumbnail` | No | Image file path |
| `publication_url` | No | Custom URL to publications |
| `publication_label` | No | Custom label (defaults to "Publications") |
| `culture_label` | No | Custom label (defaults to "Culture post") |

### Finding Coordinates

Use Google Maps to find latitude/longitude:
1. Go to https://maps.google.com
2. Search for the conference city
3. Right-click on the location
4. Coordinates appear at the top (click to copy)
5. Format: `lat: 40.7128` and `lng: -74.0060`

### Map Display

On the `/conference-map/` page:
- **Purple pins** show conference locations
- **Clicking a pin** opens an info box with conference details
- **Culture Post link** appears if the post is in `_culture/`
- **Publications link** appears if `publication_url` is specified
- **Image** displays in the info box if specified

### Example: Adding IEEE VIS 2023

**Culture Post Example:**
```yaml
---
layout: culture-post
title: VIS 2023 in Melbourne
date: 2023-10-22
image: VIS23_banner.jpg

conference_map:
  location_id: melbourne-australia
  city: Melbourne
  country: Australia
  lat: -37.8136
  lng: 144.9631
  conference: IEEE VIS 2023
  year: 2023
---
```

**Publication Post Example:**
```yaml
---
layout: post
title: [Papers at IEEE VIS 2023]
date: 2023-10-21
categories: news

conference_map:
  location_id: melbourne-australia
  city: Melbourne
  country: Australia
  lat: -37.8136
  lng: 144.9631
  conference: IEEE VIS 2023
  year: 2023
  thumbnail: /assets/images/vis2023-banner.png
---
```

### Multiple Posts at Same Location

If multiple posts are about the same conference, they all appear on the same marker. The map automatically groups them by location and year.

---



### Common YAML Properties

```yaml
---
layout: post              # Template to use (post, page, etc.)
title: "Page Title"       # Page/post title
date: 2026-05-04         # Publication date
categories: [cat1, cat2]  # Content categories
author: Author Name       # Author name
type: faculty            # Custom type (people, labs, etc.)
list: true               # Visibility toggle
order: 1                 # Sorting order
menu: main               # Navigation menu placement
permalink: /custom-url/  # Custom URL
---
```

### Navigation Tags

| Property | Values | Purpose |
|----------|--------|---------|
| `menu` | `main`, `none` | Controls if page appears in navigation |
| `layout` | Various | Determines page template |
| `order` | Numbers | Controls display order in menus |

### Filtering Collections with YAML

All `.md` files can be filtered in Liquid templates:

```liquid
# Get all published faculty
{% assign faculty = site.people | where:"type","faculty" | where:"list",true | sort:"order" %}

# Get posts in category
{% assign research = site.posts | where:"categories","research" %}

# Get published projects
{% assign projects = site.projects | where:"published",true %}
```

---

## Navigation Management

Navigation is controlled through YAML front matter in `_pages/` files.

### Main Navigation

The main sidebar navigation shows pages with `menu: main` in their front matter.

**Example Page Configuration:**
```yaml
---
layout: page
title: "About"
menu: main        # Add to navigation
order: 1          # Display order (1 = first)
---
```

### Adding a Page to Navigation

1. Open the page's markdown file in `_pages/`
2. Set `menu: main` in front matter
3. Set `order` to control position
4. Rebuild the site

### Removing from Navigation

Change `menu: main` to `menu: none` to hide the page.

### Navigation Order

Pages are sorted by the `order` field (lowest first):
```yaml
order: 1   # First in nav
order: 2   # Second in nav
order: 3   # Third in nav
```

---


## Common Tasks

### Task: Add a New Blog Post

1. Create file: `_posts/2026-05-04-my-title.md`
2. Add front matter with `layout: post`
3. Write content in markdown
4. Rebuild: `bundle exec jekyll build`
5. Commit and push to GitHub

### Task: Update Team Page

1. Edit existing person: Edit their markdown file in `_people/`
2. Add new person: Create new file in `_people/` with `list: true`
3. Modify order: Change `order` field to reorder
4. Hide person: Set `list: false`
5. Rebuild and push

### Task: Add a Publication

Publications are in `_bibliography/` as BibTeX files:

1. Choose appropriate file:
   - `journals.bib` - Journal articles
   - `conferences.bib` - Conference papers
   - `books.bib` - Books
   - `chapters.bib` - Book chapters
   - `preprints.bib` - Preprints
   - `other.bib` - Other publications

2. Add BibTeX entry to file:
```bibtex
@article{key2026,
  author = {Author Name},
  title = {Article Title},
  journal = {Journal Name},
  year = {2026},
  volume = {10},
  pages = {1--10}
}
```

3. Rebuild to regenerate publication pages

### Task: Update the Conference Map

1. Open `_includes/conference-map.html`
2. Find the JSON data section
3. Add new conference to `events` array
4. Include: name, year, location, latitude, longitude
5. Rebuild and push

### Task: Modify Styling

CSS files are in `public/css/hcc_bu.css`:

1. Find the section for what you want to change
2. Modify CSS rules
3. Rebuild to see changes
4. Test on different screen sizes

### Task: Add a New Research Lab

1. Create file: `_labs/my-lab-name.md`
2. Add front matter with `layout: labs`
3. Add lab information and description
4. Include image reference (if needed)
5. Rebuild and push

---

