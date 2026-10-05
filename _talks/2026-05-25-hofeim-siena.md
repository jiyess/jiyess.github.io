---
title: "Efficient Thermal Simulation in Metal Additive Manufacturing via Semi-Analytical Isogeometric Analysis"
collection: talks
type: "Lightning talk & poster"
permalink: /talks/2026-05-25-hofeim-siena
redirect_from:
  - /talks/2026-05-25-Siena/
venue: "High-Order Finite Element and Isogeometric Methods (HOFEIM 2026)"
date: 2026-05-25
location: "Siena, Italy"
---

[Slides](/files/pdf/slides/2026-05-25-Siena/poster_pitch.pdf),
[Poster](/files/pdf/slides/2026-05-25-Siena/HOFEIM2026_poster.pdf),
[Photo 1](/images/talks/2026-05-25-hofeim-siena/group-photo.jpg),
[Photo 2](/images/talks/2026-05-25-hofeim-siena/photo-1.jpg),
[Photo 3](/images/talks/2026-05-25-hofeim-siena/photo-2.jpg)

This poster presents a semi-analytical isogeometric framework for efficient thermal simulation in laser powder bed fusion (LPBF). The proposed method decomposes the temperature field into an analytical point-source solution, which captures the rapidly moving laser heat input, and a smooth numerical correction field, which enforces boundary conditions on realistic geometries. By discretizing the correction field with NURBS-based isogeometric analysis (IGA), the method avoids scan-wise remeshing and overcomes the limitations of classical image-source techniques for complex CAD geometries. Numerical examples demonstrate accurate temperature prediction on curved boundaries, thin-wall structures, and free-form parts, with substantial efficiency gains compared with conventional FEM. At matched accuracy, the method achieves CPU speed-ups of up to 80× over Abaqus C3D4 and 258× over Abaqus C3D20, highlighting its potential for high-fidelity and computationally efficient LPBF process simulation.

Keywords: **Isogeometric Analysis**, **Additive Manufacturing**, **Laser Powder Bed Fusion**, **Thermal Simulation**, **Semi-Analytical Methods**
