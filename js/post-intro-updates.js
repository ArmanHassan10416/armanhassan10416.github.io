/* Updates discussed after the hero-intro wording review.
   This intentionally mutates only the fields agreed in that discussion,
   so the user's existing portfolio-data.js remains untouched. */
(function () {
  const d = window.portfolioData;
  if (!d) throw new Error('portfolioData must load before post-intro-updates.js');

  d.site.sections = d.site.sections || {};
  d.site.sections.education = true;

  d.site.subtitle = "Thermal & Mass Transport · Advanced Materials · Mechanical Systems";

  d.site.heroText =
    "Mechanical Engineering graduate from BUET working on nanoscale thermal transport " +
    "in polymer nanocomposites and 2D heterostructures, molecular mass transport in porous materials, " +
    "and mechanical and robotic hardware development. My research interests span nanoscale transport, " +
    "programmable and multifunctional materials, mechanical metamaterials, architected structures, " +
    "and adaptive mechanical systems.";

  d.site.description =
    "Mechanical Engineering graduate from BUET working on nanoscale thermal and mass transport, " +
    "advanced materials, programmable structures, and mechanical systems.";

  d.education = Object.assign({}, d.education, {
    degree: "B.Sc. in Mechanical Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    graduation: "June 2026",
    thesis: "Molecular Dynamics Simulation of PDMS–hBN Nanocomposites for Thermal Conductivity Enhancement",
    supervisor: "Dr. Md. Ashiqur Rahman",
    researchMentor: "Dr. Sheikh Fahad Ferdous"
  });

  d.researchInterests = [
    {
      title: "Programmable Materials & Architected Structures",
      description:
        "I am interested in material systems and structural architectures where geometry, composition, " +
        "and mechanical properties enable adaptation, actuation, sensing, and other programmable behavior.",
      topics: [
        "Mechanical Metamaterials",
        "Programmable Materials",
        "Architected Materials",
        "Robotic Materials",
        "Morphing Structures",
        "Adaptive Structures",
        "Compliant Mechanisms",
        "Soft Robotics"
      ],
      emphasis: "equal"
    },
    {
      title: "Thermal Transport & Functional Nanocomposites",
      description:
        "My undergraduate and ongoing research focus on nanoscale thermal transport, polymer nanocomposites, " +
        "interfaces, and molecular simulation, with particular interest in thermally functional and " +
        "multifunctional material systems.",
      topics: [
        "Polymer Nanocomposites",
        "Thermal Interface Materials",
        "PDMS",
        "hBN",
        "Graphene",
        "Interfacial Thermal Transport",
        "Molecular Dynamics",
        "Phonon Transport"
      ],
      emphasis: "equal"
    },
    {
      title: "Mechanical & Robotic Systems",
      description:
        "My mechanical engineering background includes rover manipulation systems, custom actuation mechanisms, " +
        "compliant prosthetic devices, prototyping, and fabrication-oriented engineering.",
      topics: [
        "Planetary Robotics",
        "Robotic Manipulation",
        "Mechanism Design",
        "Mechatronics",
        "Mechanical Actuation",
        "Field Robotics"
      ],
      emphasis: "equal"
    }
  ];
})();
