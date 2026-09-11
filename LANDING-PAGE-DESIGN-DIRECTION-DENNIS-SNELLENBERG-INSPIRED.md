# LANDING PAGE DESIGN DIRECTION
## Dennis Snellenberg inspired personal portfolio

**Document type:** Visual design specification + interaction specification + AI implementation brief  
**Primary use:** Give this file to ChatGPT, Codex, Claude Code, Cursor, Windsurf, or another coding/design AI before it changes the landing page  
**Reference direction:** Dennis Snellenberg portfolio, interpreted rather than copied  
**Target site:** Personal portfolio with three main identities: Technical Projects, Resume, Photography  
**Status:** Design direction for review before implementation  
**Version:** 1.0  
**Date:** 2026-09-11

---

# 1. PURPOSE OF THIS DOCUMENT

This document defines the landing page in enough detail that another AI or developer can implement the same design direction without needing the original conversation.

The goal is to create a personal portfolio landing page influenced by the design principles visible in Dennis Snellenberg's portfolio:

- oversized typography
- a strong human portrait
- minimal navigation
- neutral colours
- large areas of negative space
- deliberate asymmetry
- smooth motion
- cursor interaction
- restrained micro-interactions
- clear project presentation
- strong transition from personal identity into work
- a premium editorial feel rather than a conventional dashboard or template

The finished site must **not** be a direct visual clone of Dennis Snellenberg's website.

Do not copy:

- Dennis Snellenberg's branding
- his wording
- his photographs
- his exact layout
- his animation sequences frame for frame
- his icons
- his exact colour values
- his project cards
- his loading sequence
- his source code

Instead, extract the underlying design principles and apply them to this portfolio.

---

# 2. CORE PROJECT IDEA

The owner has three major areas that the landing page should communicate immediately:

1. **Technical Projects**
2. **Resume**
3. **Photography**

The person is the connection between all three.

The landing page therefore uses the person as the visual centre of the first screen.

The core concept is:

```text
                         TECHNICAL PROJECTS
                                ↑

                           [ PORTRAIT ]

                PHOTOGRAPHY          RESUME
```

Do not interpret this as a literal diagram with arrows.

The actual design should feel editorial and spatial.

The three areas should appear around or near the portrait in a way that encourages exploration.

The user should understand within approximately five seconds:

> This is one person with technical, professional and photographic work.

---

# 3. DESIGN OBJECTIVE

The landing page should feel:

- personal
- modern
- technical
- editorial
- minimal
- confident
- interactive
- highly considered

It should **not** feel:

- like a SaaS template
- like a generic React portfolio
- like a dashboard
- like a CV pasted into a webpage
- like a gaming website
- like an AI-generated component collection
- overloaded with gradients
- overloaded with glassmorphism
- overloaded with rounded cards
- overloaded with animation
- overly corporate
- overly futuristic

The site should communicate craft through restraint.

A visitor should notice the typography, portrait, spacing and motion before noticing UI decoration.

---

# 4. REFERENCE INTERPRETATION

## 4.1 What to learn from Dennis Snellenberg

The reference portfolio uses several patterns that are relevant to this project.

### Human identity first

The opening experience establishes the creator before presenting projects.

The portrait is part of the design system rather than a small profile image.

### Oversized typography

Large typography creates the visual structure of the screen.

Text may become a graphical object rather than only content.

### Small utility typography

Large display text is paired with small labels, navigation items and metadata.

This creates scale contrast.

### Neutral colour system

The interface relies heavily on grey, off-white, black and photographic content.

Colour is used deliberately rather than everywhere.

### Motion as feedback

Animation is attached to user behaviour:

- hover
- cursor movement
- scrolling
- navigation
- project selection

Animation should rarely exist only for decoration.

### Spatial layout

Content does not always follow a centred Bootstrap-like column.

Text and images can occupy different parts of the viewport while remaining balanced.

### Project imagery gets room

Project media is allowed to become large.

The interface does not surround every project with borders, shadows and cards.

### Strong transitions

Moving between sections and pages feels connected.

The user should feel that the website is one continuous system.

---

# 5. ADAPTATION FOR THIS PORTFOLIO

The final design should combine:

| Reference principle | Portfolio adaptation |
|---|---|
| Large personal portrait | Central portrait on the opening screen |
| Oversized name | Large moving or slowly translating name layer |
| Minimal navigation | Small top navigation plus three primary landing routes |
| Neutral palette | Warm off-white, charcoal, muted grey and one optional accent |
| Interaction-heavy portfolio | Cursor and hover behaviour tied to Technical, Resume and Photography |
| Recent work showcase | Selected technical projects and photography previews |
| Strong footer CTA | Simple contact / connect closing section |
| Editorial spacing | Large section padding and fewer visual containers |
| Smooth motion | Scroll reveal, image movement, text masks and page transitions |

---

# 6. LANDING PAGE INFORMATION ARCHITECTURE

Recommended page structure:

```text
01  Global Header
02  Hero / Identity
03  Short Introduction
04  Selected Technical Projects
05  Photography Preview
06  Resume / Experience Preview
07  About / Working Identity
08  Contact CTA
09  Footer
```

The first screen should act as a gateway.

The remaining page should prove the claims made in the first screen.

Do not put every piece of information into the hero.

---

# 7. GLOBAL VISUAL SYSTEM

## 7.1 Base palette

Use a neutral palette.

Suggested starting tokens:

```css
--color-bg: #E9E8E3;
--color-bg-soft: #F3F2EE;
--color-text: #171717;
--color-text-muted: #6C6C67;
--color-line: rgba(23, 23, 23, 0.16);
--color-dark: #1C1C1C;
--color-light: #F5F4EF;
--color-accent: #5058E8;
```

