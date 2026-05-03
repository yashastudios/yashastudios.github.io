# Yasha Studios Website Design Brief

## Purpose

The Yasha Studios website is intended to be the approachable front door for Yasha Studios projects.

Its main job is to make projects easier to understand, browse, and access than a raw GitHub profile or repository list. Visitors should be able to quickly understand what each project is, whether it is available, whether it can be downloaded, whether it must be built manually, and where to go next.

The site should feel professional, usable, respectful, and calm. It should not feel like a generic template, a cluttered personal homepage, a hacked-together WordPress theme, or a flashy startup landing page.

Core principle:

> Do not make the user fight the website.

## Overall Site Goals

The site should:

- Act as the main Yasha Studios portfolio and project access hub.
- Make GitHub-hosted projects easier and less intimidating to browse.
- Prioritize clarity, usability, responsiveness, and accessibility.
- Work cleanly on desktop, mobile, narrow screens, and unusual displays.
- Avoid scroll-triggered reveal animations or gimmicky motion.
- Use subtle personality without undermining polish.
- Allow future growth without overbuilding the first version.

The site should not:

- Require users to use “view desktop site” on mobile.
- Hide important content behind hover-only interactions.
- Use confusing navigation or visual clutter.
- Pretend to be a large corporation before it needs to.
- Rely on fake testimonials or credibility theater.

## Asset Foundation

The current asset structure is organized as follows:

```text
/assets/fonts/
- OFL.txt
- mona-sans.woff2
- mona-sans-italic.woff2
- mona-sans-mono.woff2

/assets/images/
- apple-touch.png
- favicon.ico
- favicon.png
- icon-192.png
- icon-512.png
- icon-512-maskable.png
- link-preview.png
- monogram.svg
- profile-picture.png
- wordmark.svg

/assets/lucide-icons/
- LICENSE
- arrow-up-right.svg
- book-open.svg
- calendar.svg
- check.svg
- chevron-down.svg
- chevron-left.svg
- chevron-right.svg
- chevron-up.svg
- circle-alert.svg
- circle-check.svg
- clock.svg
- code-xml.svg
- copy.svg
- download.svg
- external-link.svg
- file-code.svg
- folder.svg
- folder-open.svg
- gamepad-2.svg
- globe.svg
- info.svg
- link.svg
- mail.svg
- menu.svg
- moon.svg
- palette.svg
- search.svg
- settings.svg
- sparkles.svg
- sun.svg
- terminal.svg
- triangle-alert.svg
- wrench.svg
- x.svg

/assets/social-icons/
- bluesky.svg
- discord.svg
- facebook.svg
- github.svg
- instagram.svg
- itchio.svg
- kofi.svg
- linkedin.svg
- mastodon.svg
- openai.svg
- patreon.svg
- reddit.svg
- threads.svg
- tiktok.svg
- twitch.svg
- x-twitter.svg
- youtube.svg
```

Brand asset notes:

- `wordmark.svg` and `monogram.svg` use root-level `fill="currentColor"`.
- `wordmark.svg` also uses `fill-rule="evenodd"`.
- The wordmark should be used for major branding moments such as the hero.
- The monogram should be used for compact branding such as favicons, app icons, profile images, and the footer.
- CSS masking or current-color SVG handling can support future seasonal recolors without directly editing the SVG files.

Font plan:

- Mona Sans is the main site font.
- Mona Sans Italic is used for italic text.
- Mona Sans Mono is used for code blocks and project card text.
- `OFL.txt` remains in `/assets/fonts/`.

Icon plan:

- Lucide icons are used as the site’s UI icon set.
- Lucide filenames should be preserved.
- `/assets/lucide-icons/x.svg` is reserved for close/dismiss UI.
- `/assets/social-icons/x-twitter.svg` is the social X/Twitter icon.
- Lucide icons should support meaning, not replace important text.

## Navigation

The main navigation should initially contain only:

- Projects
- Resources
- About

Tutorials will live inside their relevant project areas or below the project entries on the Projects page.

Contact information will live on the About page.

GitHub and social links will live primarily in the footer/social area, with possible featured links near the hero for GitHub, Ko-fi, and itch.io if appropriate.

### Desktop Navigation

Desktop navigation should use a pull-tab design inspired by real-life file folder tabs.

The navigation system should include:

- A full-width top strip or bar.
- Tabs that hang downward from that strip.
- Equal-width tabs regardless of label length.
- Even spacing between tabs.
- Rounded visible corners on the tab shapes.
- A subtle drop shadow beneath the navigation system.
- A slightly stronger shadow or visual emphasis under the active tab.

Tab behavior:

- Default tabs hang down slightly.
- Hovered tabs pull downward a little more.
- Keyboard-focused tabs should receive an equivalent treatment to hovered tabs.
- The active/current page tab stays pulled down farther than hover/focus states.

Important layout requirement:

The navigation/header area must reserve enough vertical space for the default, hover/focus, and active pulled-down tab states. The hero section must not jump, shift, or get pushed down when a tab moves.

### Mobile Navigation

