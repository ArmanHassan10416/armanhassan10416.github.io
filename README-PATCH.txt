POST-INTRO UPDATE PATCH

This patch contains only the changes discussed from the hero-intro wording review onward.

Upload/replace:
- index.html
- css/style.css
- js/app.js
- js/post-intro-updates.js   <-- new file

Important:
- DO NOT replace js/portfolio-data.js with this patch.
- Your current portrait path/filename remains untouched.
- Your GA4 measurement ID, links, publications, research/project content, and previous custom edits remain in your existing portfolio-data.js.

Included changes:
1. Hero line:
   Thermal & Mass Transport · Advanced Materials · Mechanical Systems

2. Hero paragraph:
   Covers nanoscale thermal transport, molecular mass transport in porous materials,
   mechanical/robotic hardware development, programmable/multifunctional materials,
   metamaterials, architected structures, and adaptive mechanical systems.

3. Education:
   Moves to the first section after the stats strip.
   Does not repeat CGPA/rank/Dean's List.
   Adds thesis title, Supervisor, and Research Mentor.
   Removes the duplicate Education card from the later Experience section.

4. Research Interests:
   Removes PRIMARY / FOUNDATION / COMPLEMENTARY labels.
   Makes all 3 cards equal visual weight.
   No dark 'main interest' card.
   Uses:
   - Programmable Materials & Architected Structures
   - Thermal Transport & Functional Nanocomposites
   - Mechanical & Robotic Systems

5. Navigation/footer:
   Education becomes the first navbar section.
   Footer uses Mechanical Systems instead of generic Robotics.

This patch assumes your existing site already contains the earlier visual/motion updates.