These are starting values, not mandatory final values.

### Colour rule

At least 80 percent of the interface should remain neutral.

The accent colour should appear in a small number of interactive moments:

- active navigation
- one CTA
- cursor state
- project hover indicator
- focus state

Do not use multiple competing accent colours.

Photography itself may provide colour.

---

# 8. TYPOGRAPHY

## 8.1 Design principle

Typography should provide much of the visual character.

Use:

- large sans-serif display type
- clean grotesk body type
- tight display tracking
- generous line height for paragraphs
- small uppercase metadata only when it has a purpose

Avoid using five or six different font styles.

## 8.2 Font direction

The reference has been catalogued using **PP Neue Montreal**.

That is a commercial font. Do not assume a licence exists.

If a licence exists, it can be considered.

Otherwise use an appropriately licensed alternative such as:

- Geist
- Inter
- Manrope
- DM Sans
- General Sans if its licence and hosting requirements fit the project
- another neutral grotesk already used by the site

The implementation should focus on scale and spacing rather than trying to imitate a specific font illegally.

## 8.3 Type scale

Suggested desktop scale:

```css
--text-xs: clamp(0.72rem, 0.65rem + 0.15vw, 0.84rem);
--text-sm: clamp(0.86rem, 0.78rem + 0.20vw, 1rem);
--text-body: clamp(1rem, 0.92rem + 0.25vw, 1.18rem);
--text-lead: clamp(1.35rem, 1.05rem + 1vw, 2.1rem);
--text-h3: clamp(2rem, 1.3rem + 2vw, 3.4rem);
--text-h2: clamp(3rem, 1.8rem + 4vw, 6.6rem);
--text-display: clamp(5rem, 2rem + 11vw, 13rem);
```

### Display text

Display text may use:

```css
font-weight: 400;
line-height: 0.82 to 0.92;
letter-spacing: -0.04em to -0.065em;
```

### Body text

Body text should generally use:

```css
font-weight: 400;
line-height: 1.45 to 1.65;
letter-spacing: -0.01em to 0;
```

Do not make every heading bold.

Scale should do most of the work.

---

# 9. GRID SYSTEM

## 9.1 Desktop

Use a 12-column grid.

Recommended:

```text
Viewport: 1440 px reference
Outer padding: 32 to 48 px
Columns: 12
Column gap: 16 to 24 px
Content max width: approximately 1600 to 1800 px
```

Very wide screens should increase outside margins rather than infinitely stretching text.

## 9.2 Laptop

```text
Viewport: 1024 to 1439 px
Outer padding: 24 to 32 px
Columns: 12
Gap: 16 to 20 px
```

## 9.3 Tablet

```text
Viewport: 768 to 1023 px
Outer padding: 20 to 28 px
Columns: 8
Gap: 16 px
```

## 9.4 Mobile

```text
Viewport: below 768 px
Outer padding: 16 to 20 px
Columns: 4
Gap: 12 to 16 px
```

---

# 10. SPACING SYSTEM

Use a consistent spacing scale.

Suggested:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
--space-11: 160px;
--space-12: 224px;
```

Desktop section spacing should often sit between 128 and 224 px.

Mobile section spacing should often sit between 80 and 128 px.

Do not reduce all blank space because it looks "empty".

Negative space is part of the design.

---

# 11. GLOBAL HEADER

## 11.1 Desktop layout

The header should sit above the hero rather than look like a separate navbar component.

Recommended arrangement:

```text
[ MARK LEE / © YEAR ]                     [ WORK  ABOUT  CONTACT ]
```

Alternative:

```text
[ MARK LEE ]
Personal portfolio                 [ PROJECTS  RESUME  PHOTOGRAPHY ]
```

Height:

```text
72 to 96 px
```

Horizontal padding should align with the main page grid.

## 11.2 Header treatment

Use:

- transparent background at hero start
- near-black text on light backgrounds
- no large navigation container
- no full-width visible border unless the design needs it
- no pill around every navigation item

Navigation links can have a small moving dot, underline or text displacement on hover.

## 11.3 Sticky behaviour

Recommended:

- hero starts with normal header
- after scrolling 70 to 100 px, the navigation may collapse into a small floating menu control
- alternatively retain a lightweight sticky top bar

Do not make the sticky behaviour distract from project media.

## 11.4 Mobile header

Use:

```text
[ MARK LEE ]                         [ MENU ]
```

A menu press opens a full or near-full-screen overlay.

The overlay can use very large links:

```text
Technical
Resume
Photography
About
Contact
```

Add smaller metadata near the bottom:

```text
Adelaide, Australia
LinkedIn
GitHub
Instagram
```

---

# 12. HERO SECTION

This is the most important section.

## 12.1 Hero goals

The hero must answer:

1. Who is this person?
2. What kinds of work do they do?
3. Where should I go next?
4. Why does this portfolio feel different from a standard CV website?

## 12.2 Height

Desktop:

```css
min-height: 100svh;
```

Preferred content height:

```text
900 to 1100 px on large desktop
```

Do not force a 16:9 poster layout.

The hero should respond to viewport height.

## 12.3 Layer order

Recommended visual layers:

```text
Layer 1: neutral page background
Layer 2: oversized moving name typography
Layer 3: supporting labels / metadata
Layer 4: central portrait
Layer 5: primary route labels
Layer 6: cursor interaction / hover indicator
```

The portrait may overlap the name.

Part of the display name can appear behind the portrait.

This produces depth without requiring 3D.

---

# 13. HERO PORTRAIT

## 13.1 Portrait composition

Use a professional portrait with:

- strong silhouette
- uncluttered background or isolated subject
- neutral clothing where possible
- enough resolution for large desktop use
- body or half-body crop rather than only a headshot

Suggested desktop visual width:

```text
30vw to 42vw
```

Suggested maximum:

```text
560 to 700 px
```

Height:

```text
60svh to 76svh
```

The exact crop depends on the source image.

## 13.2 Image treatment

Default state:

- natural colour or controlled desaturation
- no obvious drop shadow
- no thick border
- no card container

Optional treatments:

- subtle grain
- slight contrast adjustment
- very light background masking
- clipping path only if visually clean

Do not add neon glows around the person.

## 13.3 Depth

A strong treatment:

```text
background
    ↓