On mobile and narrow screens, the pull-tab metaphor should not be forced if it becomes cramped.

Mobile navigation should use standard, clear, text-based links with comfortable touch targets and obvious active-page styling.

Usability takes priority over preserving the desktop tab effect.

## Homepage Composition

The homepage structure is locked as:

1. Pull-tab-based navigation bar
2. Hero landing section
3. Project cards
4. Footer/social area
5. Copyright/legal area

The homepage should be calm and orienting. It should not include scroll-triggered reveal animations, fake testimonials, unnecessary marketing sections, or extra clutter.

The homepage’s job is:

> Here is Yasha Studios. Here are the main things. Pick one.

## Hero Section

The hero section should be reserved and simple.

It should run from the bottom of the tab navigation area to the bottom of the initial viewport.

Hero contents:

- Yasha Studios wordmark
- Tagline
- Optional one-line announcement
- Continue/jump button to the next section

Locked tagline:

> A portfolio for apps, tools, games, stories, and other suspiciously useful things that fill niches you didn't know existed.

The hero should not include a supporting paragraph unless a later design pass proves one is needed. The tagline is currently considered sufficient.

The optional announcement should be a restrained one-liner below the tagline. It should be removable without making the hero feel empty.

The Continue button should let users jump directly to the project card section without manually scrolling.

## Project Cards on the Homepage

The homepage project card section should be curated rather than exhaustive.

Initial likely projects:

1. YASHA / Yasha Studios
2. YashaGet

YASHA should likely take precedence because it is the namesake and umbrella context for the site.

### Layout

The homepage project cards should use a two-column layout on wider screens to avoid clutter.

On narrower screens, the cards should collapse cleanly to a single column.

Cards should be uniform:

- Same width
- Same height
- Same internal layout
- Same placement of repeated elements

The section does not need a heading or byline if the surrounding page context is clear.

### Card Visual Style

Project cards should:

- Have rounded corners.
- Echo the rounded visual language of the pull-tab navigation.
- Use subtle elevation or drop shadow in light mode.
- Use tonal contrast, border treatment, and restrained elevation in dark mode.
- Feel consistent with the rest of the site’s design language.

### Card Typography

Project card text should use Mona Sans Mono rather than the standard Mona Sans used elsewhere on the site.

This gives the cards a technical, project/spec-label feeling while preserving a cleaner general typography system elsewhere.

### Card Content Model

Each card should support:

- Relevant Lucide icon
- Quiet category/type label
- Project name
- Project tagline
- Project status
- Latest release, where relevant
- Short description, if needed
- View Project link
- Download link, if available
- View Repo link

The category should not be icon-only. Use the icon as the visual cue, but include a quiet text label for clarity and accessibility.

Likely status labels include:

- In Development
- Released / Available
- Prototype
- Hiatus
- Archived

Download links should only appear when a download is actually available.

“Latest release” is preferred over a generic “last updated” field when versioned releases exist.

Future modular enhancements may include GitHub metadata such as stars, forks, latest commit, language, or license, but the first pass should remain human-focused rather than metadata-heavy.

## Projects Page

The Projects page should act as the deeper project hub.

It should contain website-ified README-style information for each project, making the project easier to understand than a raw GitHub repo.

### Projects Page Layout

On wider screens, use a two-column alternating layout.

Example pattern:

Row 1:

- Left column: detailed project card
- Right column: About this project

Purple-accent divider

Row 2:

- Left column: About this project
- Right column: detailed project card

Purple-accent divider

Row 3:

- Left column: detailed project card
- Right column: About this project

And so on.

This creates rhythm without becoming flashy or confusing.

On mobile, do not preserve the alternating left/right structure if it harms reading order. Each project should collapse into a consistent order, likely:

1. Detailed project card
2. About this project

### Project Detail Content

Project sections may eventually include:

- Overview
- Current status
- Download/use instructions
- Build instructions, if relevant
- Repository link
- Screenshots, if relevant
- Tutorials/resources
- Known limitations
- License information

Tutorials written by the user should live below the project entries on the Projects page.

## Resources Page

The Resources page should collect external or reference resources used by Yasha Studios.

Examples include:

- Tools
- Spritesheets
- Tutorials
- Documentation
- References
- Useful software
- ROM hacking resources
- Asset resources

The Resources page should be organized like a useful shelf, not a junk drawer.

## About Page

The About page should contain:

- Information about the user/creator
- Information about Yasha Studios
- Contact links
- Relevant social/support links
- Any broader context that does not belong on the homepage

Contact should live here rather than being a separate top-level navigation item for the first version.

## Footer and Social Area

The footer/social area should be clean, compact, and visually connected to the rest of the site.

### Footer Shape

The footer/social navbar should sit inside its own floating card-like panel.

The panel should:

- Float like the project cards.
- Have a flat top edge.
- Have sharp/square top corners.
- Retain rounded bottom corners.
- Feel distinct from fully rounded project cards while still belonging to the same rounded/elevated design system.

It should not rise from or attach to the bottom of the page like a grounded slab.

### Footer Contents