large MARK LEE typography
    ↓
portrait
    ↓
one foreground word or navigation element
```

This should be achieved with ordinary CSS stacking where possible.

Avoid 3D libraries for this effect.

---

# 14. OVERSIZED NAME LAYER

## 14.1 Purpose

The name becomes part of the composition.

Possible display:

```text
MARK LEE
```

or

```text
MARK
LEE
```

or a continuous horizontal line:

```text
MARK LEE     MARK LEE     MARK LEE
```

## 14.2 Motion

Recommended motion:

- very slow horizontal translation
- 30 to 60 seconds per full cycle
- linear
- seamless loop
- stops or slows for reduced-motion users

Do not create a fast marquee.

The visitor should initially perceive typography, not movement.

## 14.3 Z-index relationship

Try:

```text
MARK [portrait] LEE
```

with part of the letters obscured by the portrait.

The name must still remain recognisable.

---

# 15. HERO SUPPORTING COPY

Add one short role statement.

Examples of structure, not final copy:

```text
Data, technology and visual work
built from Adelaide.
```

or

```text
Data analyst.
Technical builder.
Photographer.
```

Keep it short.

Recommended location:

- right side of portrait
- lower right quarter
- aligned to 2 or 3 grid columns

Maximum width:

```text
260 to 360 px
```

Avoid a long biography in the hero.

---

# 16. HERO LOCATION / METADATA

A small secondary element may sit to the left:

```text
BASED IN
ADELAIDE, AUSTRALIA
```

or:

```text
ADELAIDE
SOUTH AUSTRALIA
```

Optional small globe, dot or time indicator.

This should remain secondary.

No large location card.

---

# 17. THREE PRIMARY DESTINATIONS

The hero has three important routes:

- Technical Projects
- Resume
- Photography

These must feel integrated with the composition.

## 17.1 Desktop position concept

Recommended spatial placement:

```text
                     TECHNICAL PROJECTS
                            01

                         [portrait]

       PHOTOGRAPHY                         RESUME
            03                               02
```

Exact placement should adjust according to portrait crop.

## 17.2 Link styling

Each primary route should contain:

```text
01
Technical Projects
↗ or →
```

Use small numeric metadata if it helps.

Do not place each one inside a large rounded card.

Preferred appearance:

- plain text
- subtle line
- small circular arrow
- or minimal pill only for the arrow control

## 17.3 Hover state

When cursor enters a route:

### Technical Projects

Possible response:

- small grid / data texture fades into background
- portrait shifts by 4 to 8 px
- route text expands slightly
- a project thumbnail follows cursor or appears nearby
- cursor changes to "View"

### Resume

Possible response:

- background remains neutral
- role and experience metadata briefly appears
- subtle vertical timeline line appears
- cursor changes to "View CV"

### Photography

Possible response:

- a full-bleed photograph fades into a masked background region
- neutral interface text changes to light if necessary
- cursor changes to "View work"

All three interactions should follow the same underlying system.

Do not create three unrelated effects.

---

# 18. CUSTOM CURSOR

Desktop only.

## 18.1 Default

Do not replace the operating system cursor everywhere unless the interaction quality is high.

Preferred approach:

- keep native cursor normally
- add a secondary visual cursor only on interactive media

Example:

```text
normal area: native cursor
project image: circular "VIEW"
photography image: circular "OPEN"
drag area: circular "DRAG"
```

## 18.2 Cursor bubble

Suggested size:

```text
72 to 104 px
```

Properties:

```text
border-radius: 50%;
display: grid;
place-items: center;
pointer-events: none;
```

Animation:

```text
enter: 260 to 380 ms
exit: 180 to 260 ms
follow smoothing: moderate
```

Cursor should lag slightly, not float seconds behind the pointer.

## 18.3 Mobile

Disable all custom cursor logic.

---

# 19. MAGNETIC INTERACTION

Use sparingly.

Suitable targets:

- CTA circular button
- menu control
- small arrow buttons

Movement limit:

```text
4 to 12 px
```

The child text or icon may move slightly less than the parent.

Do not apply magnetic movement to all navigation links.

---

# 20. SHORT INTRODUCTION SECTION

After the hero, transition into a concise statement.

Layout concept:

```text
[ small label ]

I work across data, technology
and photography, combining
analysis with visual thinking.

                         [ ABOUT → ]
```

Use large lead text rather than a standard centred paragraph.

Desktop width:

```text
7 to 9 columns
```

Body may be:

```text
48 to 72 px equivalent responsive display size
```

Break lines deliberately.

Avoid a generic "Hello, my name is..." section.

---

# 21. SELECTED TECHNICAL PROJECTS

This section demonstrates technical ability.

## 21.1 Header

Structure:

```text
SELECTED WORK                                      01 / TECH

Technical Projects
```

Optional count:

```text
(04)
```

## 21.2 Project presentation

Avoid generic boxed cards.

Preferred patterns:

### Pattern A: Large alternating media

```text
PROJECT A
[ large media 70% width ]

                        PROJECT B
                        [ large media ]
```

### Pattern B: Two-column editorial grid

```text
[ PROJECT A LARGE ]    [ PROJECT B SMALL ]
                       [ PROJECT C SMALL ]

[ PROJECT D WIDE ]
```

### Pattern C: Image-led list

```text
Project name           Category            Year
------------------------------------------------
Pulse of Adelaide      Data Visualisation  2026
Formula Daily          Interactive Game    2026
ASCEND                  Browser Game        2026
...
```

On hover, a project preview appears or follows the cursor.

For this portfolio, a combination of **large featured media + compact project list** is recommended.

---

# 22. PROJECT ITEM ANATOMY

Each project needs only enough information to invite a click.

Example:

```text
PULSE OF ADELAIDE

Interactive data visualisation

Data / Maps / Astro
2026
```

Project image below or beside it.

Avoid:

- long project descriptions on landing page
- technology badge clouds
- progress bars
- skill percentages
- GitHub icon overload

Technical details belong on the project page.

---

# 23. PROJECT IMAGE HOVER

On desktop:

```text
scale 1.000 → 1.025
duration 600 to 900 ms
ease: smooth out
```

Media container stays fixed.

Image scales inside.

Optional overlay:

```text
VIEW PROJECT
```

Use a circular cursor indicator rather than a permanent button over every image.

---

# 24. PHOTOGRAPHY PREVIEW SECTION

Photography should introduce a different emotional rhythm while still belonging to the same site.

## 24.1 Transition

A good transition:

```text
neutral background
      ↓
large "PHOTOGRAPHY"
      ↓
photo crosses viewport
      ↓
section becomes darker or image-led
```

Do not suddenly switch to a completely unrelated photography template.

## 24.2 Layout

Recommended:

```text
PHOTOGRAPHY              SELECTED IMAGES / 2026

          [ landscape image ]

[ portrait image ]                    [ portrait image ]

                  [ wide image ]
```

Different image sizes create an editorial contact-sheet rhythm.

## 24.3 Image treatment

No heavy card chrome.

Possible:

- square edges
- 2 to 8 px radius maximum if used globally
- captions beneath images
- generous spacing

## 24.4 Hover

Desktop:

- image scales slightly
- caption or category appears
- cursor says "VIEW"
- optional next image preview

---

# 25. RESUME PREVIEW

Do not embed the entire resume on the landing page.

Show enough to establish professional experience.

## 25.1 Suggested structure

```text
RESUME / EXPERIENCE

Current
Company / role / location                       2026

Previous role                                  2024
Previous role                                  2021

                             VIEW FULL RESUME →
```

## 25.2 Styling

Use large horizontal rows.

Each row:

```text
Role                  Organisation        Period
```

Use thin separators.

Hover can slightly indent the role title or reveal location / summary.

This section should feel like editorial information, not a table inside a dashboard.

---

# 26. ABOUT SECTION

The About section explains the connection between the three disciplines.

Layout:

```text
[ small label: ABOUT ]

                          [ portrait detail or secondary image ]

Large statement over
5 to 7 columns.

                        Smaller supporting
                        paragraph over 3 columns.
```

Topics to communicate:

- analytical work
- interest in technology
- building interactive projects
- photography
- Adelaide base
- curiosity and practical experimentation

Keep the biography human and concise.

Do not repeat the resume.

---

# 27. FINAL CONTACT CTA

The ending should feel substantial.

Dennis Snellenberg's portfolio uses a strong direct contact close.

Adapt that principle.

## 27.1 Recommended visual

Dark section:

```text
-------------------------------------------------

Have something
interesting to discuss?        [ portrait circle ]

LET'S TALK                       [ → ]

-------------------------------------------------
Email
LinkedIn
GitHub
Instagram

Adelaide, Australia
```

Alternative copy can be more restrained:

```text
Want to get in touch?

CONTACT
```

## 27.2 CTA interaction

Use one larger circular or pill interaction here.

This is one of the few places where a strong accent colour can appear.

Magnetic movement is acceptable.

---

# 28. FOOTER

Keep the footer compact.

Recommended fields:

```text
© 2026
Mark Lee

Local time
Adelaide

Social
LinkedIn
GitHub
Instagram

Back to top
```

Avoid a large sitemap unless the project later becomes much bigger.

---

# 29. MOTION SYSTEM

Motion should use a shared system.

## 29.1 Motion categories

### A. Immediate interaction

For hover and pointer response.

Duration:

```text
120 to 320 ms
```

### B. Interface transition

For menu, overlay, cursor and state changes.

Duration:

```text
300 to 600 ms
```

### C. Scroll reveal

Duration:

```text
600 to 1000 ms
```

### D. Page transition

Duration:

```text
600 to 1100 ms total
```

### E. Ambient motion

Marquee, slow image drift.

Duration:

```text
20 to 60 seconds
```

---

# 30. EASING

Create shared easing tokens.

Example:

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.76, 0, 0.24, 1);
--ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
```

Do not randomly choose easing on each component.

---

# 31. SCROLL REVEALS

Use text and media reveals.

## 31.1 Text

Preferred:

```text
mask container
text starts translated 110%
scroll enters threshold
text moves to 0
```

Duration:

```text
700 to 900 ms
```

Stagger multiline text:

```text
30 to 80 ms per line
```

## 31.2 Media

Preferred:

```text
media wrapper clips overflow
image starts scale 1.06
wrapper reveals vertically
image settles at 1.00
```

Do not animate every paragraph.

---

# 32. PARALLAX

Use very lightly.

Suitable:

- portrait
- selected project imagery
- photography images

Maximum movement:

```text
3 to 8 percent of element height
```

Large parallax movement makes the interface feel unstable.

---

# 33. PAGE TRANSITIONS

If the technical structure supports them, use a simple transition.

Example sequence:

```text
link selected
      ↓
selected media / colour persists
      ↓
dark or neutral panel rises
      ↓
new page loads
      ↓
panel reveals new page
```

Another simple option:

```text
current content opacity 1 → 0
overlay moves bottom → top
route changes
overlay moves top → out
```

Keep the full transition below approximately 1.1 seconds.

Navigation should never feel slow.

---

# 34. INTRO / LOADING EXPERIENCE

Do not add a long preloader only because the reference portfolio uses one.

If an intro is used:

```text
MARK LEE
```

or:

```text
HELLO
```

Duration target:

```text
first visit: 600 to 1000 ms
repeat visit: skip or <300 ms
```

The intro must never delay the visitor for several seconds.

Prefer loading assets efficiently rather than hiding loading behind animation.

---

# 35. GRAIN / TEXTURE

A subtle grain can help stop neutral backgrounds feeling sterile.

If used:

```text
opacity: 0.02 to 0.05
pointer-events: none
fixed overlay
```

Prefer a tiny procedural or compressed repeating texture.

Do not use a large video file for grain.

Disable it if it hurts performance.

---

# 36. BORDER RADIUS

The design should not look like a modern SaaS component system.

Suggested:

```text
images: 0 to 8 px
small buttons: full pill allowed
project media: 0 to 8 px
large panels: 0 to 16 px only when needed
```

Avoid 24 to 40 px radius on every section.

---

# 37. SHADOWS

Avoid obvious box shadows.

Depth should come from:

- scale
- layering
- overlap
- colour
- photography
- motion

If a shadow is necessary, keep it very soft.

---

# 38. ICONOGRAPHY

Use very few icons.

Preferred:

- arrow
- northeast arrow
- plus
- menu indicator
- close
- simple globe if necessary

Use a consistent stroke weight.

Do not use colourful icon packs.

---

# 39. RESPONSIVE HERO

## 39.1 Large desktop, 1440 px and above

Hero:

- full viewport
- portrait central
- name typography may exceed viewport width
- primary destinations distributed around portrait
- supporting copy right
- location left

## 39.2 Laptop, 1024 to 1439 px

Reduce:

- portrait width
- display font size
- horizontal offset of links
- large negative space

Preserve the same overall composition.

## 39.3 Tablet, 768 to 1023 px

Simplify spatial navigation.

Suggested:

```text
MARK LEE

[ portrait ]

Technical Projects
Resume
Photography
```

The three routes may become a horizontal or stacked group below the portrait.

Do not squeeze desktop placements into a tablet.

## 39.4 Mobile, below 768 px

Recompose completely.

Recommended:

```text
MARK LEE                    MENU

Technical, data &
photography.

[ large portrait ]

TECHNICAL PROJECTS      01
---------------------------
RESUME                  02
---------------------------
PHOTOGRAPHY             03

Scroll ↓
```

The name can still move behind or above the portrait, but do not make it unreadable.

Mobile should feel intentionally designed rather than a shrunken desktop page.

---

# 40. MOBILE TOUCH BEHAVIOUR

Remove:

- cursor followers
- hover-only information
- magnetic buttons
- pointer parallax

Replace hover information with:

- visible text
- tap state
- small inline labels

Interactive areas should be at least approximately 44 by 44 CSS pixels.

---

# 41. ACCESSIBILITY

The design must remain usable without animation.

## 41.1 Reduced motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When active:

- stop marquee
- remove parallax
- remove magnetic motion
- replace large animated reveals with opacity or no transition
- shorten page transitions
- keep all content immediately accessible

## 41.2 Keyboard

All navigation must work with keyboard.

Provide visible `:focus-visible` states.

Do not depend on mouse position to expose essential links.

## 41.3 Contrast

Text/background combinations should meet WCAG contrast requirements for normal text.

Do not place small grey text over complex photography without a supporting background or sufficient contrast.

## 41.4 Semantics

Use:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Heading order should be logical.

Only one primary page `<h1>` is preferred.

## 41.5 Images

Every meaningful image requires descriptive alt text.

Decorative images should use empty alt attributes.

---

# 42. PERFORMANCE TARGETS

The design should feel smooth because it is efficient, not because a loader hides poor performance.

Targets:

```text
LCP: < 2.5 s
CLS: < 0.1
INP: < 200 ms
```

Treat these as performance goals.

## 42.1 Images

Use:

- AVIF where appropriate
- WebP fallback if needed
- responsive `srcset`
- explicit width and height
- lazy loading below fold
- hero image prioritised

Do not load full-resolution photography thumbnails unnecessarily.

## 42.2 JavaScript

Avoid a heavy client bundle.

Use animation libraries only for motion that CSS cannot handle cleanly.

---

# 43. ASTRO IMPLEMENTATION DIRECTION

If this project uses Astro, keep the landing page mostly static and selectively add JavaScript.

Do not convert the whole page to React only for animations.

Recommended:

```text
Astro
+ CSS
+ small TypeScript modules
+ GSAP only for advanced timelines / ScrollTrigger if already approved
```

Possible component structure:

```text
src/
  components/
    landing/
      LandingHeader.astro
      LandingHero.astro
      HeroPortrait.astro
      HeroRoutes.astro
      IntroStatement.astro
      SelectedProjects.astro
      ProjectPreview.astro
      PhotographyPreview.astro
      ResumePreview.astro
      AboutPreview.astro
      ContactCTA.astro
      LandingFooter.astro

  scripts/
    landing/
      hero-motion.ts
      cursor-preview.ts
      scroll-reveal.ts
      page-transition.ts
      mobile-menu.ts

  styles/
    landing/
      tokens.css
      landing.css
      hero.css
      projects.css
      photography.css
      resume.css
      motion.css

  data/
    portfolio/
      projects.ts
      photography.ts
      experience.ts
```