The footer/social panel should include:

- Monogram on the left
- Comfortable spacing
- Social media icons as icons only

The social icons should not have visible text labels next to them, but they should still have accessible labels in implementation.

Social icons should generally be alphabetized by platform name unless there is a specific reason to feature one elsewhere.

Spacing:

- Icons are expected to be around 32×32px.
- 16px spacing between icons is likely sufficient.
- 24px spacing may be used if 16px feels cramped.

GitHub, Ko-fi, and possibly itch.io may also be featured closer to the top of the page or near the hero because they are more action-oriented than ordinary social links.

Repeating the main nav links in the footer is optional and not strongly desired if a Return to top control is present.

Legal/copyright content should sit at the bottom and can be refined later.

## Return to Top

Every page should include a Return to top link or button near the bottom.

It should be:

- Easy to find
- Keyboard-accessible
- Touch-friendly
- Clearly labeled
- Present on long pages such as Projects and Resources

A footer-level Return to top control is preferred over an intrusive floating bubble unless later testing shows a floating control would be beneficial.

## Visual Style

The site should feel like a polished indie workshop:

- Professional
- Clean
- Usable
- Slightly playful
- Not corporate
- Not chaotic
- Not template-generic

### Color Direction

The base should be neutral and professional.

The main accent color is locked as:

```text
Royal Purple: #7851A9
```

The accent should be used selectively for:

- Active navigation
- Primary actions
- Focus states
- Continue button
- Small highlights
- Purple-accent dividers
- Possibly status or card accents where appropriate

The accent should not be overused. Avoid turning the site into “grape soup.”

### Light and Dark Mode

Light mode and dark mode should be designed as related but distinct themes.

Light mode should likely use:

- Neutral/off-white or soft gray background
- Charcoal text
- Subtle borders
- Soft card shadows
- Royal purple accents

Dark mode should likely use:

- Deep charcoal/slate background
- Slightly lifted card surfaces
- Pale text
- Subtle borders
- Tonal separation instead of heavy shadows
- Royal purple accents adjusted only if needed for contrast

The theme toggle should be easy to find, likely in the header/nav area.

The site should respect system theme preference by default while allowing user override.

## Motion and Interaction

The site should avoid scroll-triggered “elements load in as you scroll” animations.

Motion, if used, should be restrained and purposeful.

Acceptable motion examples:

- Pull-tab hover/focus movement
- Button hover/focus response
- Subtle card hover/focus treatment
- Theme toggle feedback

Motion should not be required to understand or navigate the site.

Reduced-motion preferences should be respected.

## Accessibility and Usability Requirements

Accessibility should be baked into the design from the start.

Design and implementation should account for:

- Keyboard navigation
- Visible focus states
- Strong color contrast in light and dark modes
- Reduced-motion support
- Readable typography
- Comfortable line height and spacing
- Adequate touch targets
- Semantic structure
- Useful alt text where relevant
- Decorative images/icons handled appropriately
- No color-only meaning
- Skip link
- Responsive reflow without horizontal scrolling
- Usable mobile navigation
- Buttons and links that are visually and behaviorally clear

Important specific rules:

- Project card actions must be visible without hover.
- Hover behavior must not be the only way to access content.
- Icon-only controls must still have accessible labels.
- Status badges must use text, not just color.
- The site should remain usable on unusual or narrow displays.

## Component Direction

Buttons:

- Clean, readable, and rounded.
- “View Project” is usually the primary project-card action.
- “Download” appears only where available.
- “View Repo” can be visually quieter than View Project.
- Buttons should have obvious hover, focus, and active states.

Links:

- Should be visually clear.
- Should not rely only on color.
- Important outbound links may use Lucide icons such as external-link or arrow-up-right.

Status badges:

- Quiet, readable labels.
- Text first, color second.
- Should not look like warning stickers unless the status actually requires warning.

Lucide icons:

- Used for UI and project signals.
- Should clarify actions or categories.
- Should not replace important text unless an accessible label exists.

Continue and Return to top:

- Should feel related as page movement controls.
- Continue moves from hero to projects.
- Return to top moves from footer/bottom back to the top.

## Future Ideas

Potential future additions include:

- Custom 404/error pages
- Small Easter eggs or fake quote jokes in non-critical places
- A Jessica Totallyreal quote on a 404 page or subtle footer/easter egg location
- Modular project card system that could become its own reusable project
- GitHub stats or live metadata on cards
- More detailed project categories
- More polished release/download flows
- Seasonal brand treatments through SVG recoloring or CSS masking

Fake testimonials should not be used as credibility-building content.

They may be used only as intentional jokes or Easter eggs in appropriate places.

## Final Working Summary

Yasha Studios should be a calm, responsive, professional, slightly cheeky project hub.

It should make projects easier to access than GitHub alone, while still linking clearly to repositories, downloads, tutorials, and resources.

The first version should remain focused:

- Home
- Projects
- Resources
- About

The design should prioritize usability over spectacle, clarity over cleverness, and consistency over feature creep.

> Nancy Actualuser endorses this design brief.