Use the existing project structure if it already has conventions.

Do not create parallel architecture without checking the repository first.

---

# 44. DATA-DRIVEN CONTENT

Primary work should come from data rather than repeated hard-coded markup.

Example project type:

```ts
type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  thumbnail: string;
  featured: boolean;
  href: string;
};
```

Photography preview:

```ts
type PhotoPreview = {
  src: string;
  alt: string;
  category?: string;
  year?: number;
  href?: string;
  aspectRatio?: string;
};
```

Experience:

```ts
type ExperienceItem = {
  role: string;
  organisation: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
};
```

---

# 45. CSS TOKEN REQUIREMENT

Centralise repeat values.

Example:

```css
:root {
  --page-x: clamp(1rem, 3vw, 3rem);

  --bg: #e9e8e3;
  --surface: #f3f2ee;
  --ink: #171717;
  --muted: #6c6c67;
  --line: rgba(23, 23, 23, 0.16);
  --accent: #5058e8;

  --radius-sm: 0.25rem;
  --radius-pill: 999px;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.76, 0, 0.24, 1);
}
```

AI should not scatter magic values across dozens of selectors when a token is appropriate.

---

# 46. INTERACTION STATE MODEL

Each interactive route should support these states:

```text
idle
hover / focus
pressed
transitioning
active destination
```

For touch:

```text
idle
pressed
navigating
```

Do not build an interaction that works only with `mousemove`.

---

# 47. HERO ROUTE INTERACTION SPEC

Pseudo behaviour:

```text
pointer enters route
    ↓
route becomes active
    ↓
other routes reduce emphasis slightly
    ↓
associated visual preview appears
    ↓
portrait moves subtly
    ↓
cursor indicator appears

pointer exits route
    ↓
preview fades
    ↓
portrait returns
    ↓
all routes restore
```

Timing:

```text
route emphasis: 200 to 300 ms
preview reveal: 350 to 500 ms
portrait offset: 500 to 700 ms
exit: slightly faster than enter
```

Maximum portrait translation:

```text
8 to 18 px
```

Maximum portrait rotation:

```text
0 to 1 degree
```

Prefer no rotation unless it looks natural.

---

# 48. TECHNICAL ROUTE PREVIEW

Visual direction:

- subtle coordinate/grid treatment
- still based on actual project imagery
- no fake terminal rain
- no Matrix effect
- no random code snippets behind the portrait

Good examples:

- cropped visualisation preview
- map texture
- small data points
- project screenshot

The technical identity should come from real work.

---

# 49. RESUME ROUTE PREVIEW

Possible supporting content on hover:

```text
DATA ANALYST
ADELAIDE
EXPERIENCE / EDUCATION
```

or a few animated timeline labels.

Do not animate an entire CV over the hero.

---

# 50. PHOTOGRAPHY ROUTE PREVIEW

Use actual photography.

A good hover state:

```text
pointer enters PHOTOGRAPHY
      ↓
one selected photo fades behind portrait
      ↓
portrait remains visible
      ↓
text changes contrast if necessary
```

The photo preview should not flash rapidly.

If rotating images are used, rotate only after several seconds or per deliberate pointer movement.

---

# 51. SECTION TRANSITIONS

Each major section should have a visual relationship to the previous one.

Example:

```text
Hero
neutral / portrait
    ↓
Intro
large type
    ↓
Technical
media-dominant neutral
    ↓
Photography
dark / photographic
    ↓
Resume
returns to light neutral
    ↓
Contact
dark
```

This creates rhythm.

Do not give every section a different random background.

---

# 52. DESIGN RHYTHM

Think in alternating densities.

```text
HIGH IMPACT
Hero

QUIET
Introduction

HIGH CONTENT
Projects

VISUAL
Photography

STRUCTURED
Resume

QUIET
About

HIGH IMPACT
Contact
```

This prevents the page from feeling visually flat.

---

# 53. MICROCOPY STYLE

Text should be short and plain.

Good:

```text
Selected work
Technical projects
Photography
Experience
About
Get in touch
View project
View resume
```

Avoid excessive marketing language.

The work should speak for itself.

---

# 54. CONTENT PRIORITY

The hierarchy should be:

```text
1. Person
2. Three portfolio identities
3. Best work
4. Professional credibility
5. More detail
6. Contact
```

Do not lead with a long list of technologies.

---

# 55. PROJECT PAGE CONTINUITY

Although this document is primarily for the landing page, project links should feel connected.

A project page should inherit:

- same header
- same typography
- same neutral colour system
- same cursor behaviour
- same spacing system
- same transition language

Project page hero:

```text
PROJECT TITLE

Category
Year
Role

[ large project media ]
```

Avoid immediately switching to a documentation-site visual style.

---

# 56. PHOTOGRAPHY PAGE CONTINUITY

Photography can be more image-heavy but retain:

- same typography
- same header system
- same neutral base
- same transition motion
- same footer

The photography page may use a masonry or editorial grid but should not look like another brand.

---

# 57. RESUME PAGE CONTINUITY

Resume should be web-native.

Suggested sections:

```text
Profile
Experience
Education
Capabilities
Selected technical skills
Contact
Download PDF
```

Do not make the entire page resemble a PDF sheet floating on the screen.

---

# 58. ANIMATION BUDGET

The page should have a finite animation budget.

Recommended major effects:

1. one hero typography movement
2. one portrait depth interaction
3. hero route previews
4. project media hover
5. scroll text reveal
6. light media parallax
7. contact CTA interaction
8. optional page transition

If additional effects are added, another effect should usually be removed.

---

# 59. THINGS THE AI MUST NOT DO

When implementing this brief, do **not**:

- replace the design with a generic template
- add glass cards
- add animated gradient blobs everywhere
- add glowing borders
- add floating technology logos
- add a skill percentage section
- add a timeline into the hero
- add a typewriter effect by default
- add particles simply because the site is technical
- add 3D without a functional reason
- use excessive scroll hijacking
- hide important content behind hover
- add a five-second preloader
- use a custom cursor on mobile
- autoplay sound
- make the entire site black
- make every button a pill
- use three or four accent colours
- create a React island for static content
- introduce a new framework without approval
- delete existing content or routes without approval
- rewrite project data unless required
- publish to production without explicit approval

---

# 60. INITIAL WIREFRAME

Desktop concept:

```text
┌───────────────────────────────────────────────────────────────────────┐
│ MARK LEE ©2026                              WORK   ABOUT   CONTACT     │
│                                                                       │
│                  TECHNICAL PROJECTS  01                               │
│                                                                       │
│      BASED IN                              Data, technology            │
│      ADELAIDE                               and photography.           │
│                                                                       │
│                                                                       │
│   M A R K          ┌─────────────────┐          L E E                  │
│                    │                 │                                │
│                    │    PORTRAIT     │                                │
│                    │                 │                                │
│                    └─────────────────┘                                │
│                                                                       │
│         PHOTOGRAPHY 03                          RESUME 02              │
│                                                                       │
│                                                        SCROLL ↓       │
└───────────────────────────────────────────────────────────────────────┘
```

This is a compositional guide, not a pixel-perfect instruction.

---

# 61. MOBILE WIREFRAME

```text
┌─────────────────────────────┐
│ MARK LEE              MENU  │
│                             │
│ Data, technology            │
│ and photography.            │
│                             │
│       M A R K   L E E       │
│     ┌───────────────┐       │
│     │               │       │
│     │   PORTRAIT    │       │
│     │               │       │
│     └───────────────┘       │
│                             │
│ 01  TECHNICAL PROJECTS   →  │
│ ──────────────────────────  │
│ 02  RESUME               →  │
│ ──────────────────────────  │
│ 03  PHOTOGRAPHY          →  │
│ ──────────────────────────  │
│                             │
│ SCROLL ↓                    │
└─────────────────────────────┘
```

---

# 62. SECTION WIREFRAME

```text
INTRO
────────────────────────────────────────────────────────────

01 / ABOUT

I work across data, technology
and photography, building
projects that turn ideas and
information into useful experiences.

                                      More about me →


TECHNICAL
────────────────────────────────────────────────────────────

02 / SELECTED WORK                                  (04)

Technical Projects

[                    FEATURED PROJECT                 ]

Title
Category / Year

                    [ PROJECT ]       [ PROJECT ]

                         View all projects →


PHOTOGRAPHY
────────────────────────────────────────────────────────────

03 / PHOTOGRAPHY

                         Photography

              [ wide photo ]

 [ portrait ]                         [ portrait ]

                    [ landscape ]

                         View photography →


RESUME
────────────────────────────────────────────────────────────

04 / EXPERIENCE

Resume

Role                     Organisation                  Dates
────────────────────────────────────────────────────────────
Role                     Organisation                  Dates
────────────────────────────────────────────────────────────
Role                     Organisation                  Dates

                                      View resume →


CONTACT
────────────────────────────────────────────────────────────

Have something
interesting to discuss?

GET IN TOUCH                                      [ → ]

Email       LinkedIn       GitHub       Instagram
```

---

# 63. FIRST IMPLEMENTATION PASS

The first implementation should contain **no advanced animation**.

Build:

- global grid
- typography
- colour tokens
- header
- hero layout
- portrait
- three routes
- page sections
- responsive structure

Review visual composition first.

Do not try to solve layout and complex animation at the same time.

---

# 64. SECOND IMPLEMENTATION PASS

After layout approval, add:

- hero typography movement
- simple route hover
- text reveals
- image hover
- mobile menu transition

Review again.

---

# 65. THIRD IMPLEMENTATION PASS

Only after previous approval, consider:

- cursor preview
- magnetic CTA
- project preview following cursor
- parallax
- advanced page transitions

Each feature should justify its performance and maintenance cost.

---

# 66. QA CHECKLIST

## Visual

- [ ] Hero communicates person + three directions immediately
- [ ] Portrait remains the hero focus
- [ ] Display typography has enough scale
- [ ] Supporting copy remains secondary
- [ ] Spacing feels intentional
- [ ] Page does not resemble a component template
- [ ] Photography keeps its visual quality
- [ ] Technical projects use real media
- [ ] Resume content remains easy to scan
- [ ] Contact section has a clear end point

## Interaction

- [ ] Hero routes work with mouse
- [ ] Hero routes work with keyboard
- [ ] Mobile does not depend on hover
- [ ] Cursor indicator disappears correctly
- [ ] Hover exit is faster than hover entry
- [ ] Animations do not block navigation
- [ ] Reduced-motion mode works
- [ ] Menu can close using Escape
- [ ] Focus state remains visible

## Responsive

- [ ] 1920 px desktop checked
- [ ] 1440 px desktop checked
- [ ] 1280 px laptop checked
- [ ] 1024 px checked
- [ ] 768 px tablet checked
- [ ] 430 px mobile checked
- [ ] 390 px mobile checked
- [ ] 360 px mobile checked
- [ ] portrait does not cover primary navigation
- [ ] display typography does not create horizontal overflow

## Performance

- [ ] hero image prioritised
- [ ] below-fold images lazy loaded
- [ ] image dimensions reserved
- [ ] no unnecessary client hydration
- [ ] animation code loaded only where required
- [ ] no oversized video used for decorative effects
- [ ] no continuous animation causes high CPU usage
- [ ] page remains usable before JavaScript executes where practical

---

# 67. AI IMPLEMENTATION CONTRACT

Any AI receiving this document should follow this sequence.

## Step 1: Inspect

Before editing, inspect:

- current framework
- route structure
- existing design system
- existing components
- existing fonts
- existing project data
- existing image assets
- existing animation dependencies
- responsive conventions

## Step 2: Report

Return a short implementation plan including:

- files to change
- files to create
- existing components to reuse
- dependencies required
- potential conflicts
- areas where this specification conflicts with the current codebase

## Step 3: Prototype

Implement the visual layout first.

Do not publish.

## Step 4: Review

Wait for review of:

- hero composition
- typography
- section spacing
- portrait scale
- primary navigation placement
- mobile layout

## Step 5: Motion

Add motion only after the static design is accepted.

## Step 6: QA

Run:

- build
- lint if configured
- type check if configured
- responsive review
- keyboard review
- reduced motion review

## Step 7: Delivery

Provide:

- exact files changed
- summary of changes
- testing performed
- known limitations
- screenshots if supported
- no production deployment unless explicitly requested

---

# 68. PRIORITY ORDER WHEN REQUIREMENTS CONFLICT

If something cannot satisfy every part of this document, use this priority:

```text
1. Usability
2. Content clarity
3. Responsive behaviour
4. Accessibility
5. Performance
6. Visual hierarchy
7. Interaction quality
8. Decorative motion
```

Never damage usability to preserve an animation.

---

# 69. DESIGN REVIEW QUESTIONS

Before approving the landing page, answer:

1. Does the first screen immediately feel personal?
2. Can a visitor identify Technical, Resume and Photography without scrolling?
3. Is the portrait strong enough to anchor the page?
4. Is the typography doing enough visual work?
5. Are there too many UI containers?
6. Does the design still work with animation disabled?
7. Does mobile feel designed separately rather than compressed?
8. Do the technical and photography sections feel like one brand?
9. Is the page memorable without becoming confusing?
10. Would a recruiter still find the relevant information quickly?

---

# 70. REFERENCE SOURCES

These sources are for design study and context.

## Dennis Snellenberg

Homepage:  
https://dennissnellenberg.com/

Work:  
https://dennissnellenberg.com/work

About:  
https://dennissnellenberg.com/about

Archive:  
https://dennissnellenberg.com/archive

## Third-party design references

Lapa Ninja portfolio reference:  
https://www.lapa.ninja/post/dennissnellenberg/

Swipefile design reference:  
https://swipefile.design/ref/personal-dennis-snellenberg/

A1 Gallery creator reference:  
https://www.a1.gallery/creator/dennis-snellenberg

UI UX Showcase reference:  
https://uiuxshowcase.com/portfolio/dennis-snellenberg/

Awwwards:  
https://www.awwwards.com/

---

# 71. RESEARCH OBSERVATIONS USED IN THIS BRIEF

At the time this document was prepared, the current Dennis Snellenberg portfolio publicly presents:

- a freelance designer/developer identity
- a large personal-name-led introduction
- a prominent portrait-led visual identity
- recent work directly on the home page
- dedicated Work and About areas
- an emphasis on interaction, development and design
- micro-animation and transition work as part of the creator's stated focus
- a predominantly neutral visual direction documented by design galleries
- oversized type documented by portfolio galleries
- a direct contact CTA at the end of the experience

Third-party references also identify the site with characteristics including:

- minimal portfolio design
- huge type
- neutral grey / white / near-black colour treatment
- scroll animation
- interactive behaviour
- PP Neue Montreal as a catalogued typeface reference

These observations should be treated as reference research, not instructions to reproduce the original website.

---

# 72. FINAL DESIGN STATEMENT

The desired landing page is a **personal editorial portfolio with motion**.

Its main visual ingredients are:

```text
PERSON
+
OVERSIZED TYPE
+
NEGATIVE SPACE
+
REAL PROJECT MEDIA
+
SUBTLE MOTION
+
THREE CLEAR IDENTITIES
```

The hero should be memorable because the person, typography and navigation form one composition.

The rest of the page should become progressively quieter and more informative.

Interaction should reinforce navigation.

Motion should support the layout.

Photography should provide visual richness.

Technical work should provide evidence of capability.

Resume content should provide professional clarity.

The final site should feel designed specifically for this person rather than assembled from popular UI components.

---

# 73. ONE-PARAGRAPH BRIEF FOR AN AI

If an AI needs the shortest possible interpretation of this file, use the following:

> Design a responsive personal portfolio landing page inspired by the underlying principles of Dennis Snellenberg's portfolio without copying it. Build the first screen around a large central portrait, oversized name typography, strong negative space and three clear destinations: Technical Projects, Resume and Photography. Use a neutral editorial colour system, large grotesk typography, minimal UI chrome and subtle cursor/scroll interaction. Continue below the hero with a short introduction, selected technical work, photography preview, resume preview, About section and strong contact close. Prioritise layout and typography before animation. Use motion as feedback, keep mobile simpler, support reduced motion and keyboard navigation, and keep performance high. Do not introduce generic SaaS cards, excessive gradients, glassmorphism, unnecessary 3D or decorative effects.
